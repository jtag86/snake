export type KeyType = keyof typeof Key
export type keyofAction = keyof typeof Action


export enum Action {
    Left = "Left",
    Right = "Right",
    Up = "Up",
    Down = "Down",
    Move = "Move",
}

export const Key = {
    ArrowLeft: Action.Left,
    ArrowRight: Action.Right,
    ArrowUp: Action.Up,
    ArrowDown: Action.Down,
}


export const actionForKey = (keyCode: KeyType) => Key[keyCode]