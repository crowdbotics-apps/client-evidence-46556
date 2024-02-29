javascript;
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, TextInput, FlatList, Text, Image, TouchableOpacity } from "react-native";
const DATA = [{
  id: "1",
  title: "Mobile Banking App Redesign",
  description: "A complete overhaul of the user interface and user experience for a leading bank’s mobile app, resulting in a 40% increase in user engagement."
}, {
  id: "2",
  title: "Online Payment Gateway Integration",
  description: "Implemented a secure and efficient online payment system for a regional bank, significantly reducing transaction times and improving customer satisfaction."
}, {
  id: "3",
  title: "Financial Data Analytics Platform",
  description: "Developed a comprehensive analytics platform that allows a financial institution to gain insights into customer behavior, aiding in strategic decision-making."
}];

const ProjectScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const renderItem = ({
    item
  }) => <TouchableOpacity style={styles.itemContainer}>
      <Image source={{
      uri: "https://tinyurl.com/42evm3m3"
    }} style={styles.itemImage} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>;

  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="Search projects in the banking industry..." placeholderTextColor="#FFA726" value={searchQuery} onChangeText={setSearchQuery} />
      <FlatList data={DATA.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))} renderItem={renderItem} keyExtractor={item => item.id} contentContainerStyle={styles.listContentContainer} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  searchInput: {
    height: 50,
    margin: 10,
    borderWidth: 1,
    borderColor: "#FFA726",
    borderRadius: 25,
    padding: 10,
    color: "#333",
    backgroundColor: "#FFF"
  },
  listContentContainer: {
    paddingHorizontal: 10
  },
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#FFA726",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  itemTextContainer: {
    flex: 1,
    paddingLeft: 10
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFA726"
  },
  itemDescription: {
    fontSize: 14,
    color: "#333",
    marginTop: 5
  }
});
export default ProjectScreen;