Cypress.Commands.add("getRandomNumber", () => {
    return Math.floor(Math.random() * 10000) - 10000;
});

Cypress.Commands.add("makeRequest", (number) => {
    cy.request({
        method: "GET",
        url: `http://challengeqa.staging.devmuch.io/${number}`,
        failOnStatusCode: false
    }).as("request");
});

Cypress.Commands.add("validateStatusRequest", () => {
    cy.get("@request").its("status").should("eq", 200);
});