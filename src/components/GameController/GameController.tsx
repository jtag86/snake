import React from 'react'
import styled from 'styled-components/macro'
import { useInterval } from '../../hooks/useInterval'
import { IBuildBoard } from '../../business/Board'
import { ISnake } from '../../business/Snake'
import { snakeController } from '../../business/SnakeController'
import { Action, actionForKey, keyofAction } from '../../business/Input'


const defaultDelay = 500

interface Props {
  board: IBuildBoard,
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

  const Controller = styled.input`
    position: absolute;
    top: -100em;
  `

  useInterval(() => {
    handleInput({ action: Action.Move })
  }, defaultDelay)


  const handleInput = ({ action }: { action: keyofAction }) => {
    snakeController(
      action,
      board,
      player,
      setPlayer,
      setGameOver
    )
  }

  return (
    <Controller 
      type="text"
      autoFocus
    />
  )
}

export default GameController