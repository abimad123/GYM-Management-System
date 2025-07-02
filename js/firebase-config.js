// js/firebase-config.js

const firebaseConfig = {
  apiKey: "AIzaSyCEiWqxChMeB2zdsGE2Zw7g0G2eraMg30Y",
  authDomain: "gym-management-system-13087.firebaseapp.com",
  projectId: "gym-management-system-13087",
  storageBucket: "gym-management-system-13087.firebasestorage.app",
  messagingSenderId: "134681146772",
  appId: "1:134681146772:web:51ad6d0fd789fcea118b81",
  measurementId: "G-PZLQXX5CXT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Define as global variables ✅
window.auth = firebase.auth();
window.db = firebase.firestore();
window.storage = firebase.storage();
