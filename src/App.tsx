import { ThemeProvider } from '@emotion/react'
import React from 'react'
import Insights from './features/insights'
import theme from './design-system/styled-system/theme'
import { Global, css } from '@emotion/react'
import reset from './reset'
import { Box } from './design-system/styled-system'

// One hour left.. Split pills on mobile.. add tests
function App() {
  return (
    <Box>
      <Global styles={css(reset)} />
      <ThemeProvider theme={theme}>
        <Insights />
      </ThemeProvider>
    </Box>
  )
}

export default App
