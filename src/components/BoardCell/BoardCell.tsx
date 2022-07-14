import React from 'react'
import styled from 'styled-components/macro'
import { IDefaultCell } from '../../business/Cell'

interface Props {
  cell: IDefaultCell
}

const Cell = styled.div<{cellStyle: string}>`
  
`

const BoardCell: React.FC<Props> = ({cell}) => {
  return (
    <Cell cellStyle={cell.style}>
      
    </Cell>
  )
}

export default BoardCell