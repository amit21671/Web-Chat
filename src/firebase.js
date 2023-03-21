import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD55bq415Y4S4tXOA4W91uIOo_5dClyySs",
  authDomain: "chat-app-ce81b.firebaseapp.com",
  projectId: "chat-app-ce81b",
  storageBucket: "chat-app-ce81b.appspot.com",
  messagingSenderId: "851009993539",
  appId: "1:851009993539:web:26d68a1386df6aa0a18df6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
