// React & Components
import React, {FormEvent, useContext, useEffect, useState} from 'react';
import HighScores from "../HighScores/HighScores";

// Firebase
import {doc, setDoc} from "firebase/firestore";

// Context and Styles
import {HighScoreContext} from "../../App";
import * as S from "./GameOver.styles"
import {IScore} from "../../types/Main.types";


const GameOver: React.FC = () => {
    const {highScore, dispatchHighScore} = useContext(HighScoreContext)

    const [name, setName] = useState<string>(highScore.myHighScore.name)
    const [scoreSubmitted, setScoreSubmitted] = useState<boolean>(false)
    const [showHighScore, setShowHighScore] = useState<boolean>(false)

    useEffect(() => {
        const setName = {
            type: "changeName",
            data: name
        }
        dispatchHighScore(setName)
    }, [name])

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        setScoreSubmitted(true)

        const addScore: Array<IScore> = highScore.scores
        addScore.push(highScore.myHighScore)
        const scoresRef = doc(highScore.dbRef, "highScores","allScores")

        setDoc(scoresRef, {scores: addScore} )
    }

    return (
        <S.GameOverStyles>
            <p className={"gameOHeader"}> Congratulations, You Won! </p>
            <h5>Your Time:</h5>
            <p className={"finalTime"}>{highScore.myHighScore.time} <sup>sec</sup></p>

            { !scoreSubmitted && <form onSubmit={(e) => handleSubmit(e)}>
                <S.FormEl>
                    <input
                        type="text"
                        value={name}
                        placeholder={"Add your name"}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br/>
                    <button type={"submit"}>Submit High Score</button>
                </S.FormEl>
            </form>}

            <button onClick={() => setShowHighScore(prevState => !prevState)}>View High Scores</button>
            {showHighScore && <HighScores />}
        </S.GameOverStyles>
    );
};

export default GameOver;