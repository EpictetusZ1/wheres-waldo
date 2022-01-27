import React, {FormEvent, useContext, useEffect, useState} from 'react';
import * as S from "./GameOver.styles"
import {HighScoreContext} from "../../App";
import HighScores from "../HighScores/HighScores";
import {doc, setDoc} from "firebase/firestore";

const GameOver = () => {
    const {highScore, dispatchHighScore} = useContext(HighScoreContext)

    const [name, setName] = useState<string>(highScore.myHighScore.name)
    const [scoreSubmitted, setScoreSubmitted] = useState(false)
    const [showHighScore, setShowHighScore] = useState(false)

    useEffect(() => {
        const setName = {
            type: "changeName",
            data: name
        }
        dispatchHighScore(setName)
    }, [name])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setScoreSubmitted(true)
        const addScore = highScore.scores
        addScore.push(highScore.myHighScore)
        const scoresRef = doc(highScore.dbRef, "highScores","allScores")

        setDoc(scoresRef, {scores: addScore}, { merge: true });
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
                        placeholder={""}
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