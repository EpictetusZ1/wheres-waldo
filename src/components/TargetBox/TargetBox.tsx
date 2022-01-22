import React, {useContext} from 'react';
import * as S from "./TargetBox.styles"
import { ITargetBoxProps } from "../../types/Main.types";
import { PhotoContext } from "../../App";

const TargetBox: React.FC<ITargetBoxProps> = ( { coords, people }) => {

    const { photos } = useContext(PhotoContext)

    const dropMenu = () => {
        const checkSnapshotData = (name: string) => {
            const checkBox = (trueCoords: any) => {
                console.log("True value of waldos position: ", trueCoords)
                const xRange = [coords.xPos - 50, coords.xPos + 50]
                const yRange = [coords.yPos - 50, coords.yPos + 50]

                const checkTrue = () => {
                    if (trueCoords.xPos >= xRange[0] && trueCoords.xPos <= xRange[1]) {
                        if (trueCoords.yPos >= yRange[0] && trueCoords.yPos <= yRange[1]) {
                            console.log("You found waldo!!!")
                        }
                    }
                    else {
                        console.log("you did not find waldo")
                    }
                }
                checkTrue()
            }

            const characters = photos.characters
            for (let i = 0; i < characters.length; i++) {
                //TODO: No need for this logic here, It should be implemented above
                if (characters[i].name === name) {
                    checkBox(characters[i].coords)
                }
            }
        }

        return (
            <S.Dropdown>
                <ul>
                    {people.map((person) => <li key={person.name} onClick={() => checkSnapshotData(person.name)}> {person.name} </li>)}
                </ul>
            </S.Dropdown>
        )
    }

    return (
        <S.TargetBox coords={coords} >
            <div className={"reticle"}/>

            {dropMenu()}
        </S.TargetBox>
    );
};

export default TargetBox;