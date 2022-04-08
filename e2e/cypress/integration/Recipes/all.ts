import cypress = require("cypress");
const API_URL = Cypress.config('apiUrl');

describe("All Recipes", () => {
  it(`Given I want to view all recipes
      When I visit the default page
      Then I can see a list of recipes`, () => {

      cy.intercept(`${API_URL}/recipes`, { fixture: 'recipes.json' }).as('recipes');

      cy.visit('/');
      cy.wait('@recipes');

      cy.get('.recipe-item').first().contains('Lazy Lasagne');
      cy.get('.recipe-item').eq(1).contains('Homemade Pizza');
      cy.get('.recipe-item').eq(2).contains('Lamba Balti');
  });

  it(`Given I want to create a new recipe
      When I visit the default page
      And I click the 'Create New Recipe' button
      Then I expect to be taken to the new recipe page`, () => {

      cy.intercept(`${API_URL}/recipes`, { fixture: 'recipes.json' }).as('recipes');

      cy.visit('/');
      cy.wait('@recipes');

      cy.get('.new-recipe').click();
      cy.location('pathname').should('eq', '/new');
  });

  it(`Given I want to search for a recipe
      When I visit the default page
      And I enter 'Pizza' into the search
      Then I expect to see a filter recipe list`, () => {

      cy.intercept(`${API_URL}/recipes`, { fixture: 'recipes.json' }).as('recipes');

      cy.visit('/');
      cy.wait('@recipes');

      
      cy.get('input[name="search"]').type('Pizza');

      cy.get('.recipe-item').first().contains('Homemade Pizza');
      cy.get('.recipe-item').should('have.length', 1);
  });
});
