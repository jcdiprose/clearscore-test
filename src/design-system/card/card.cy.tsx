import { ThemeProvider } from '@emotion/react'
import React from 'react'
import Pill from '../pill'
import theme from '../styled-system/theme'
import Card from './index'

describe('<Card />', () => {
  it('renders', () => {
    cy.viewport(800, 300)
    cy.mount(
      <ThemeProvider theme={theme}>
        <Card
          title="Public Information"
          pills={[
            <Pill key="track" variant="green" text="On Track" />,
            <Pill key="impact" variant="gray" text="High Impact" fillOnMobile />,
          ]}
          body="Bankruptcies and individual voluntary arrangements can damage your score"
        />
      </ThemeProvider>
    )

    cy.getBySel('CardTitle').should('contain', 'Public Information')
    cy.getBySel('CardBody').should(
      'contain',
      'Bankruptcies and individual voluntary arrangements can damage your score'
    )
    cy.getBySel('CardPillsDesktop').should('be.visible')
    cy.getBySel('CardPillsOneMob').should('not.be.visible')
    cy.getBySel('CardPillsTwoMob').should('not.be.visible')

    // cy.compareSnapshot('Card 500')
  })

  it('renders mobile', () => {
    cy.viewport(300, 300)
    cy.mount(
      <ThemeProvider theme={theme}>
        <Card
          title="Public Information"
          pills={[
            <Pill key="track" variant="green" text="On Track" />,
            <Pill key="impact" variant="gray" text="High Impact" fillOnMobile />,
          ]}
          body="Bankruptcies and individual voluntary arrangements can damage your score"
        />
      </ThemeProvider>
    )

    cy.getBySel('CardTitle').should('contain', 'Public Information')
    cy.getBySel('CardBody').should(
      'contain',
      'Bankruptcies and individual voluntary arrangements can damage your score'
    )
    cy.getBySel('CardPillsDesktop').should('not.be.visible')
    cy.getBySel('CardPillsOneMob').should('be.visible')
    cy.getBySel('CardPillsTwoMob').should('be.visible')

    // cy.compareSnapshot('Card 500')
  })
})
