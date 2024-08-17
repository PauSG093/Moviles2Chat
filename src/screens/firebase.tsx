import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyD-OIh39kZfDRbZ78wra0gFOcE9ArCAxpw",
  authDomain: "chatonline-4d07a.firebaseapp.com",
  projectId: "chatonline-4d07a",
  storageBucket: "chatonline-4d07a.appspot.com",
  messagingSenderId: "604811083260",
  appId: "1:604811083260:web:f7e1b06601f6d23b7ac679",
  measurementId: "G-8BE8BKJ1YR"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
 
export default {
  app,
  db
};