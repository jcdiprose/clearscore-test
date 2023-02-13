import React from 'react'
import { Box } from '../styled-system'

interface Props {
  children: React.ReactNode
}

const Grid = ({ children }: Props) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={['repeat(8, 45%)', null, '1fr 1fr', '1fr 1fr 1fr']}
      gap={4}
      maxWidth="100vw"
    >
      {children}
    </Box>
  )
}

export default Grid
