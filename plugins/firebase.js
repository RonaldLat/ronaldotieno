import { initializeApp, } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCYFptob_Bc8P9Kw7VqIA4rZq1k-sRFhT4",
  authDomain: "ronaldoti.firebaseapp.com",
  databaseURL: "https://ronaldoti-default-rtdb.firebaseio.com",
  projectId: "ronaldoti",
  storageBucket: "ronaldoti.appspot.com",
  messagingSenderId: "510097924583",
  appId: "1:510097924583:web:2426d89be3b17d12d21d42",
  measurementId: "G-5GV9ZNWBPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}
