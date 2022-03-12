import React from 'react'
import {
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text,
    Button
} from 'react-native'

var { width } = Dimensions.get("window");

const ProductsCard = (props) => {
     const { name, image, price} = props;
    return (
        <View style={styles.container}>
          <Image style={styles.image}
           resizeMode="contain"
           source={{ uri: image ? image : 'https://cdn.pixabay.com/photo/2016/09/23/11/37/cardboard-1689424_960_720.png' }}
           />
          <View style={styles.card} />
          <Text style={styles.title}>
            {name.length > 15 ? name.substring(0, 15 - 3)
               + '...' : name
            }
          </Text>
          <Text style={styles.price}>${price}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        height: width / 1.7,
        padding: 10,
        borderRadius: 20,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white'
    },
    image: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        width: width / 2 - 20 - 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 14,
        textAlign: 'center'
    },
    price: {
        fontSize: 20,
        color: 'orange',
        marginTop: 10
    }
})

export default ProductsCard
