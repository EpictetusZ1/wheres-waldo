import React, {useEffect, useReducer, useState} from 'react';
import {initializeApp} from 'firebase/app';
import {doc, getDoc, getFirestore} from "firebase/firestore"
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";

export const PhotoContext = React.createContext<any>(undefined)

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "setPhotos":
      return action.data

    case "updateFound":
      return action.data
  }
}

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
  const [doneLoading, setDoneLoading] = useState(false)

  const _getPhotoCollection = async () => {
    const photoSelection = "gameImage1"
    const photoRef = doc(firestore, "photos",`${photoSelection}`)

    const collectionSnapshot = await getDoc(photoRef)
    const result = collectionSnapshot.data() // Take a snapshot on component mount, then query that data later
    const setPhotos = {
      type: "setPhotos",
      data: result
    }
    dispatch(setPhotos)
  }

  const [photos, dispatch] = useReducer(reducer, undefined)

  useEffect(() => {
    _getPhotoCollection().then( () => {
      setDoneLoading(true)
    })
  },[])

  return (
      <div className="App">
        <PhotoContext.Provider value={{ photos, dispatch}}>
          <Header />
          {doneLoading && <Main />}
        </PhotoContext.Provider>
      </div>
  );
}

export default App;
