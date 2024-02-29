import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, SafeAreaView, StyleSheet } from 'react-native';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: Date.now(),
        text: inputText,
        sender: 'user'
      };
      setMessages([...messages, newMessage]);
      setInputText(''); // Simulate a response from the chatbot

      setTimeout(() => {
        const botResponse = {
          id: Date.now(),
          text: `Here are some examples in the banking industry: \n1. Bank A's mobile app development \n2. Bank B's cybersecurity enhancements`,
          sender: 'bot'
        };
        setMessages(currentMessages => [...currentMessages, botResponse]);
      }, 1500);
    }
  };

  const renderMessageItem = ({
    item
  }) => <View style={[styles.messageItem, item.sender === 'bot' ? styles.botMessage : styles.userMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={messages} renderItem={renderMessageItem} keyExtractor={item => item.id.toString()} contentContainerStyle={styles.messagesContainer} />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={inputText} onChangeText={setInputText} placeholder="Ask something..." placeholderTextColor="#999" />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0'
  },
  messagesContainer: {
    padding: 10
  },
  messageItem: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 20
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFD8A8'
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#FFAB40'
  },
  messageText: {
    fontSize: 16
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFF'
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#FFAB40',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    backgroundColor: '#FFFFFF'
  },
  sendButton: {
    backgroundColor: '#FFAB40',
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center'
  },
  sendButtonText: {
    color: '#FFF',
    fontSize: 16
  }
});
export default ChatInterface;