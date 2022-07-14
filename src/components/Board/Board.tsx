import React from 'react'
import styled from 'styled-components/macro'
import { IBuildBoard } from '../../business/Board'
import BoardCell from '../BoardCell/BoardCell'

const Wrapper = styled.div<{rows: number, columns: number}>`
  margin: 2rem auto;
  width: 45vw;
  height: 90vh;
  background-color: rgb(32, 0, 64);
  border: 10px solid rgb(32, 0, 64);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: grid;
  grid-gap: 2px;
  grid-template-rows: repeat(${({rows}) => rows}, 1fr);
  grid-template-columns: repeat(${({columns}) => columns}, 1fr);
`

type Props = {
  board: IBuildBoard
}


const Board: React.FC<Props> = ({board}) => {
  return (
    <Wrapper rows={board.size.rows} columns={board.size.columns}>
      {
        board.rows.map((row, y) => 
          row.map((cell, x) => (
            <BoardCell cell={cell}/>
          ))
        )
      }
    </Wrapper>
  )
}

export default Board