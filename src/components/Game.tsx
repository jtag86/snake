import React from 'react'
import styled from 'styled-components/macro'
import { useGameOver } from '../hooks/useGameOver'
import Menu from './Menu'
import Snake from './Snake'

const Wrapper = styled.div`
  width: 100vw;
  height: 70vh;
  padding-top: 10px;  
`

type Props = {
  rows: number,
  columns: number,
}

const Game: React.FC<Props> = ({rows, columns}) => {

  const [gameOver, setGameOver, restartGameOver] = useGameOver()
  return (
    <Wrapper>
      {
        gameOver ?
        (
          <Menu handleClick={restartGameOver} />
        ) : (
          <Snake rows={rows} columns={columns} setGameOver={setGameOver}/>
        )
      }
    </Wrapper>
  )
}

export default Game