import React, { useEffect, useReducer, useState } from 'react'
import Card from '../../design-system/card'
import Drawer, { ElectoralRollDetails } from '../../design-system/drawer'
import DrawerPortal from '../../design-system/drawer-portal'
import Grid from '../../design-system/grid'
import Pill from '../../design-system/pill'
import { Box, Text } from '../../design-system/styled-system'
import { fetchElectoralRollDetails, fetchInsights } from './api'
import reducer, { SET_TRACK_STATUS } from './reducer'

const Insights = () => {
  const [state, dispatch] = useReducer(reducer, {})
  const [loading, setLoading] = useState(true)
  const [drawerDetails, setDrawerDetails] = useState<ElectoralRollDetails | {}>({})
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    fetchInsights().then((data) => {
      dispatch({
        type: SET_TRACK_STATUS,
        payload: data,
      })
      setLoading(false)
    })
  }, [])

  const openElectoralRollDrawer = () => {
    fetchElectoralRollDetails<ElectoralRollDetails>().then((data) => {
      setDrawerDetails(data)
      setDrawerOpen(true)
    })
  }

  if (loading) return <h1>Loading...</h1>

  const getVariant = (state: Record<'onTrack', boolean> | undefined) =>
    state?.onTrack ? 'green' : 'orange'

  const getText = (state: Record<'onTrack', boolean> | undefined) =>
    state?.onTrack ? 'On Track' : 'Off Track'

  return (
    <>
      <Box px={4} py={5} width="100%" overflowX="auto">
        <Text fontSize={3} fontWeight={600} mb={3}>
          Insights
        </Text>
        <Grid>
          <Card
            title="Electoral Role"
            pills={[
              <Pill
                key="track"
                variant={getVariant(state.electoralRoll)}
                text={getText(state.electoralRoll)}
              />,
              <Pill key="impact" variant="gray" text="Medium Impact" fillOnMobile />,
            ]}
            body="Being on the electoral role can improve your score"
            onClick={openElectoralRollDrawer}
          />
          <Card
            title="Public Information"
            pills={[
              <Pill
                key="track"
                variant={getVariant(state.publicInformation)}
                text={getText(state.publicInformation)}
              />,
              <Pill key="impact" variant="gray" text="High Impact" fillOnMobile />,
            ]}
            body="Bankruptcies and individual voluntary arrangements can damage your score"
          />
          <Card
            title="Credit utilisation"
            pills={[
              <Pill
                key="track"
                variant={getVariant(state.creditUtilisation)}
                text={getText(state.creditUtilisation)}
              />,
              <Pill key="impact" variant="gray" text="Medium Impact" fillOnMobile />,
            ]}
            body="Using more than 50% of your available credit can damage your score"
          />
        </Grid>
      </Box>
      <DrawerPortal isOpen={drawerOpen}>
        {typeof drawerDetails === 'object' && 'onTrackDescription' in drawerDetails ? (
          <Drawer {...drawerDetails} />
        ) : null}
      </DrawerPortal>
    </>
  )
}

export default Insights
