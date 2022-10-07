import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Login() {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    // backgroundColor: 'white',
  },
});
