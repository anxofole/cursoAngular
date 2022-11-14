import '@testing-library/cypress/add-commands';

const HeroesUrl = '/heroes';
const HeroeUrl = '/heroes/*';
const HeroesAlias = 'getHeroes';
const DeleteHeroesAlias = 'deleteHeroes';



declare global {
  namespace Cypress {
    // eslint-disable-next-line
    interface Chainable<Subject = any> {
      interceptHeroes(): void;
      interceptHeroesWithEmptyData(): void;
      interceptHeroesWithError(): void;
      interceptDeleteHeroe(): void;

    }
  }
}

Cypress.Commands.add('interceptHeroes', (): void => {
  cy.intercept(HeroesUrl, {
    fixture: 'heroes',
  }).as(HeroesAlias);
});

Cypress.Commands.add('interceptHeroesWithEmptyData', (): void => {
  cy.intercept(HeroesUrl, []).as(HeroesAlias);
});

Cypress.Commands.add('interceptHeroesWithError', (): void => {
  cy.intercept(HeroesUrl, {
    statusCode: 500,
  }).as(HeroesAlias);
});

Cypress.Commands.add('interceptDeleteHeroe', (): void => {
  cy.intercept('DELETE', HeroeUrl, {
    statusCode: 200,
  }).as(DeleteHeroesAlias);
  cy.intercept('OPTIONS', HeroeUrl);

});

