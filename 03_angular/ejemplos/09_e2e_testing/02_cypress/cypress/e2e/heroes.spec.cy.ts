describe('when open heroes', () => {
  describe('and server returns data', () => {
    beforeEach(() => {
      cy.clearLocalStorage();
      cy.interceptHeroes();
      cy.interceptDeleteHeroe();
    });
    it('should show have as title heroes list', () => {
      cy.visit('heroes-list');
      cy.get('h2').contains('Heroes');
    });

    it('should display 9 heroes list', () => {
      cy.visit('heroes-list');
      cy.get('#heroes-list').children().should('have.length', 9);
    });

    it('should select one hero when click on it', () => {
      cy.visit('heroes-list');

      cy.get('#heroes-list').children().first().click();
      cy.get('#heroes-list')
        .children()
        .first()
        .should('have.class', 'selected');
    });

    it('should add one hero when click on add', () => {
      cy.visit('heroes-list');

      cy.get('#heroes-list').children().should('have.length', 9);
      cy.get('#addHero').click();

      cy.fillInputWithPlaceholder('name', 'HeroName');

      cy.get('#saveHero').click();
      cy.wait(1000);
    });
  });
});
