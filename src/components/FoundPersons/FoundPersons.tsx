import React, {useContext} from "react";
import { IPerson} from "../../types/Main.types";
import * as S from "./FoundPersons.style"
import {PhotoContext} from "../../App";

const FoundPersons: React.FC = () => {
    const {photos} = useContext(PhotoContext)

    let foundPeople = []
    for (let i = 0; i < photos.characters.length; i++) {
        if (photos.characters[i].found) {
            foundPeople.push(photos.characters[i])
        }
    }

    return (
        <S.FoundPersonsStyle>
            <h4>Found:</h4>
            <ul>
                {foundPeople.map((person: IPerson) => {
                    return (
                        <li key={person.name}>
                            {person.name}
                        </li>
                    )
                })}
            </ul>

        </S.FoundPersonsStyle>
    )
}

export default FoundPersons