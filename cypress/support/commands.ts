import compareSnapshotCommand from 'cypress-visual-regression/dist/command'

// compareSnapshotCommand()

Cypress.Commands.add('getBySel', (selector, ...args) => {
  return cy.get(`[data-cy="${selector}"]`, ...args)
})
