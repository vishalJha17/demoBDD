/// <reference types="cypress" />

import MagentoCreateAcc from "../support/page/magentoCreateAcc"
import LoginPage from "../support/page/login"

const createAcc = new MagentoCreateAcc()
const login = new LoginPage()

describe("User Authentication", () => {
  before(() => {
    cy.viewport(1000, 606)
  })
  beforeEach(() => {
    cy.visit("/customer/account/login")
  })

  context("Given a user wants to access their account", () => {
    context("When stored credentials exist", () => {
      it("Then they should be able to login successfully", () => {
        cy.task("fileExists", "cypress/fixtures/userData.json").then(
          (exists) => {
            if (exists) {
              cy.log("Found stored credentials. Attempting to login...")
              cy.fixture("userData.json").then((userData) => {
                login.loginLuma(userData.email, userData.password)
                login.verifyLoginSuccess(userData.email)
              })
            }
          }
        )
      })
    })

    context("When no stored credentials exist", () => {
      it("Then a new account should be created and logged in", () => {
        cy.task("fileExists", "cypress/fixtures/userData.json").then(
          (exists) => {
            if (!exists) {
              cy.log("No stored credentials found. Creating new account...")
              cy.visit("/customer/account/create/")

              createAcc.createAccount()

              cy.visit("/customer/account/login")
              cy.fixture("userData.json").then((userData) => {
                login.loginLuma(userData.email, userData.password)
                login.verifyLoginSuccess(userData.email)
              })
            }
          }
        )
      })
    })
  })
})
