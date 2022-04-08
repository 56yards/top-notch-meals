import cypress = require("cypress");

const API_URL = Cypress.config('apiUrl');

describe("New Recipe", () => {
  it(`Given I have a new recipe
      When I add the new recipe name
      And ingredients
      And measurements
      And cooking method
      Then the new recipe is saved for later`, () => {

      cy.visit('/new');

      cy.intercept('POST', `${API_URL}/recipes`, { fixture: 'recipe.json' }).as('saveRecipe');
      cy.intercept(`${API_URL}/recipes/1000`, { fixture: 'recipe.json' }).as('newRecipe');

      cy.get('input[name="name"]').type('Triple Chocolate Cake');
      cy.get('textarea[name="ingredients"]').type('200g golden caster sugar \n 4 large eggs \n 2 tbsp cocoa powder ...');
      cy.get('textarea[name="method"]').type('1. In a large bowl, beat together 200g og caster sugar with the eggs \n 2. add the cocoa power \n 3. ...');
      cy.get('button[name="submit"]').click();

      cy.wait('@newRecipe');
      cy.wait('@saveRecipe').its('response.statusCode').should('equal', 200)
      cy.location('pathname').should('eq', '/recipes/1000');
  });
});