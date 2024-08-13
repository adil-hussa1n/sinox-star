// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; // Import getStorage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCPN-K0ngtRRm5yfIVd0ktm9-ee0sE_8c",
  authDomain: "sinox-d3af8.firebaseapp.com",
  projectId: "sinox-d3af8",
  storageBucket: "sinox-d3af8.appspot.com",
  messagingSenderId: "745973716196",
  appId: "1:745973716196:web:e827626c1e94ec2328c8f1",
  measurementId: "G-TSLVXR8VB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app); // Initialize Storage

export { storage };
