import { initializeApp } from 'firebase/app';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { getDatabase, ref, set } from 'firebase/database';
import { StatusBar } from 'expo-status-bar';

interface Message {
  id: string;
  text: string;
  timestamp: number;
}

const firebaseConfig = {
  apiKey: "AIzaSyBXgtCiu_sW94evdyNFEYTHfVdScctk3Ik",
  authDomain: "prmtest-708b1.firebaseapp.com",
  databaseURL: "https://prmtest-708b1-default-rtdb.firebaseio.com",
  projectId: "prmtest-708b1",
  storageBucket: "prmtest-708b1.appspot.com",
  messagingSenderId: "45823036154",
  appId: "1:45823036154:web:98540ccd88cb7b97d19743"
};

initializeApp(firebaseConfig);

const ChatScreen = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const envioDatos = (mensaje: string): void => {
    const db = getDatabase();
    const reference = ref(db, 'Mensajes/' + Date.now());
    set(reference, {
      text: mensaje,
      timestamp: Date.now(),
    });
  };

  const handleSend = () => {
    if (currentMessage.trim().length === 0) {
      return;
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      text: currentMessage,
      timestamp: Date.now(),
    };

    setMessages([...messages, newMessage]);
    envioDatos(currentMessage); 
    setCurrentMessage(''); 
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.messageContainer,
        item.timestamp % 2 === 0 ? styles.sentMessage : styles.receivedMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        style={styles.messagesList}
        inverted
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mensaje"
          placeholderTextColor="#aaa"
          value={currentMessage}
          onChangeText={setCurrentMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#f5f5f5',
  },
  messagesList: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#ff6347',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e5e5e5',
  },
  messageText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#ff6347',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ChatScreen;
