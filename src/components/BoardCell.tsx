import React from 'react'
import styled from 'styled-components/macro'
import { IDefaultCell } from '../business/Cell'

interface Props {
  cell: IDefaultCell
}

const handleBackground = (cellStyle: string) => {
  switch(cellStyle) {
    case "snake":
      return "red"
    case "tail":
      return "aliceblue"
    case "fruit":
      return "yellow"
    default:
      return "green"
  }
}

const Cell = styled.div<{cellStyle: string}>`
  background-color: ${({cellStyle}) => handleBackground(cellStyle)};
  border-radius: 5px;
`

const BoardCell: React.FC<Props> = ({cell}) => {
  return (
    <Cell cellStyle={cell.style}>
      
    </Cell>
  )
}

export default BoardCell