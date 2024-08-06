import React from 'react'
import FruitPage from './page'

describe('<FruitPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FruitPage />)
  })
})