import React from 'react'
import { View , SafeAreaView, Image, Text, FlatList, TouchableOpacity, StyleSheet,Dimensions} from 'react-native'

const Header = () => {
    return (
        <SafeAreaView style={styles.heeader}>
           <Image
              source={require("../assets/headers.png")}
              resizeMode="contain"
              style={{ height: 50 }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    heeader: {
        width: "100%",
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "center",
        padding: 20,
    }
})

export default Header
