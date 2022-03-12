import React from 'react'
import { View, StyleSheet,Dimensions, Text, Image,  } from 'react-native';
import { ListItem } from 'react-native-elements'

var { width } = Dimensions.get("window");

const SearchProducts = (props) => {
    const { productFilter } = props;
    return (
        
            <View style={{ width: width }}>
                { productFilter.length > 0 ? (
                    
                        productFilter.map((item) => (
                            
                            <ListItem  
                              onPress={() => 
                                props.navigation.navigate("Product Detail", { item: item})
                              }
                              key={item._id} style={styles.user}
                            >
                              <Image style={styles.image}
                                    resizeMode="contain"
                                    source={{ uri: item.image ? item.image : 'https://cdn.pixabay.com/photo/2016/09/23/11/37/cardboard-1689424_960_720.png' }}
                                />
                                <Text>{item.name}</Text>
                            </ListItem>
                        ))
                    
                ) : (
                    <View style={styles.center}>
                        <Text style={{ alignSelf: 'center' }}>
                        no products match
                        </Text>
                    </View>
                )}
            </View>
        
    );
};

const styles = StyleSheet.create({
    center: {
        alignContent: 'center',
        justifyContent: 'center',
    },
    user: {
    flexDirection: 'row',
    marginBottom: 6,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 40,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 60,
  },
})

export default SearchProducts