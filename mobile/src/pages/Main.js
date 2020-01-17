import React, { useState, useEffect } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Image, View, Text } from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const {granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        })

      }
    }
    loadInitialPosition();
  }, []);

  if(!currentRegion) return null;

  return (
    <MapView initialRegion={currentRegion} style={ styles.map }>
      <Marker coordinate={{ latitude: -20.5317914, longitude: -47.3987784}}>
        <Image style={ styles.avatar } source={{ uri: 'https://avatars3.githubusercontent.com/u/39650868?s=460&v=4' }}/>

        <Callout onPress={() => {
          navigation.navigate('Profile', { github_username: 'fernandosouzamarques' })
        }}>
          <View style={styles.callout}>
            <Text style={styles.devName}>Fernando Souza Marques</Text>
            <Text style={styles.devBio}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
            <Text style={styles.devTechs}>JavaScript, Vue.js, Node.js</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#ffffff'
  },
  callout: {
    width: 260,
  },
  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  devBio: {
    color: '#666666',
    marginTop: 5,
  },
  devTechs: {
    marginTop: 5,
  }
})

export default Main;