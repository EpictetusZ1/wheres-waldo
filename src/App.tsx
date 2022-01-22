import React, {useEffect, useMemo, useReducer } from 'react';
import {initializeApp} from 'firebase/app';
import {doc, getDoc, getFirestore} from "firebase/firestore"
import Main from "./components/Main/Main";

export const PhotoContext = React.createContext<any>(undefined)

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

  // const [doneLoading, setDoneLoading] = useState(false)
  const _getPhotoCollection = async () => {
    const photoSelection = "gameImage1"
    const photoRef = doc(firestore, "photos",`${photoSelection}`)

    const collectionSnapshot = await getDoc(photoRef)
    const result = collectionSnapshot.data() // Take a snapshot on component mount, then query that data later
    console.log(result)
  }


  const reducer = (state: any, action: any) => {
    switch (action.type) {
      default:
        return action.data
    }
  }

  const [photos, dispatch] = useReducer(reducer, undefined)

  useEffect(() => {
    _getPhotoCollection().then(r => {
      const setPhotos = {
        type: "setPhotos",
        data: r
      }
      dispatch(setPhotos)
    })
  },[])

  const contextValue = useMemo(() => {
    return { photos, reducer }
  }, [photos, reducer])

  return (
      <div className="App">
        <PhotoContext.Provider value={contextValue}>
          <Main />
        </PhotoContext.Provider>
      </div>
  );
}

export default App;
