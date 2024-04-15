import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

const ServicesScreen = () => {

  const handle1 = () => {
    // Implement browsing logic here
    Alert.alert('Wala Pay Masulat 1', 'Lorem Ipsum');
  };

  const handle2 = () => {
    // Implement searching logic here
    Alert.alert('Wala Pay Masulat 2', 'Lorem Ipsum');
  };

  const handle3 = () => {
    // Implement view favorites logic here
    Alert.alert('Wala Pay Masulat 3', 'Lorem Ipsum');
  };

  const handle4 = () => {
    // Implement recommendations logic here
    Alert.alert('Wala Pay Masulat 4', 'Lorem Ipsum');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>LaZhopee Services</Text>

      <TouchableOpacity style={styles.button} onPress={handle1}>
        <Text style={styles.buttonText}>Wala Pay Masulat 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handle3}>
        <Text style={styles.buttonText}>Wala Pay Masulat 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handle3}>
        <Text style={styles.buttonText}>Wala Pay Masulat 3</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handle4}>
        <Text style={styles.buttonText}>Wala Pay Masulat 4</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ServicesScreen
