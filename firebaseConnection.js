// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "CHAVE_DA_API",
  authDomain: "duoinfo-1704d.firebaseapp.com",
  projectId: "duoinfo-1704d",
  storageBucket: "duoinfo-1704d.appspot.com",
  messagingSenderId: "642571467399",
  appId: "1:642571467399:web:f0d6c95fb7fee69eac5622"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const bancoExterno=getFirestore(app);
export {bancoExterno};
