import React, {useContext, useState} from 'react';
import * as S from "./GameOver.styles"
import {HighScoreContext} from "../../App";
import HighScores from "../HighScores/HighScores";

const GameOver = () => {
    const {highScore, dispatchHighScore} = useContext(HighScoreContext)

    const [name, setName] = useState<string>(highScore.myHighScore.name)
    const [showHighScore, setShowHighScore] = useState(false)

    const handleSubmit = (e: React.SyntheticEvent<SubmitEvent>) => {

    }

    return (
        <S.GameOverStyles>
            <p className={"gameOHeader"}> Congratulations, You Won! </p>
            <h5>Your Time:</h5>
            <p className={"finalTime"}>{highScore.myHighScore.time} <sup>sec</sup></p>

            <form onSubmit={(e) => handleSubmit}>
                <S.FormEl>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                    <br/>
                    <button type={"submit"}>Submit High Score</button>
                </S.FormEl>
            </form>

            <button onClick={() => setShowHighScore(true)}>View High Scores</button>
            {showHighScore && <HighScores />}
        </S.GameOverStyles>
    );
};

export default GameOver;