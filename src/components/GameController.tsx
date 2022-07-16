import React from 'react'
import styled from 'styled-components/macro'
import { useInterval } from '../hooks/useInterval'
import { IBoard } from '../business/Board'
import { ISnake } from '../business/Snake'
import { snakeController } from '../business/SnakeController'
import { Action, actionForKey, keyofAction, KeyType } from '../business/Input'
import { IFruit } from '../business/Fruit'
import { IGameStats } from '../hooks/useGamesStats'

import { FaChevronDown } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const defaultDelay = 150
let action: Action | null = null


const Controller = styled.button`
  position: absolute;
  left: -100rem;
  background-color: #fff;
`

const Wrapper = styled.div`
  margin-top: 0rem;
  display: flex;
  justify-content: center;
  align-content: center;
`

const ButtonsWrapper = styled.div`
  position: relative;
`

const UpButton = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 10px 10px rgba( 0, 0, 0, 0.5);
  border-radius: 50%;
  background-color: purple;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  :active {
    box-shadow: 0px 0px 10px 5px rgba( 0, 0, 0, 0.5);
  }
`

const DownButton = styled.div`
  position: absolute;
  top: 190px;
  left: 0;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 10px 10px rgba( 0, 0, 0, 0.5);
  border-radius: 50%;
  background-color: purple;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  :active {
    box-shadow: 0px 0px 10px 5px rgba( 0, 0, 0, 0.5);
  }
`

const LeftButton = styled.div`
  position: absolute;
  top: 130px;
  left: -70px;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 10px 10px rgba( 0, 0, 0, 0.5);
  border-radius: 50%;
  background-color: purple;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  :active {
    box-shadow: 0px 0px 10px 5px rgba( 0, 0, 0, 0.5);
  }
`

const RightButton = styled.div`
  position: absolute;
  top: 130px;
  left: 70px;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 10px 10px rgba( 0, 0, 0, 0.5);
  border-radius: 50%;
  background-color: purple;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  :active {
    box-shadow: 0px 0px 10px 5px rgba( 0, 0, 0, 0.5);
  }
`

interface Props {
  board: IBoard,
  player: ISnake,
  fruit: IFruit,
  addPoints: () => void,
  addFruit: () => void,
  setPlayer: React.Dispatch<React.SetStateAction<ISnake>>,
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>,
}

const GameController: React.FC<Props> = ({
  board,
  player,
  fruit,
  addFruit,
  addPoints,
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
      fruit,
      addPoints,
      addFruit,
      setPlayer,
      setGameOver,
    )
  }

  return (
    <Wrapper>
      <Controller onKeyDown={onKeyDown} autoFocus />
      <ButtonsWrapper>
        <UpButton onClick={() => action = Action.Up}> <FaChevronUp fontSize={30}/>  </UpButton>
        <DownButton onClick={() => action = Action.Down}> <FaChevronDown fontSize={30}/> </DownButton>
        <LeftButton onClick={() => action = Action.Left}> <FaChevronLeft fontSize={30}/> </LeftButton>
        <RightButton onClick={() => action = Action.Right}> <FaChevronRight fontSize={30}/> </RightButton>
      </ButtonsWrapper>
    </Wrapper>
  )
}

export default GameController