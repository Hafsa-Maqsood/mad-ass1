import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Buttons from './Buttons'; // Import Buttons component

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Handle button click (update input)
  const handleButtonClick = (value) => {
    // If there's already a result, reset input with the new value
    if (result !== '') {
      setResult('');
      setInput(value); // Start fresh with the new value
    } else {
      setInput(input + value);  // Append clicked value to input
    }
  };

  // Function to calculate the result
  const handleCalculate = () => {
    try {
      // Use eval to evaluate the input string as a mathematical expression
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  // Handle clearing the input
  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      {/* Display input or result */}
      <View style={styles.displayContainer}>
        <Text style={styles.display}>
          {result ? result : input || '0'} {/* Show result if available, else show input */}
        </Text>
      </View>

      {/* Pass the necessary functions to Buttons component */}
      <Buttons 
        onPress={handleButtonClick} 
        onClear={handleClear} 
        onCalculate={handleCalculate} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  displayContainer: {
    width: '20%',  // Adjust width for the display container
    backgroundColor: 'lightgreen', // Light background color for the display
    borderRadius: 10,
    marginBottom: 20,  // Space between display and buttons
    alignItems: 'flex-end', // Align text to the right (mimicking a calculator)
  },
  display: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,  // Slight space before result
  },
});

export default Calculator;
