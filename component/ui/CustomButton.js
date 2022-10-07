import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

function CustomButton({onPress, children}) {
  return (
    <Pressable
      style={({pressed}) => pressed && styles.pressed}
      onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.55,
  },
  button: {
    borderWidth: 2,
    borderRadius: 6,
    backgroundColor: 'white',
    width: '100%',
    padding: 6,
    margin: 12,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
