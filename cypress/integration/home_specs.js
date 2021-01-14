//the app must be running on development mode
import { mount } from 'cypress-react-unit-test'
import React from 'react'
import App from '../../client/components'
import MapComponent from '../../client/components/Map/MapComponent';
import fakeStations from '../fixtures/fakeStations.json'

describe('<App />', () => {
  context('Run the application', () => {
    before(() => {
      cy.visit();
    });
  });

  it('Renders without crashing', () => {
    mount(<App />)
    expect(<App />).to.exist
  })

  it("Renders the map", () => {
    cy.get(MapComponent).should("be.visible");
  });

  it("Finds the user's geolocation", () => {
    cy.
  })

});

describe("<Map /> Component", () => {
  context('Run the application', () => {
    before(() => {
      cy.visit();
    });
  });

  it("Renders markers accordingly to the station's coordinates")

  cy.stub(window, 'fetch').resolves({
    json: () => Promise.resolve(fakeStations)
  });

});
