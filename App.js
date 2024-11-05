import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Calculator from './component/Calculator';  // Correct import

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
  
      <Calculator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
 
});

export default App;
