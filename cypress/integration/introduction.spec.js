describe('Introduction Screen', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should succesfuly loads', () => {
    cy.url().should('equal', Cypress.config().baseUrl);
  });

  it('should title correct', () => {
    cy.title().should('equal', 'WinXP Spider Solitaire');
  });

  it('should load desktop when click login', () => {
    cy.get('[data-cy="login-account"]').click();

    cy.get('#app > div')
      .should('have.css', 'background-image')
      .and('include', 'winxp-background.webp');
  });
});
