import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button, TextInput} from 'react-native';
import { useState } from 'react';
import React from 'react';
import Icon  from 'react-native-vector-icons/FontAwesome5';

//export default function App() {
  /* function handlebutton() //button function
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

  );*/
  /*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
export default function App() {
  return (
    <View style={styles.parentContainer}>
    <View style={styles.searchContainer}>
      <Icon name='search' size={18} color='red' style={styles.icon} />
      <TextInput
        style={styles.searchInput}
        placeholder='Search for doctors...'
       
      />
      </View>
      
      <Text style={styles.label}>Let's find your doctor</Text>

      <View style={styles.box}>
      <View style={styles.doctorContainer}>  
      <Icon name='user-md' size={40} color='blue' style={styles.icons} />
      <Text style={styles.doctorName}>Dr. John Smith</Text>
      <TextInput
         placeholder='Dermetologist' 
         />
         <Icon name='star' color='gold'>4.5</Icon>
      </View>
     
      <View style={styles.doctorContainer}>
      <Icon name='user-nurse' size={40} color='blue' style={styles.icons} />
        <Text style={styles.doctorName}>Dr. Anna Dinn</Text>
        <TextInput
         placeholder='psychologist' 
         />
         <Icon name='star' color='gold'>5</Icon>
      </View>

      <View style={styles.doctorContainer}>
      <Icon name='user-nurse' size={40} color='blue' style={styles.icons} />
        <Text style={styles.doctorName}>Dr. Angel Ray  </Text>
       <TextInput
         placeholder='Therapist' 
         />
         <Icon name='star' color='gold'>4.5</Icon>
      </View>

      <View style={styles.doctorContainer}>
      <Icon name='user-md' size={40} color='blue' style={styles.icons} />
        <Text style={styles.doctorName}>Dr.chris Bronte</Text>
        <TextInput
         placeholder='Dentist' 
         /> 
         <Icon name='star' color='gold'>4</Icon>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: 'pink',
    padding: 20,
    borderRadius: 20,
    width: '100%',
    
    
  },
  icon: {
    position: 'absolute',
    left: 7,
   marginTop: 85,
  
  },
  
  searchInput: {
    marginTop: 70,
    width: '100%',
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    color: 'black', // Adjusted text color for better visibility
    textAlign: 'left',
    paddingLeft: 30,
  
  },
  label: {
    color: 'black', // Adjusted label color
    marginVertical: 10,
    fontSize: 18,
  },
  box:
  {
flexDirection:'row',
flexWrap: 'wrap',
justifyContent: 'space-around'
  },
  doctorContainer: {
    
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '50%', // Full width
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',

  },
  doctorName: {
    color: 'black',
    fontSize: 16,
    padding: 15,
     
  },
  
});