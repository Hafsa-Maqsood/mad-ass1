import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button, TextInput} from 'react-native';
import { useState } from 'react';
import React from 'react';
import Icon  from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  function handlebutton() //button function
 {
    console.log('button is click');
  } 
  function handleSubmit()
  {
    console.log('clicked')
    setIsHungary(!ishungary)
  }
  
function feedMyCat()
{
}
function handleInput(arg)
{
}
const [ishungary , setIsHungary]=useState(true)
  return (
    <View style={styles.container}>
     <Text onPress={feedMyCat}>I am a cat and I am {ishungary?'hungary please feed me': 'full thanks for feed, me'}</Text>
      <TextInput placeholder='type here..' onChangeText={handleInput} ></TextInput>
      <Button onPress={handleSubmit} title='clickme!' color={'red'} ></Button>
    <Button title='submit' color={'green'} onPress={handlebutton} ></Button>   
    </View>

  );
 