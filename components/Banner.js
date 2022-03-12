import React, {useState, useEffect} from 'react'
import { Image, StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper/src'

var { width } = Dimensions.get("window");

const Banner = () => {
    const [ bannerData, setBannerData ] = useState([]);

    useEffect( () => {
        setBannerData([ "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083379_960_720.jpg",
        "https://cdn.pixabay.com/photo/2016/12/01/18/17/mobile-phone-1875813_960_720.jpg",
        "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
        "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg"]
        )
        return () => {
            setBannerData([])
        }
    }, [])
    return (
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.swiper}>
                <Swiper 
                style={{ height: width / 2 }}
                showButtons={false}
                autoplay={true}
                autoplayTimeout={2}
                >
                {bannerData.map((item) =>{
                    return(
                        <Image 
                        key={item}
                        style={styles.imageBanner}
                        resizeMode="contain"
                        source={{uri: item }}
                        />
                    );
                })}
                </Swiper>
                <View style={{ height: 20}}></View>
            </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
  },
  swiper: {
    width: width,
    alignItems: "center",
    marginTop: 10,
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});

export default Banner
