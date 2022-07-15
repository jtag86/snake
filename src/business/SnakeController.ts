import React from "react";
import { IBoard, isWithinBoard } from "./Board";
import { Action, keyofAction } from "./Input";
import { ISnake } from "./Snake";

interface IDelta {
    x: number,
    y: number,
}

export interface IPos {
    row: number,
    column: number
}

const attemptMovement = (
    action: keyofAction | null,
    board: IBoard,
    player: ISnake,
    setPlayer: React.Dispatch<React.SetStateAction<ISnake>>,
    setGameOver: React.Dispatch<React.SetStateAction<boolean>>,
) => {
    let direction = player.direction
    if(action === Action.Left) {
        if(player.direction.x === 0) direction = {x: -1, y: 0};
    } else if (action === Action.Right) {
        if(player.direction.x === 0) direction = {x: 1, y: 0};
    } else if (action === Action.Up) {
        if(player.direction.y === 0) direction = {x: 0, y: -1};
    } else if (action === Action.Down) {
        if(player.direction.y === 0) direction = {x: 0, y: 1};
    } 

    player = {
        ...player,
        direction: {
            ...player.direction,
            ...direction
        }
    }

    const [ collided, updatedPlayer ] = movePlayer(
        player,
        board,
    )

    if(collided) setGameOver(true)

    setPlayer({...updatedPlayer})
}

const movePlayer = (player: ISnake, board: IBoard) => {
    const desiredNextPosition:IPos = {
        row: player.headX + player.direction.x,
        column: player.headY + player.direction.y,
    }

    const isOnBoard = isWithinBoard(board, desiredNextPosition)
    
    player.headX = desiredNextPosition.row
    player.headY = desiredNextPosition.column
    const collided = !isOnBoard

    return [collided, player] as const
}

export const snakeController = (
    action: keyofAction | null,
    board: IBoard,
    player: ISnake,
    setPlayer: React.Dispatch<React.SetStateAction<ISnake>>,
    setGameOver: React.Dispatch<React.SetStateAction<boolean>>,
) => {
    attemptMovement(action, board, player, setPlayer, setGameOver)
}