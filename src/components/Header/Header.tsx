import React, {useContext, useEffect, useState} from 'react';
import * as S from "./Header.styles"
import {HighScoreContext} from "../../App";


const Stopwatch: React.FC = () => {
    const [time, setTime] = useState(0)

    const {dispatchHighScore} = useContext(HighScoreContext)

    useEffect(() => {
        const start: number = window.performance.now()
        const increment: NodeJS.Timer = setInterval(() => {

            setTime((prevTime) => prevTime + 1000)
        }, 1000)

        return () => {
            clearInterval(increment as NodeJS.Timeout)
            const end: number = window.performance.now()
            dispatchHighScore({type: "setTime", data: (end - start)})
        }
    }, [])

    const showTime = () => {
        const minutes = Math.floor(time / 60000);
        const seconds = ((time % 60000) / 1000).toFixed(0);
        // @ts-ignore
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds
    }

    return (
        <div className={"timerContainer"}>
            <p>Current Time: {showTime()}</p>
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