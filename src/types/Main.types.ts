import React from "react";

export interface IMousePos {
    xPos: number
    yPos: number
}

export interface ITargetBoxProps {
    mouseCoords: IMousePos
    relativeCoords: IMousePos
    tryAgain: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ITargetBoxStyledProps {
    coords : IMousePos
}

export interface IListStyledProps {
    found: boolean
}

export interface IPerson {
    coords: IMousePos
    name: string
    found: boolean
}

export interface IFoundPersonsProps {

}
