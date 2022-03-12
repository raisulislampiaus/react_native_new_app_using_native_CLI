import React, {useState, useEffect } from 'react'
import { View, Text, TextInput, Keyboard, Button, ScrollView,  FlatList, TouchableOpacity, StyleSheet,Dimensions, SafeAreaView} from 'react-native'
// const data = require('../../assets/data/products.json')
// const data = require('../../assets/data/productss')
import data from '../../assets/data/products.js'
import ProductsList from './ProductsList'
import Feather from 'react-native-vector-icons/Feather'
import { Container, NativeBaseProvider, Header, Item, Input } from "native-base"
import Icon from 'react-native-vector-icons/Ionicons';
import Banner from '../../components/Banner.js'
import SearchProducts from './SearchProducts'


var { height } = Dimensions.get("window");
const ProductsContainer = (props) => {
   const [products, setProducts] = useState([]);
   const [productFilter, setProductFilter] = useState([])
   const [focus, setFocus] = useState();
   
   
   useEffect(()=> {
       setProducts(data)
       setProductFilter(data)
       setFocus(false)
        return ()=> {
          setProducts([])
          setProductFilter([])
          setFocus()
        }
   }, [])

   const searchProduct = (text) => {
      setProductFilter(
        products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
      )
   }
   const openList = () => {
     setFocus(true);
   } 
   const onBlur = () => {
     setFocus(false);
   }
    return (  
      <View>  
          <View style={styles.container}>
            <TextInput style={styles.input}  
              placeholder="Search" 
              onFocus={openList}
              onChangeText={(text) => searchProduct(text)}
            />
             {focus == true ? (
               <Icon onPress={onBlur} name="ios-close" size={30} color="#4F8EF7" />
             ) : null}
          </View>
          
          {focus == true ? (
              <SearchProducts 
                navigation={props.navigation}
                productFilter={productFilter}
              />
          ) : (
            <View>
                <View>
                  <Banner />
                </View>  
                <FlatList 
                    data={products}
                    numColumns={2}
                    renderItem={({item}) => <ProductsList 
                    navigation={props.navigation}
                    key={item._id}
                    item={item}/>}
                    keyExtractor={item => item._id}
                /> 
          </View>
          )}
          
      </View>  
    )
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,

  },
 input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  
  // droidSafeArea: {
  //        paddingTop: Platform.OS === 'android' ? 25 : 0
  //   }
});

export default ProductsContainer
