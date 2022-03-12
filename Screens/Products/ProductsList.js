import React from 'react'
import { View , Text, TouchableOpacity, Dimensions} from 'react-native'
import ProductsCard from './ProductsCard'
var { width } = Dimensions.get("window");

const ProductsList = (props) => {
     const { item } = props;
    return (
        <TouchableOpacity 
         style={{ width: "50%" }}
         onPress={() => 
            props.navigation.navigate("Product Detail", { item: item})
          }
        >
          <View >
             <ProductsCard {...item} />
          </View>
        </TouchableOpacity>
    )
}

export default ProductsList
