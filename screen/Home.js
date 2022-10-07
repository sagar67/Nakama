import React from 'react'
import { ImageBackground, Text, View } from 'react-native'

function Home() {
  return <View>
    <ImageBackground
  imageStyle={styles.image}
  style={styles.root}
  source={
    // uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUkZBcBSkjGkk_L64s_ki8F23wVRlEwU7zMQ&usqp=CAU',
    require('../assets/images/red.jpg')
  }
  resizeMode="repeat">
    <Text>Home Screen</Text>
</ImageBackground>
  </View>
}

export default Home

const styles = StyleSheet.create({
    root: {
      flex: 1,
    },
    image: {
      // flex: 1,
      // width: '100%',
      // height:'100%',
      opacity: 0.75,
    },
  });