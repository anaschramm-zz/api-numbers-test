require('@shelex/cypress-allure-plugin');

Cypress.Commands.add("getRandomNumber", () => {
    return Math.floor(Math.random() * 10000) - 10000;
});
Cypress.Commands.add("makeRequestPT", (number, method) => {
    cy.request({
        method: method,
        url: `http://challengeqa.staging.devmuch.io/${number}`,
        failOnStatusCode: false
    }).as("request");
});
Cypress.Commands.add("makeRequestEN", (number, method) => {
    cy.request({
        method: method,
        url: `http://challengeqa.staging.devmuch.io/en/${number}`,
        failOnStatusCode: false
    }).as("requestEN");
});
Cypress.Commands.add("validateStatusRequestPT", (status) => {
    cy.get("@request").its("status").should("eq", status);
});
Cypress.Commands.add("validateStatusRequestEN", (status) => {
    cy.get("@requestEN").its("status").should("eq", status);
});
Cypress.Commands.add("validateResponseRequestPT", (texto) => {
    cy.get("@request").should((res) => {
        expect(res.body.extenso).to.eq(texto);
    });
});
Cypress.Commands.add("validateResponseRequestEN", (texto) => {
    cy.get("@requestEN").should((res) => {
        expect(res.body.full).to.eq(texto);
    });
});
Cypress.Commands.add("validateResponseStatusTextPT", (texto) => {
    cy.get("@request").should((res) => {
        expect(res.statusText).to.eq(texto);
    });
});
Cypress.Commands.add("validateResponseStatusTextEN", (texto) => {
    cy.get("@requestEN").should((res) => {
        expect(res.statusText).to.eq(texto);
    });
});