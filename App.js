


import React from 'react';
import { View, Button, Alert,Text, StyleSheet } from 'react-native';

const App = () => {
  const showAlert = () => {
    Alert.alert('Button Pressed!', 'You pressed the button.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, React Native!</Text>
      <Button title="Press Me" onPress={showAlert} />
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default App;

