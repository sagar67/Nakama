import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';


const App = () => {
  return (
    <ImageBackground
      imageStyle={styles.image}
      style={styles.root}
      source={
        // uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUkZBcBSkjGkk_L64s_ki8F23wVRlEwU7zMQ&usqp=CAU',
        require('./assets/images/red.jpg')
      }
      resizeMode="repeat">
      <Text>OPR</Text>
    </ImageBackground>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    flex: 1,
    // width: '100%',
    // height:'100%',
    opacity: 0.75,
  },
});
