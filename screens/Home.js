import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{ uri: 'https://img.freepik.com/premium-photo/abstract-shadowy-textures-subtle-highlights-luminescence-seep-through-dark-background_764067-9315.jpg'  }} resizeMode="cover" 
        style={styles.backgroundImage} // Added style to ImageBackground
      >
        <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} title='Go to About Page' > Home</TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('About')} title='Go to About Page' >Aboutus</TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Contact')} title='Go to Contact Page'>Contactus</TouchableOpacity> 
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome</Text>
          <Text>Heelo I am home page</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backgroundImage: {
    flex: 1, // Make the background image fill the container
   
  },
  navbar: {
    flexDirection: 'row',
  justifyContent:'space-around',
  paddingLeft:'5%',
    marginBottom: 20,
    backgroundColor: 'red', // Added transparency for better visibility
    paddingVertical: 10,
    borderRadius: 5,
     margin:'0%',
     
    
   
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },


 
});
