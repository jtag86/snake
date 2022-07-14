import React from "react";
import { IBuildBoard } from "./Board";
import { Action, keyofAction } from "./Input";
import { ISnake } from "./Snake";


export const snakeController = (
    action: keyofAction,
    board: IBuildBoard,
    player: ISnake,
    setPlayer: React.Dispatch<React.SetStateAction<ISnake>>,
    setGameOver: React.Dispatch<React.SetStateAction<boolean>>,
) => {
    if(!action) return

    if(action === Action.Move) {
        
    }
}