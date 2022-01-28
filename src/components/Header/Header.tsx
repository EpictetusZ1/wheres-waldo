import React, {useContext, useEffect, useState} from 'react';
import * as S from "./Header.styles"
import {HighScoreContext} from "../../App";


const Stopwatch: React.FC = () => {
    const [time, setTime] = useState(0)

    const {dispatchHighScore} = useContext(HighScoreContext)

    useEffect(() => {
        const start: number = window.performance.now()
        const increment: NodeJS.Timer = setInterval(() => {
            setTime((prevTime) => prevTime + 10)
        }, 1000)

        return () => {
            clearInterval(increment as NodeJS.Timeout)
            const end: number = window.performance.now()
            dispatchHighScore({type: "setTime", data: (end - start)})
        }
    }, [])

    return (
        <div className={"timerContainer"}>
            <p>Current Time: </p>{Math.floor((time / 1000) % 60)}:{("0" + ((time / 10) % 100)).slice(-2)}
        </div>
    )
}

const Header: React.FC = () => {
    return (
        <S.Header>
            <h1>Where's Waldo <sup>(Emerson)</sup> ?</h1>
            <Stopwatch />
        </S.Header>
    );
};

export default Header;