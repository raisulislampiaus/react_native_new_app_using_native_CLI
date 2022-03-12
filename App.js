import React from 'react'
import { View , Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native'
import ProductsContainer from './Screens/Products/ProductsContainer'
import Header from './components/Header.js'
import { NavigationContainer } from '@react-navigation/native';
import Main from './navigation/Main'


const App = () => {
  return (
      <NavigationContainer>
        {/* <SafeAreaView >
          <ScrollView nestedScrollEnabled={true}> */}
            <Header />
            <Main />
          {/* </ScrollView>
        </SafeAreaView> */}
      </NavigationContainer>  
        
  )
}

// const styles = StyleSheet.create({

// droidSafeArea: {
//         flex: 1,
//         paddingTop: Platform.OS === 'android' ? 25 : 0
//     },

// })
//<SafeAreaView style={styles.droidSafeArea}>

export default App
