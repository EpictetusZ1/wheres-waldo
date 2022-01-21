import React from 'react';
import {initializeApp} from 'firebase/app';
import {doc, getDoc, getFirestore} from "firebase/firestore"
import Main from "./components/Main/Main";


const App: React.FC = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCQj9XDycqPrcCtSaJdB2YudGg1Pffu4PY",
    authDomain: "whereswaldo-d9d9f.firebaseapp.com",
    projectId: "whereswaldo-d9d9f",
    storageBucket: "whereswaldo-d9d9f.appspot.com",
    messagingSenderId: "1085607907948",
    appId: "1:1085607907948:web:15f211014d310052dbbe49"
  }

  const app = initializeApp(firebaseConfig)
  const firestore = getFirestore(app)

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
