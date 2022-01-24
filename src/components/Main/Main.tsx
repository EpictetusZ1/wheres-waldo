import React, { useState} from 'react';
import {IMousePos, } from "../../types/Main.types";

import * as S from "./Main.styles"
import waldoPic from "../../assets/waldo1.jpeg"
import TargetBox from "../TargetBox/TargetBox";

const Main = () => {

    const [mousePos, setMousePos] = useState<IMousePos>({xPos: 0, yPos: 0})
    const [showTarget, setShowTarget] = useState<boolean>(false)

    const getCoords = (e: React.MouseEvent) => {
        let target = e.nativeEvent
        let x =  target.offsetX
        let y = target.offsetY

        setShowTarget(true)
        setMousePos({ xPos: x, yPos: y})
    }

    return (
        <S.Main>
            <img src={waldoPic} alt="Find waldo"
                 onClick={e => {
                     getCoords(e)
                 }}
            />

            { showTarget && <TargetBox coords={mousePos} />}
        </S.Main>
    );
};

export default Main;