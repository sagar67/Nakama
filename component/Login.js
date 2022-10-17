import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import CustomButton from './ui/CustomButton';

function Login() {
  return (
    <View style={styles.crewContainer}>
      <Text style={styles.label}>Nakama</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="white"
        cursorColor={'white'}
        // selectTextOnFocus
        textAlign="center"
      />
      <Text style={styles.label}>Passcode</Text>
      <TextInput
        style={styles.input}
        placeholder="Passcode"
        placeholderTextColor="white"
        cursorColor={'white'}
        maxLength={8}
        keyboardType="decimal-pad"
      />
      <CustomButton>Join Crew</CustomButton>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  crewContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    padding: 8,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 6,
    margin: 10,
    color: 'white',
    fontSize: 16,
  },
});
