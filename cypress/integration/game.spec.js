describe('Game Screen', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('section > button:first-child').click();
    cy.get('[data-cy="spider-solitaire-program"]').dblclick();
  });

  it('should decrease score when click hint', () => {
    cy.get('[data-cy="score-span"]')
      .invoke('text')
      .then((beforeScore) => {
        cy.get('[data-cy="hint-area"]').click();

        cy.get('[data-cy="score-span"]')
          .invoke('text')
          .should((afterScore) => {
            expect(beforeScore).not.to.eq(afterScore);
          });
      });
  });
});
