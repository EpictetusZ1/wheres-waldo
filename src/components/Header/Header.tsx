import React, {useEffect, useState} from 'react';
import * as S from "./Header.styles"

const Stopwatch: React.FC = () => {
    const [time, setTime] = useState(0)

    useEffect(() => {
        let increment: number | NodeJS.Timer
        increment = setInterval(() => {
            setTime((prevTime) => prevTime + 10)
        }, 1000)
        return () => {
            clearInterval(increment as NodeJS.Timeout)
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
            <h1>Where's Waldo?</h1>
            <Stopwatch />
        </S.Header>
    );
};

export default Header;