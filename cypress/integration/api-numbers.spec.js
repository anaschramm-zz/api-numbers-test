var extenso = require("extenso");

describe("Conversor de números em Português", () => {

    it("Preencher requisição com dados válidos", () => {
        cy.getRandomNumber().then((number) => {
            cy.request({
                method: "GET",
                url: `http://challengeqa.staging.devmuch.io/${number}`,
                failOnStatusCode: false
            }).then((res) => {
                expect(res.body.extenso).to.eq(extenso(number, { negative: "informal" }));
                expect(res.status).to.eq(200);
            });
        });
    });

    it("TESTE", () => {
        cy.getRandomNumber().then((number) => {
            cy.makeRequest(number);
            cy.validateStatusRequest();
        });
    });

    it("Preencher requisição com dados inválidos", () => {
        cy.request({
            method: "GET",
            url: "http://challengeqa.staging.devmuch.io/anaclara",
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).to.eq(400);
            expect(res.body.extenso).to.eq("Invalid data");
        });
    });

    it("Preencher requisição com dado inválido negativo", () => {
        cy.request({
            method: "GET",
            url: "http://challengeqa.staging.devmuch.io/-10001",
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).to.eq(400);
            expect(res.body.extenso).to.eq("Invalid data");
        });
    });

    it("Preencher requisição com dado inválido positivo", () => {
        cy.request({
            method: "GET",
            url: "http://challengeqa.staging.devmuch.io/10001",
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).to.eq(400);
            expect(res.body.extenso).to.eq("Invalid data");
        });
    });

    it("Realizar requisição com método inválido", () => {
        cy.getRandomNumber().then((number) => {
            cy.request({
                method: "POST",
                url: `http://challengeqa.staging.devmuch.io/${number}`,
                failOnStatusCode: false
            }).then((res) => {
                expect(res.status).to.eq(405);
            expect(res.statusText).to.eq("Method Not Allowed");
            });
        });
    });
});

describe("English number converter", () => {

    it("Fill request with valid data", () => {
        cy.request({
            method: "GET",
            url: "http://challengeqa.staging.devmuch.io/en/547",
            failOnStatusCode: false
        }).then((res) => {
            expect(res.body.full).to.eq("five hundred and forty-seven")
            expect(res.status).to.eq(200);
        });
    });

    it("Fill request with invalid data", () => {
        cy.request({
            method: "GET",
            url: "http://challengeqa.staging.devmuch.io/en/anaclara",
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).to.eq(400);
            expect(res.body.full).to.eq("Invalid data");
        });
    });

    it("Fill request with negative invalid data", () => {
        cy.request({
            method: "GET",
            url: "http://challengeqa.staging.devmuch.io/en/-10001",
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).to.eq(400);
            expect(res.body.full).to.eq("Invalid data");
        });
    });

    it("Fill request with positive invalid data", () => {
        cy.request({
            method: "GET",
            url: "http://challengeqa.staging.devmuch.io/en/10001",
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).to.eq(400);
            expect(res.body.full).to.eq("Invalid data");
        });
    });

    it("Realizar requisição com método inválido", () => {
        cy.getRandomNumber().then((number) => {
            cy.request({
                method: "POST",
                url: `http://challengeqa.staging.devmuch.io/en/${number}`,
                failOnStatusCode: false
            }).then((res) => {
                expect(res.status).to.eq(405);
            expect(res.statusText).to.eq("Method Not Allowed");
            });
        });
    });
});