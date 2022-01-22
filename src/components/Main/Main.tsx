import React, {useState} from 'react';
import {IMousePos, IPerson} from "../../types/Main.types";
import * as S from "./Main.styles"
import waldoPic from "../../assets/waldo1.jpeg"
import TargetBox from "../TargetBox/TargetBox";

const Main = () => {
    const [mousePos, setMousePos] = useState<IMousePos>({xPos: 0, yPos: 0})
    const [showTarget, setShowTarget] = useState<boolean>(false)

    const waldo: IPerson = {
        name: "Waldo",
        found: false,
        coords: {
            xPos: 100,
            yPos: 250
        }
    }
    const wendy: IPerson = {
        name: "Wendy",
        found: false,
        coords: {
            xPos: 500,
            yPos: 700
        }
    }
    const people: Array<IPerson> = [waldo, wendy]
    const [characters, setCharacters] = useState<Array<IPerson>>(people)

    const checkCoords = async (coords: IMousePos) => {
        // Make firebase call here
        // Eval true/ false condition
        console.log(coords.xPos, coords.yPos)
    }

    const getCoords = (e: React.MouseEvent) => {
        let x = e.clientX
        let y = e.clientY
        setShowTarget(true)
        setMousePos({ xPos: x, yPos: y})
        // checkCoords({ xPos: x, yPos: y})
    }


    return (
        <S.Main>
                <img src={waldoPic} alt="Find waldo"
                     onClick={e => {
                         getCoords(e)
                     }}
                />

                { showTarget && <TargetBox coords={mousePos} people={characters} />}
        </S.Main>
    );
};

export default Main;