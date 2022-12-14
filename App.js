import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Home from './screen/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: "black" },
      headerTintColor: "white",
      contentStyle: { backgroundColor: "white" },
    }}>
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
   </NavigationContainer>
  )
};

export default App;
