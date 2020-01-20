import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function Chat({ navigate }) {
  return(
    <View>
      <View style={styles.chat}>
        <Image style={ styles.avatar } source={{uri: 'https://avatars3.githubusercontent.com/u/39650868?s=460&v=4'}}/>
        <Text style={ styles.nameDev }>Fernando Souza Marques</Text>
      </View>
      <View style={styles.chat}>
        <Image style={ styles.avatar } source={{uri: 'https://avatars3.githubusercontent.com/u/39650868?s=460&v=4'}}/>
        <Text style={ styles.nameDev }>Fernando Souza Marques</Text>
      </View>
      <View style={styles.chat}>
        <Image style={ styles.avatar } source={{uri: 'https://avatars3.githubusercontent.com/u/39650868?s=460&v=4'}}/>
        <Text style={ styles.nameDev }>Fernando Souza Marques</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  chat: {
    backgroundColor: '#ffffff',
    marginHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 4,
    marginBottom: 5,
    shadowColor: '#000000',
    flexDirection: 'row',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 3,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 25,
    borderWidth: 2,
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
  },
  nameDev: {
    color: '#333333',
    fontSize: 18,
    paddingLeft: 10,
    textAlignVertical: 'top',
  }
})


export default Chat;