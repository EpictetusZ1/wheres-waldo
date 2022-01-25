import React, {useContext, useEffect, useRef, useState} from 'react';
import {IMousePos, IPerson} from "../../types/Main.types";
import * as S from "./Main.styles"
import waldoPic from "../../assets/waldo1.jpeg"
import TargetBox from "../TargetBox/TargetBox";
import {PhotoContext} from "../../App";
import Header from "../Header/Header";

const Main = () => {
    const {photos} = useContext(PhotoContext)

    const [gameOver, setGameOver] = useState(false)

    const [boundPos, setBoundPos] = useState<IMousePos>({xPos: 0, yPos: 0}) // Eval if click 'found' waldo
    const [showTarget, setShowTarget] = useState<boolean>(false)
    const mouseRef = useRef<HTMLImageElement>(null)

    const [showTryAgain, setShowTryAgain] = useState(false)

    const getCoords = (e: React.MouseEvent) => {
        if (mouseRef && mouseRef.current) {
            const boundRect = mouseRef.current.getBoundingClientRect()
            const target = e.nativeEvent

            const x =  target.clientX - boundRect.left
            const y = target.clientY - boundRect.top
            console.log("x: ", x, "y: ", y)

            setShowTarget(true)
            setBoundPos({ xPos: x, yPos: y})
        }
    }

    const ShowFound: React.FC = () => {
        let foundPeople = []
        for (let i = 0; i < photos.characters.length; i++) {
            if (photos.characters[i].found) {
                foundPeople.push(photos.characters[i])
            }
        }
        return (
            <div>
                {foundPeople.map((person: IPerson) => {
                    return (
                        <S.FoundBox coords={person.coords} key={person.name}>
                            <h3>{person.name}</h3>
                        </S.FoundBox>
                    )
                })}
            </div>
        )
    }

    useEffect(() => {
        const checkGameOver = () => {
            let isGameOver = photos.characters.every((char: IPerson) => char.found)
            setGameOver(isGameOver)
        }

        checkGameOver()
    }, [showTarget])

    return (
        <S.Main>
            <Header />

            { showTryAgain && <S.TryAgain> No luck, Keep searching!</S.TryAgain> }
            {gameOver && <h1>GAME OVER</h1>}

            <img src={waldoPic} alt="Find waldo"
                 ref={mouseRef}
                 onClick={e => {
                     getCoords(e)
                 }}
            />

            <div onClick={() => setShowTarget(false)}>
                { showTarget && <TargetBox boundedCords={boundPos} tryAgain={setShowTryAgain} />}
                <ShowFound />
            </div>
        </S.Main>
    );
};

export default Main;