import React from 'react'
import { Box, Text } from '../styled-system'

interface Props extends React.DOMAttributes<HTMLDivElement> {
  title: string
  pills: [React.ReactNode, React.ReactNode]
  body: string
}

const Card = ({ title, pills, body, ...rest }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      bg="white"
      boxShadow={0}
      borderRadius={1}
      padding={[4, 4, 5]}
      {...rest}
    >
      <Box display={['none', null, 'flex']} data-cy="CardPillsDesktop">
        {pills.map((pill) => pill)}
      </Box>
      <Box display={['block', null, 'none']} data-cy="CardPillsOneMob">
        {pills[0]}
      </Box>
      <Text fontSize={2} mt={5} fontWeight={1} data-cy="CardTitle">
        {title}
      </Text>
      <Text fontSize={1} lineHeight={3} mt={2} mb={4} data-cy="CardBody">
        {body}
      </Text>
      <Box display={['block', null, 'none']} mt="auto" data-cy="CardPillsTwoMob">
        {pills[1]}
      </Box>
    </Box>
  )
}

export default Card
