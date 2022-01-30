import React, {useEffect, useState} from "react";
import * as S from "./ToolTip.styles"

const Tooltip = () => {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
    }, [visible])

    const Instructions = () => {
        return (
            <S.Instructions visible={visible}>
                <p className={"rulesHeader"}>How to play</p>
                <hr/>
                <ul>
                    <li>Click anywhere to see a list of people to find</li>
                    <li>Find all people then submit your high score!</li>
                    <li>View other top high scores</li>
                </ul>
            </S.Instructions>
        )
    }

    return (
        <S.ToolTip
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            <Instructions />
            <p>?</p>
        </S.ToolTip>
    )
}

export default Tooltip;