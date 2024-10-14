import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {favoriteSlice} from '../redux/slice';

export const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [searchValue, setSearchValue] = useState('');
  const [meals, setMeals] = useState([]);

  const handleFetch = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`,
      );
      const data = await response.json();
      setMeals(data.meals);
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          value={searchValue}
          placeholder="Search"
          onChangeText={setSearchValue}
        />
        <Button title="GO" onPress={handleFetch} />
      </View>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.contentList}
        data={meals}
        keyExtractor={item => `${item.idMeal}`}
        renderItem={({item}) => {
          return (
            <View style={styles.item} key={item.idMeal}>
              <Image style={styles.image} source={{uri: item.strMealThumb}} />
              <Text style={styles.label}>{item.strMeal}</Text>
              <View style={styles.buttons}>
                <Button
                  title="Details"
                  onPress={() =>
                    navigation.navigate('Details', {id: item.idMeal})
                  }
                />
                <Button
                  title="Favorite"
                  onPress={() =>
                    dispatch(favoriteSlice.actions.addFavorites(item))
                  }
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    flex: 1,
    maxHeight: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  input: {
    flex: 1,
    backgroundColor: 'rgba(220,220,220, 1)',
    height: 50,
    borderRadius: 12,
    padding: 8,
    fontSize: 16,
  },
  list: {
    flex: 1,
  },
  contentList: {
    flexGrow: 1,
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').width - 20,
    borderRadius: 10,
  },
  label: {
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: 'yellow',
    color: 'black',
    position: 'absolute',
    width: '100%',
    padding: 8,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttons: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    gap: 10,
    backgroundColor: 'orange',
    borderRadius: 10,
  },
});
