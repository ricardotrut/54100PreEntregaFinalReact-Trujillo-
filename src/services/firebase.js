import { initializeApp } from "firebase/app";

// Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDgixLUQLpy6oLkZtzrspRrTI7-AuxY0Mo",
  authDomain: "coderhouseecomercertt.firebaseapp.com",
  projectId: "coderhouseecomercertt",
  storageBucket: "coderhouseecomercertt.appspot.com",
  messagingSenderId: "165892237447",
  appId: "1:165892237447:web:1318ee678e898ffd2f3022"
};

// Initialize Firebase
let app  

const init = ()=>{
    app = initializeApp(firebaseConfig);
}

export {app, init}