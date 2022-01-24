import React, {useContext, useState} from 'react';
import * as S from "./TargetBox.styles"
import {IMousePos, IPerson, ITargetBoxProps} from "../../types/Main.types";
import { PhotoContext } from "../../App";

const TargetBox: React.FC<ITargetBoxProps> = ( { coords}) => {

    const  {photos, dispatch} = useContext(PhotoContext)

    const dropMenu = () => {
        const checkSnapshotData = (name: string) => {
            const characters = photos.characters
            const defineTargetChar = () => {
                for (let i = 0; i < characters.length; i++) {
                    if (characters[i].name === name) {
                        checkBox(characters[i].coords, i)
                    }
                }
            }

            const checkBox = (trueCoords: IMousePos , i: number) => {
                const xRange = [coords.xPos - 50, coords.xPos + 50]
                const yRange = [coords.yPos - 50, coords.yPos + 50]

                const checkTrue = () => {
                    if (trueCoords.xPos >= xRange[0] && trueCoords.xPos <= xRange[1]) {
                        if (trueCoords.yPos >= yRange[0] && trueCoords.yPos <= yRange[1]) {
                            const copyPeople = photos
                            copyPeople.characters[i].found = !copyPeople.characters[i].found

                            const updatePerson = {
                                type: "updateFound",
                                data: copyPeople
                            }
                            return dispatch(updatePerson)
                        }
                    }
                    else {
                        console.log("you did not find waldo")
                    }
                }
                checkTrue()
            }
            defineTargetChar()
        }

        return (
            <S.Dropdown>
                <ul>
                    {photos.characters.map((person: IPerson) => <S.LiStyled key={person.name} found={person.found} onClick={() => checkSnapshotData(person.name)}>
                        {person.name}
                    </S.LiStyled>)}
                </ul>
            </S.Dropdown>
        )
    }

    return (
        <S.TargetBox coords={coords} >
            <div className={"reticle"}/>
            { dropMenu()}
        </S.TargetBox>
    )
};

export default TargetBox;