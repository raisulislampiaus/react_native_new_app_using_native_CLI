import React from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeNavigation from './HomeNavigation'

const Tab = createBottomTabNavigator();

const main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: '#e91e63'
      }}
    >
     <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            
               <MaterialCommunityIcons name="home" color={color} size={size} />
               
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <View>
               <MaterialCommunityIcons name="cart-arrow-up" color={color} size={size} />
               {/* <CartIcon /> */}
             </View>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarLabel: 'User',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default main
