import 'react-native-gesture-handler'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Info from './screens/Info'
import Main from './screens/Main'

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main}/>
      <Stack.Screen name="Info" component={Info}/>
      </Stack.Navigator>
    </NavigationContainer>
     
  )
}

export default App