import React, {useEffect, useReducer, useState} from 'react';
import {initializeApp} from 'firebase/app';
import {doc, getDoc, getFirestore } from "firebase/firestore"
import Main from "./components/Main/Main";
import {IHighScoreArr, IScore} from "./types/Main.types";

export const PhotoContext = React.createContext<any>(undefined)
export const HighScoreContext = React.createContext<any>(undefined)

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "setPhotos":
      return action.data

    case "updateFound":
      return action.data
  }
}

const HSReducer = (state: IHighScoreArr, action: any) => {
  switch (action.type) {
    case "setHS":
      return action.data
    case "setTime":
      const finalTime = parseFloat((action.data / 1000).toFixed(3))
      return {
        ...state,
        myHighScore: {
          ...state.myHighScore,
          time: finalTime
        }
      }
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
    _getHighScores()
    dispatch(setPhotos)
  }

  const _getHighScores = async () => {
    const scores = doc(firestore, "highScores","allScores")
    const collectionSnapshot = await getDoc(scores)
    const result = collectionSnapshot.data()

    const sorter = (a: IScore, b: IScore) => {
      return  a.time - b.time
    }

    let sorted
    if (result) sorted = result.scoresArr.sort(sorter)

    const head100 = sorted.slice(0, 100)

    const initHigh: IHighScoreArr = {
      scores: head100,
      myHighScore: {
        time: 0,
        name: "Name"
      }
    }

    const dispatch = {
      type: "setHS",
      data: initHigh
    }

    dispatchHighScore(dispatch)
  }

  const [photos, dispatch] = useReducer(reducer, undefined)
  const [highScore, dispatchHighScore] = useReducer(HSReducer, undefined)


  useEffect(() => {
    _getPhotoCollection().then( () => setDoneLoading(true))
  },[])

  return (
      <div className="App">
        <PhotoContext.Provider value={{ photos, dispatch}}>
          <HighScoreContext.Provider value={{highScore, dispatchHighScore}}>
            {doneLoading && <Main />}
          </HighScoreContext.Provider>
        </PhotoContext.Provider>
      </div>
  );
}

export default App;
