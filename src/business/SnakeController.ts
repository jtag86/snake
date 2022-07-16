import React from "react";
import { IBoard, isWithinBoard } from "./Board";
import { IFruit, isWithinFruit } from "./Fruit";
import { Action, keyofAction } from "./Input";
import { ISnake, isWithinTail } from "./Snake";

interface IDelta {
    x: number,
    y: number,
}

export interface IPos {
    row: number,
    column: number,
}

const attemptMovement = (
    action: keyofAction | null,
    board: IBoard,
    player: ISnake,
    fruit: IFruit,
    addPoints: () => void,
    addFruit: () => void,
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

    const newPlayer = {
        ...player,
        direction: {
            ...player.direction,
            ...direction
        }
    }

    const [ collided, isFruit, updatedPlayer ] = movePlayer(
        newPlayer,
        fruit,
        board,
    )

    if(isFruit) {
        addPoints()
        addFruit()
    }

    if(collided) setGameOver(true)

    setPlayer({...updatedPlayer})
}

const movePlayer = (player: ISnake, fruit: IFruit, board: IBoard) => {
    const desiredNextPosition:IPos = {
        row: player.headX + player.direction.x,
        column: player.headY + player.direction.y,
    }

    const isFruit = isWithinFruit(fruit, desiredNextPosition)

    const isOnBoard = isWithinBoard(board, desiredNextPosition)

    const isInTail = isWithinTail(player)
    console.log("isInTail: ", isInTail)


    if(isFruit) {
        player = {
            ...player,
            tail: [...player.tail, 
                {
                    x: player.headX, 
                    y: player.headY,
                }
            ]
        }
    }

    if(isOnBoard) {
        const len = player.tail.length
        if(len){
            for(let i = len-1; i > 0; i--) {
                player.tail[i].x = player.tail[i-1].x
                player.tail[i].y = player.tail[i-1].y
            }
            player.tail[0].x = player.headX
            player.tail[0].y = player.headY
        }
        player.headX = desiredNextPosition.row
        player.headY = desiredNextPosition.column
    }

    const collided = !isOnBoard || isInTail

    return [collided, isFruit, player] as const
}

export const snakeController = (
    action: keyofAction | null,
    board: IBoard,
    player: ISnake,
    fruit: IFruit,
    addPoints: () => void,
    addFruit: () => void,
    setPlayer: React.Dispatch<React.SetStateAction<ISnake>>,
    setGameOver: React.Dispatch<React.SetStateAction<boolean>>,
) => {
    attemptMovement(action, board, player, fruit, addFruit, addPoints, setPlayer, setGameOver)
}