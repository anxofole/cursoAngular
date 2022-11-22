describe('when open dashboard', () => {
  describe('and server returns data', () => {
    beforeEach(() => {
      cy.clearLocalStorage();
      cy.interceptHeroes();
    });
    it('should show title heroes', () => {

      cy.visit('dashboard');

      cy.get('h1').contains('Heroes App');

    });

    it('should display 4 Top heroes', () => {

      cy.visit('dashboard');

      cy.get('h3').contains('Top Heroes');

      cy.containsTotalHeroes(4);
    });

    it('should navigate to top hero detail', () => {

      cy.visit('dashboard');
      cy.get('#top-heroes').children().first().click();

      cy.wait(1000);

      cy.url().should('include', '/detail');


    });
  });

  describe('and server returns no data', () => {
    beforeEach(() => {
      cy.clearLocalStorage();
      cy.interceptHeroesWithEmptyData();
    });
    it('should display 0 heroes', () => {
      cy.visit('dashboard');

      cy.get('h3').contains('Top Heroes');

      cy.containsTotalHeroes(0);
    });
  });

  describe('and server returns error', () => {
    beforeEach(() => {
      cy.clearLocalStorage();
      cy.interceptHeroesWithError();
    });
    it('should display 0 heroes', () => {
      cy.visit('dashboard');

      cy.get('h3').contains('Top Heroes');

      cy.containsTotalHeroes(0);
    });
  });
})
