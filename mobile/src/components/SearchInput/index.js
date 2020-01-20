import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function InputText({ currentRegion }) {
  const [techs, setTechs] = useState('');
  const [devs, setDevs] = useState([]);

  async function loadDevs() {
    const { latitude, longitude } = currentRegion;

    const response = await api.get('/search', {
      params: {
        latitude,
        longitude,
        techs,
      }
    });

    setDevs(response.data.devs);
    setupWebsocket();
  }

  return (
    <View style={styles.searchForm}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar devs por techs..."
        placeholderTextColor="#999999"
        autoCapitalize="words"
        autoCorrect={false}
        value={techs}
        onChangeText={setTechs}
      />
      <TouchableOpacity onPress={loadDevs} style={styles.loadButton}>
        <MaterialIcons name="my-location" size={20} color="#ffffff"/>
      </TouchableOpacity>
    </View>
  )

};

const styles = StyleSheet.create({
  searchForm: {
    position: 'absolute',
    // bottom: 20, -> Use keyboard api to align form below and rise when opening keyboard
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row',
  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#ffffff',
    color: '#333333',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 3,
  },
  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: '#8e4dff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  }
})

export default InputText;