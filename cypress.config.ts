import { defineConfig } from 'cypress'
import getCompareSnapshotsPlugin from 'cypress-visual-regression/dist/plugin'

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
  e2e: {
    setupNodeEvents: (on, config) => {
      // getCompareSnapshotsPlugin(on, config)
    },
  },
})
