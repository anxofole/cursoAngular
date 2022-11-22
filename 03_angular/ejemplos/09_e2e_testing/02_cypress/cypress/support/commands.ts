import '@testing-library/cypress';

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      clickMenuOption(option: 'Dashboard' | 'Heroes'): void;
      containsTotalHeroes(count: number): void;
      fillInputWithPlaceholder(placeholder: string, value: string): void;
    }
  }
}

Cypress.Commands.add('containsTotalHeroes', (count: number): void => {
  cy.get('#top-heroes').children().should('have.length', count);
});

Cypress.Commands.add(
  'clickMenuOption',
  (option: 'Dashboard' | 'Heroes'): void => {
    cy.get('nav a').contains(option).wait(400).click();
  }
);

Cypress.Commands.add(
  'fillInputWithPlaceholder',
  (placeholder: string, value: string): void => {
    cy.findByPlaceholderText(placeholder).type(value);
  }
);
