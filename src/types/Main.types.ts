export interface IMousePos {
    xPos: number
    yPos: number
}

export interface IGameWrapperProps {
    photoSelection: string
}

export interface ITargetBoxProps {
    coords: IMousePos
    people: Array<IPerson>
}

export interface ITargetBoxStyledProps {
    coords : IMousePos
}

export interface IPerson {
    coords: IMousePos
    name: string
    found: boolean
}

