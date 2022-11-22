describe('when click menu option', () => {
    beforeEach(() => {
      cy.clearLocalStorage();
      cy.interceptHeroes();
    });
    it('dashboard should navigate to dashboard', () => {

      cy.visit('/');
      cy.clickMenuOption('Dashboard');

      cy.wait(1000);

      cy.url().should('include', '/dashboard');
    });

    it('heroes should navigate to heroes', () => {

      cy.visit('/');
      cy.clickMenuOption('Heroes');
      cy.wait(1000);

      cy.url().should('include', '/heroes-list');
    });
});
