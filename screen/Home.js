import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Login from '../component/Login';

function Home() {
  return <View style={styles.root}>
    <ImageBackground
  imageStyle={styles.image}
  blurRadius={1}
  style={styles.rootContainer}
  source={
    // uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUkZBcBSkjGkk_L64s_ki8F23wVRlEwU7zMQ&usqp=CAU',
    require('../assets/images/red.jpg')
  }
  resizeMode="cover">
    <Login/>
</ImageBackground>
  </View>
}

export default Home

const styles = StyleSheet.create({
    root:{
        flex:1,
    },
    rootContainer: {
      flex: 1,
    },
    image: {
      // flex: 1,
      // width: '100%',
      // height:'100%',
    },
  });