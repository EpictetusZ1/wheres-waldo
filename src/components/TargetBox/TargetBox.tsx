// React
import React, {useContext} from 'react';

// Types
import {IMousePos, IPerson, ITargetBoxProps} from "../../types/Main.types";

// Context & Styles
import { PhotoContext } from "../../App";
import * as S from "./TargetBox.styles";

// Character Images
import Thoreau from "../../assets/characterIcons/Thoreau.jpeg"
import Waldo from "../../assets/characterIcons/Waldo.jpeg"
import Whitman from "../../assets/characterIcons/Whitman.jpeg"


const TargetBox: React.FC<ITargetBoxProps> = ( {mouseCoords, relativeCoords, tryAgain} ) => {

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
                // Check if character true position falls in range of 100px of selected mouse pos.
                const xRange = [relativeCoords.xPos - 50, relativeCoords.xPos + 50]
                const yRange = [relativeCoords.yPos - 50, relativeCoords.yPos + 50]

                const checkTrue = (): void => {
                    if (trueCoords.xPos >= xRange[0] && trueCoords.xPos <= xRange[1]) {
                        if (trueCoords.yPos >= yRange[0] && trueCoords.yPos <= yRange[1]) {
                            const copyPeople = photos
                            copyPeople.characters[i].found = true

                            const updatePerson = {
                                type: "updateFound",
                                data: copyPeople
                            }
                             dispatch(updatePerson)
                        }
                    }
                    else {
                        tryAgain(true)
                        setTimeout(() => {
                            tryAgain(false)
                        }, 3000)
                    }
                }
                checkTrue()
            }
            defineTargetChar()
        }

        const getCharPic = (name: string): string => {
            switch (name) {
                default:
                    return ""
                case "Waldo":
                    return Waldo
                case "Thoreau":
                    return Thoreau
                case "Whitman":
                    return Whitman
            }
        }

        return (
            <S.Dropdown>
                <p className={"dropDownHeader"}>Find Us:</p>
                <ul>
                    {photos.characters.map((person: IPerson) => {
                        return (
                            <S.LiStyled key={person.name}
                                        found={person.found}
                                        onClick={() => checkSnapshotData(person.name)}
                            >
                                {person.name}
                                <img src={getCharPic(person.name)} alt={person.name} />
                            </S.LiStyled>
                        )
                    })}
                </ul>
            </S.Dropdown>
        )
    }

    return (
        <S.TargetBox coords={mouseCoords} >
            <div className={"reticle"}/>
            { dropMenu()}
        </S.TargetBox>
    )
};

export default TargetBox;