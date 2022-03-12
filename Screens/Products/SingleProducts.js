import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  ScrollView,
} from 'react-native';

export default function SingleProducts(props) {
  const [item, setItem] = useState(props.route.params.item);
  return (
    <View style={styles.container}>
      <ScrollView style={{marginBottom: 80, padding: 5}}>
        <View>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{
              uri: item.image
                ? item.image
                : 'https://cdn.pixabay.com/photo/2016/09/23/11/37/cardboard-1689424_960_720.png',
            }}
          />
        </View>
        <View style={styles.Elementcontainer}>
          <Text style={styles.containerName}>{item.name}</Text>
          <Text style={styles.containerBand}>{item.brand}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
  },
  image: {
    width: '100%',
    height: 250,
  },
  Elementcontainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerName: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 20,
  },
  containerBand: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 20,
  },
});
