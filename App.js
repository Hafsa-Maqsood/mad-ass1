import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  , Image , ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home  from './screens/Home';
import About from './screens/About';
import Contact from './screens/contact';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
  <NavigationContainer style={styles.container}>
   <Stack.Navigator initialRouteName='Home'>
   <Stack.Screen name='Home' component={Home}></Stack.Screen>
    <Stack.Screen name='About' component={About}></Stack.Screen>
    <Stack.Screen name='Contact' component={Contact}></Stack.Screen>
   </Stack.Navigator>
  </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'pink',
   
  
  },
});
