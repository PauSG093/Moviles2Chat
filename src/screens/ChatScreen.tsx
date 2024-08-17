import { initializeApp } from 'firebase/app';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { getDatabase, ref, onValue, set } from 'firebase/Database';

interface Message {
  id: string;
  text: string;
  isSent: boolean;
}
const firebaseConfig = {
  apiKey: "AIzaSyDI0Q8-eJuJfC63L4teZvmD30Ptzi38dEU",
  authDomain: "chat-7a851.firebaseapp.com",
  projectId: "chat-7a851",
  storageBucket: "chat-7a851.appspot.com",
  messagingSenderId: "1065227566243",
  appId: "1:1065227566243:web:6a21381bca5bfdc38f9316"
};
initializeApp(firebaseConfig);
  return ( 
    <Text>Base de datos</Text>
    <Button
      title='envio de datos'
      onPress={() => envioDatos ()}
    />
  )

const ChatScreen = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleSend = () => {
    if (currentMessage.trim().length === 0) {
      return;
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      text: currentMessage,
      isSent: true, 
    };

    setMessages([...messages, newMessage]);
    setCurrentMessage('');
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.messageContainer,
        item.isSent ? styles.sentMessage : styles.receivedMessage,
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
    borderTopWidth: 1,
    borderColor: '#ccc',
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
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ChatScreen;
