import cypress = require("cypress");
const API_URL = Cypress.config('apiUrl');

describe("Single Recipe", () => {
  it(`Given I want to view a recipe
      When I visit a recipe url
      Then I can see the recipe name
      And I can see the ingredients
      And I can see the cooking methods`, () => {

      cy.intercept(`${API_URL}/recipes/1000`, { fixture: 'recipe.json' }).as('viewRecipe');

      cy.visit('/recipes/1000');
      cy.wait('@viewRecipe');

      cy.contains('h4', 'Triple Chocolate Cake');
      cy.get('.ingredients').first().contains('200g golden caster sugar ');
      cy.get('.method').first().contains('1. In a large bowl, beat together 200g og caster sugar with the eggs ');
  });

  it(`Given I am viewing a recipe
      When I click the 'View all recipes' link
      Then I expect to be taken to the all recipes page`, () => {

      cy.intercept(`${API_URL}/recipes`, { fixture: 'recipes.json' }).as('recipes');
      cy.intercept(`${API_URL}/recipes/1000`, { fixture: 'recipe.json' }).as('viewRecipe');

      cy.visit('/recipes/1000');
      cy.wait('@viewRecipe');


      cy.get('.go-back').click();
      cy.location('pathname').should('eq', '/');
  });
});
