import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Login from '../component/Login';

function Home() {
  return (
    <View style={styles.root}>
      <ImageBackground
        imageStyle={styles.image}
        blurRadius={1}
        style={styles.rootContainer}
        source={
          require('../assets/images/red.jpg')
        }
        resizeMode="cover">
        <Login />
      </ImageBackground>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
  },
});
