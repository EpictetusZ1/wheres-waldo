
export interface IMousePos {
    xPos: number
    yPos: number
}

export interface ITargetBoxProps {
    coords: IMousePos
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

