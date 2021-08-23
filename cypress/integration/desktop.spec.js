describe('Introduction Screen', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="login-account"]').click();
  });

  it('should load game when click game', () => {
    cy.get('[data-cy="spider-solitaire-program"]').dblclick();
  });
});
