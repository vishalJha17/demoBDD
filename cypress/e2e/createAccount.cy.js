/// <reference types="cypress" />
import MagentoCreateAcc from "../support/page/magentoCreateAcc"
const createAcc = new MagentoCreateAcc()

describe("Account Creation", () => {
  beforeEach(() => {
    cy.visit("/customer/account/create/")
  })

  context("Given a new user wants to register", () => {
    context("When they fill out the registration form", () => {
      it("Then they should be able to create a new account successfully", () => {
        createAcc.createAccount()
      })
    })
  })
})
