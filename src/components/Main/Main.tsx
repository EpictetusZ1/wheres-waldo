import React, {useContext, useState} from 'react';
import {IMousePos, IPerson,} from "../../types/Main.types";

import * as S from "./Main.styles"
import waldoPic from "../../assets/waldo1.jpeg"
import TargetBox from "../TargetBox/TargetBox";
import {PhotoContext} from "../../App";

const Main = () => {
    const {photos} = useContext(PhotoContext)

    const [mousePos, setMousePos] = useState<IMousePos>({xPos: 0, yPos: 0})
    const [showTarget, setShowTarget] = useState<boolean>(false)

    const getCoords = (e: React.MouseEvent) => {
        let target = e.nativeEvent
        let x =  target.offsetX
        let y = target.offsetY

        setShowTarget(true)
        setMousePos({ xPos: x, yPos: y})
    }


    const checkPeopleForFound = () => {
        let foundPeeps = []
        for (let i = 0; i < photos.characters.length; i++) {
            if (photos.characters[i].found) {
                foundPeeps.push(photos.characters[i])
            }
        }
        return (
            <div>
                {foundPeeps.map((person: IPerson) => {
                    return (
                        <S.FoundBox coords={person.coords} key={person.name}>
                            <h3>{person.name}</h3>
                        </S.FoundBox>
                    )
                })}
            </div>
        )
    }

    return (
        <S.Main>
            <img src={waldoPic} alt="Find waldo"
                 onClick={e => {
                     getCoords(e)
                 }}
            />
            <div onClick={() => setShowTarget(false)}>
                { showTarget && <TargetBox coords={mousePos} />}
                {checkPeopleForFound()}
            </div>

        </S.Main>
    );
};

export default Main;