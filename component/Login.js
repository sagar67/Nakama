import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

function Login() {
  return (
    <View>
      <Text style={styles.label}>Crew</Text>
      <TextInput placeholder="Crew Name" />
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  label: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    // backgroundColor: 'white',
  },
});
