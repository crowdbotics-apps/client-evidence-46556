import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';

const WorkTypeSelectionScreen = () => {
  const workTypes = ['Plumbing', 'Framing', 'Drywall', 'Electric', 'HVAC'];
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.header}>Select the Type of Work</Text>
        {workTypes.map((workType, index) => <TouchableOpacity key={index} style={styles.button}>
            <Text style={styles.buttonText}>{workType}</Text>
          </TouchableOpacity>)}
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FC'
  },
  scrollView: {
    alignItems: 'center',
    padding: 20
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18
  }
});
export default WorkTypeSelectionScreen;