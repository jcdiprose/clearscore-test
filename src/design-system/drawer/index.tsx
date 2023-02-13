import React, { Fragment } from 'react'
import { Box } from '../styled-system'

interface Detail {
  title: string
  description: string
}

export interface ElectoralRollDetails {
  title: string
  onTrackDescription: string
  offTrackDescription: string
  details: Detail[]
}

const Drawer = ({
  title,
  onTrackDescription,
  offTrackDescription,
  details,
}: ElectoralRollDetails) => {
  return (
    <Box
      position="absolute"
      top={0}
      right={0}
      width="200px"
      height="100vh"
      background="white"
      p={8}
    >
      {title}
      {details?.map(({ title, description }, i) => {
        return (
          <Fragment key={i}>
            <h1>{title}</h1>
            <h2>{description}</h2>
          </Fragment>
        )
      })}
    </Box>
  )
}

export default Drawer
