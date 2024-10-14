import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {favoriteSlice} from '../redux/slice';

export const Favorite = () => {
  const dispatch = useDispatch();
  const meals = useSelector(state => state.favorite.meals);
  console.log(meals);
  return (
    <View style={styles.container}>
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
                  title="Delete"
                  onPress={() =>
                    dispatch(favoriteSlice.actions.deleteFavorites(item))
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
    backgroundColor: 'red',
    borderRadius: 10,
  },
});
