describe("User Onboarding app", () => {
    beforeEach(() => {
      // arbitrary code you want running before your tests start
      cy.visit("http://localhost:3000");
    });

    it("Sanity test", () => {
        expect(1+1).to.equal(2);
    });

    const nameInput = () => cy.get("input[name='name']")
    const emailInput = () => cy.get("input[name='email']")
    const passwordInput = () => cy.get("input[name='password']")
    const termsInput = () => cy.get("input[name='terms']")
    const btn = () => cy.get("button")

    it("from validation check", () => {
        emailInput().type("he")
        cy.get(".errors").should("exist")
    })

    it("name input and type in it", () => {
        nameInput().should("exist");
        nameInput().type("Vince Vince");
        nameInput().should("have.value", "Vince Vince")
    });

    it("email input and type in it", () => {
        emailInput().should("exist");
        emailInput().type("vince@vince.com");
        emailInput().should("have.value", "vince@vince.com")
    });

    it("password input and type in it", () => {
        passwordInput().should("exist");
        passwordInput().type("12345");
        passwordInput().should("have.value", "12345")
    });

    it("checkbox can be clicked", () => {
        termsInput().click()
        termsInput().click()
        

    })
    it("can user submit", () => {
        nameInput().type("Vince Vince");
        emailInput().type("vince@vince.com");
        passwordInput().type("12345");
        termsInput().click()
        btn().click()
    })
});