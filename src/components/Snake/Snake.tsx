import React from 'react'
import styled from 'styled-components/macro'
import { useBoard } from '../../hooks/useBoard'
import Board from '../Board/Board'

const Wrapper = styled.div`
  position: relative;
`

type Props = {
  rows: number,
  columns: number,
}

const Snake: React.FC<Props> = ({ rows, columns }) => {

  const [board] = useBoard({rows, columns})

  return (
    <Wrapper>
      <Board board={board}/>
    </Wrapper>
  )
}

export default Snake