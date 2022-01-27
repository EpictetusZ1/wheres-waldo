import React, {useContext} from "react";
import {HighScoreContext} from "../../App";
import * as S from"./HighScores.styles"
import {IScore} from "../../types/Main.types";

const HighScores = () => {
    const {highScore} = useContext(HighScoreContext)

    const sorter = (a: IScore, b: IScore) => {
        return  a.time - b.time
    }

    const sorted = highScore.scores.sort(sorter)

    return (
        <S.HighScores>
            <div className={"headers"}>
                <p className="left">Name </p>
                <p className="right">Time </p>
                <br/>
                <hr/>
            </div>
            <ul>
                {sorted.map((score: IScore) => {
                    return (
                        <li key={score.name + score.time}>
                            <p className="left">{score.name}</p>
                            <p className="right">{score.time}</p>
                            <br/>
                        </li>
                    )
                })}
            </ul>
        </S.HighScores>
    )
}

export default HighScores