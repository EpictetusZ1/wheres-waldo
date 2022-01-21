import React, {BaseSyntheticEvent, SyntheticEvent, useEffect, useState} from 'react';
import {IMousePos} from "../../types/Main.types";
import * as styled from "./Main.styles"
import waldo from "../../assets/waldo1.jpg"

const Main = () => {
    const [mousePos, setMousePos] = useState<IMousePos>({xPos: 0, yPos: 0})

    const getCoords = (e: React.MouseEvent) => {
        let x = e.nativeEvent.offsetX
        let y = e.nativeEvent.offsetY
        setMousePos({ xPos: x, yPos: y})
    }

    return (
        <styled.MainStyles>
            <div className={"image"}>
                <img src={waldo} alt="Find waldo"
                     onClick={e => getCoords(e)}
                />
            </div>

        </styled.MainStyles>
    );
};

export default Main;