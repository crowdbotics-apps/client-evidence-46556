import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Alert } from "react-native";

const LandingPage = () => {
  const [query, setQuery] = useState("");

  const handleQuery = (presetQuery = "") => {
    if (presetQuery) {
      setQuery(presetQuery);
    } else if (!query.trim()) {
      Alert.alert("Query Required", "Please enter a query to proceed.");
    } else {
      Alert.alert("Query Submitted", `You searched for: ${query}`);
    }
  };

  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to Client Evidence App</Text>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.image} />
          <Text style={styles.description}>
            Easily upload and manage evidence documents securely.
          </Text>
          <TextInput style={styles.input} placeholder="Start your chat experience..." placeholderTextColor="#FFFFFF" value={query} onChangeText={setQuery} />
          <TouchableOpacity style={styles.button} onPress={() => handleQuery()}>
            <Text style={styles.buttonText}>Submit Query</Text>
          </TouchableOpacity>
          <Text style={styles.guideTitle}>How-to Guide</Text>
          <Text style={styles.guideText}>
            Start by entering your query in the text box above or select one of the example queries below.
          </Text>
          <TouchableOpacity style={styles.queryButton} onPress={() => handleQuery("What are success stories in the banking industry with cloud migration?")}>
            <Text style={styles.queryButtonText}>
              What are success stories in the banking industry with cloud migration?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.queryButton} onPress={() => handleQuery("Give me evidence of work we've done in the automotive industry for professional services")}>
            <Text style={styles.queryButtonText}>
              Give me evidence of work we've done in the automotive industry for professional services
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA500"
  },
  scrollView: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20
  },
  content: {
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FFFFFF"
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#FFFFFF"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    marginBottom: 20,
    borderColor: "#FFFFFF",
    color: "#FFFFFF",
    borderRadius: 5
  },
  button: {
    backgroundColor: "#E65100",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18
  },
  guideTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10
  },
  guideText: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20
  },
  queryButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  queryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center"
  }
});
export default LandingPage;