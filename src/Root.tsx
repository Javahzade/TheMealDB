import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home} from './views/Home';
import {Details} from './views/Details';
import {Favorite} from './views/Favorite';

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="Home" component={Home} />
      <Bottom.Screen name="Favorite" component={Favorite} />
    </Bottom.Navigator>
  );
};

export const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Bottom"
          component={BottomNavigator}
        />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
