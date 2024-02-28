import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const LandingPage = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Client Evidence App</Text>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.description}>
          Easily upload and manage evidence documents securely.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18
  }
});
export default LandingPage;