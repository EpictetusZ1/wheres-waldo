import React, {useContext, useEffect, useRef, useState} from 'react';
import {IMousePos, IPerson} from "../../types/Main.types";
import * as S from "./Main.styles"
import waldoPic from "../../assets/waldo1.jpeg"
import TargetBox from "../TargetBox/TargetBox";
import {PhotoContext} from "../../App";
import Header from "../Header/Header";
import FoundPersons from "../FoundPersons/FoundPersons";
import GameOver from "../GameOver/GameOver";

const Main = () => {
    const {photos} = useContext(PhotoContext)

    const [gameOver, setGameOver] = useState(false)

    const [mouseCoords, setMouseCoords] = useState<IMousePos>({xPos: 0, yPos: 0}) // Show mouse targetBox
    const [relativeCoords, setRelativeCoords] = useState<IMousePos>({xPos: 0, yPos: 0}) // Eval if click 'found' waldo
    const [showTarget, setShowTarget] = useState<boolean>(false)
    const imgRef = useRef<HTMLImageElement>(null)

    const [showTryAgain, setShowTryAgain] = useState(false)

    const getCoords = (e: React.MouseEvent) => {
        if (imgRef && imgRef.current) {
            const boundRect = imgRef.current.getBoundingClientRect()
            const target = e.nativeEvent
            const x =  target.clientX - boundRect.left
            const y = target.clientY - boundRect.top

            const relX = Math.round((x / window.innerWidth) * 100)
            const relY = Math.round((y / window.innerHeight) * 100)

            setShowTarget(true)
            setMouseCoords({ xPos: x , yPos: y })
            setRelativeCoords({xPos: relX, yPos: relY})
        }
    }

    useEffect(() => {
        const checkGameOver = () => {
            const isGameOver = photos.characters.every((char: IPerson) => char.found)
            setGameOver(isGameOver)
        }

        checkGameOver()
    }, [showTarget])

    return (
        <S.Main>
            {!gameOver && <Header />}

            { showTryAgain && <S.TryAgain> No luck, Keep searching!</S.TryAgain> }
            {gameOver && <GameOver />}

                <img src={waldoPic} alt="Find waldo"
                     ref={imgRef}
                     onClick={e => {
                         getCoords(e)
                     }}
                />

            <div onClick={() => setShowTarget(false)}>
                { showTarget && <TargetBox mouseCoords={mouseCoords} relativeCoords={relativeCoords} tryAgain={setShowTryAgain} />}
            </div>
            <FoundPersons />
        </S.Main>
    );
};

export default Main;