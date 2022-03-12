import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import ProductsContainer from "../Screens/Products/ProductsContainer";
import SingleProducts from '../Screens/Products/SingleProducts'


const Stack = createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Home'
                component={ProductsContainer}
                options={{
                    headerShown: false,
                }}
            />
            
            <Stack.Screen 
                name='Product Detail'
                component={SingleProducts}
                options={{
                    headerShown: false,
                }}
            />
            
            
        </Stack.Navigator>
    )
}

export default function HomeNavigation() {
    return <MyStack />;
}