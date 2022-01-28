// React & Components
import React, {useContext, useEffect, useRef, useState} from 'react';
import TargetBox from "../TargetBox/TargetBox";
import Header from "../Header/Header";
import FoundPersons from "../FoundPersons/FoundPersons";
import GameOver from "../GameOver/GameOver";

// Context
import {PhotoContext} from "../../App";

// Types
import {IMousePos, IPerson} from "../../types/Main.types";

// Styles & Assets
import * as S from "./Main.styles"
import waldoPic from "../../assets/emersonAndFriends.png"
import Tooltip from "../ToolTip/ToolTip";


const Main = () => {
    const {photos} = useContext(PhotoContext)

    const [gameOver, setGameOver] = useState(false)
    const [showTarget, setShowTarget] = useState<boolean>(false)

    // Show mouse targetBox
    const [mouseCoords, setMouseCoords] = useState<IMousePos>({xPos: 0, yPos: 0})
    // Eval if click 'found' waldo
    const [relativeCoords, setRelativeCoords] = useState<IMousePos>({xPos: 0, yPos: 0})

    const imgRef = useRef<HTMLImageElement>(null)

    const [showTryAgain, setShowTryAgain] = useState(false)

    const getCoords = (e: React.MouseEvent) => {
        if (imgRef && imgRef.current) {
            const boundRect = imgRef.current.getBoundingClientRect()
            const x =  e.clientX - boundRect.left
            const y = e.clientY - boundRect.top
            const width = imgRef.current.offsetWidth
            const height = imgRef.current.offsetHeight
            const relX = ((x / width) * 1000).toFixed(2)
            const relY = (((y - 70) / height) * 1000).toFixed(2)


            setShowTarget(true)
            setMouseCoords({ xPos: x , yPos: y + 70 })
            setRelativeCoords({xPos: parseFloat(relX), yPos: parseFloat(relY)})
        }
    }

    useEffect(() => {
        const checkGameOver = (): void => {
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
                     className={"mainImage"}
                     onClick={e => {
                         getCoords(e)
                     }}
                />

            <div onClick={() => setShowTarget(false)}>
                { showTarget && <TargetBox mouseCoords={mouseCoords} relativeCoords={relativeCoords} tryAgain={setShowTryAgain} />}
            </div>
            <FoundPersons />
            <Tooltip />
        </S.Main>
    );
};

export default Main;