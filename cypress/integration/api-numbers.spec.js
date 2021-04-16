var extenso = require("extenso");

describe("Conversor de números em Português", () => {
    it("Preencher requisição com dados válidos", () => {
        cy.getRandomNumber().then((number) => {
            cy.makeRequestPT(number, "GET");
            cy.validateStatusRequestPT(200);
            cy.validateResponseRequestPT(extenso(number, { negative: "informal" }));
        });
    });
    it("Preencher requisição com dados inválidos", () => {
        cy.makeRequestPT("anaclara", "GET");
        cy.validateStatusRequestPT(400);
        cy.validateResponseRequestPT("Invalid data");
    });
    it("Preencher requisição com dado inválido negativo", () => {
        cy.makeRequestPT("-10001", "GET");
        cy.validateStatusRequestPT(400);
        cy.validateResponseRequestPT("Invalid data");
    });
    it("Preencher requisição com dado inválido positivo", () => {
        cy.makeRequestPT("10001", "GET");
        cy.validateStatusRequestPT(400);
        cy.validateResponseRequestPT("Invalid data");
    });
    it("Realizar requisição com método inválido", () => {
        cy.getRandomNumber().then((number) => {
            cy.makeRequestPT(number, "POST");
            cy.validateStatusRequestPT(405);
            cy.validateResponseStatusTextPT("Method Not Allowed");
        });
    });
});
describe("English number converter", () => {
    it("Fill request with valid data", () => {
        cy.makeRequestEN("547", "GET");
        cy.validateStatusRequestEN(200);
        cy.validateResponseRequestEN("five hundred and forty-seven");
    });
    it("Fill request with invalid data", () => {
        cy.makeRequestEN("anaclara", "GET");
        cy.validateStatusRequestEN(400);
        cy.validateResponseRequestEN("Invalid data");
    });
    it("Fill request with negative invalid data", () => {
        cy.makeRequestEN("-10001", "GET");
        cy.validateStatusRequestEN(400);
        cy.validateResponseRequestEN("Invalid data");
    });
    it("Fill request with positive invalid data", () => {
        cy.makeRequestEN("10001", "GET");
        cy.validateStatusRequestEN(400);
        cy.validateResponseRequestEN("Invalid data");
    });
    it("Realizar requisição com método inválido", () => {
        cy.getRandomNumber().then((number) => {
            cy.makeRequestEN(number, "POST");
            cy.validateStatusRequestEN(405);
            cy.validateResponseStatusTextEN("Method Not Allowed");
        });
    });
});