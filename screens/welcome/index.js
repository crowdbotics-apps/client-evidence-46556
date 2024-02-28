import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from "react-native";

const LandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim()) {
      setIsLoggedIn(true);
    } else {
      Alert.alert("Authentication Failed", "Please enter a valid username.");
    }
  };

  return <SafeAreaView style={styles.container}>
      {!isLoggedIn ? <View style={styles.loginContainer}>
          <Text style={styles.title}>Login to Continue</Text>
          <TextInput style={styles.input} placeholder="Enter Username" value={username} onChangeText={setUsername} />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View> : <View style={styles.content}>
          <Text style={styles.title}>Welcome to Client Evidence App</Text>
          <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.image} />
          <Text style={styles.description}>
            Easily upload and manage evidence documents securely.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.guideButton]}>
            <Text style={styles.buttonText}>How-to Guide</Text>
          </TouchableOpacity>
        </View>}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  loginContainer: {
    alignItems: "center",
    padding: 20
  },
  content: {
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  guideButton: {
    backgroundColor: "#28a745"
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
    marginBottom: 20,
    borderColor: "#007BFF",
    borderRadius: 5
  }
});
export default LandingPage;