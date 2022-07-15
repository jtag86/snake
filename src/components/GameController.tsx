import React from 'react'
import styled from 'styled-components/macro'
import { useInterval } from '../hooks/useInterval'
import { IBoard } from '../business/Board'
import { ISnake } from '../business/Snake'
import { snakeController } from '../business/SnakeController'
import { Action, actionForKey, keyofAction, KeyType } from '../business/Input'


const defaultDelay = 500
let action: Action | null = null


const Controller = styled.input`
  position: absolute;
  top: 100px;
  left: 100px;
  width: 100px;
  height: 200px;
  background-color: #fff;

`

interface Props {
  board: IBoard,
  player: ISnake,
  setPlayer: React.Dispatch<React.SetStateAction<ISnake>>,
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>,
}

const GameController: React.FC<Props> = ({
  board,
  player,
  setPlayer,
  setGameOver,
}) => {


  useInterval(() => {
    handleInput(action) 
  }, defaultDelay)


  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if(e.repeat) return
    console.log("onKeyDown")
    action = actionForKey(e.code as KeyType)
  }

  const handleInput = (action: keyofAction | null) => {
    snakeController(
      action,
      board,
      player,
      setPlayer,
      setGameOver,
    )
  }

  return (
    <Controller
      type="text"
      onKeyDown={onKeyDown}
      autoFocus
    />
  )
}

export default GameController