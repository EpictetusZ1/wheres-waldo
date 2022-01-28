import React from "react";
import firebase from "firebase/compat";
import DocumentData = firebase.firestore.DocumentData;
import Firestore = firebase.firestore.Firestore;

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

export interface IScore {
    time: number
    name: string
}

export interface IHighScoreArr {
    scores?: Array<IScore> | DocumentData
    myHighScore: IScore
    dbRef:  Firestore | any
}

export interface IToolTipStyledProps {
    visible: boolean
}

