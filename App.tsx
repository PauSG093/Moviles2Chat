import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator'; // Ajusta la ruta según tu estructura de archivos
import { initializeApp } from 'firebase/app';
//import { getDatabase, ref, onValue, set } from 'firebase/Database';


export default function App() {
  /*{const firebaseConfig = {
    apiKey: "AIzaSyDI0Q8-eJuJfC63L4teZvmD30Ptzi38dEU",
    authDomain: "chat-7a851.firebaseapp.com",
    projectId: "chat-7a851",
    storageBucket: "chat-7a851.appspot.com",
    messagingSenderId: "1065227566243",
    appId: "1:1065227566243:web:6a21381bca5bfdc38f9316"
  };
  initializeApp(firebaseConfig);
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);}*/
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
