/// <reference types="cypress" />

import { faker } from "@faker-js/faker"

export default class MagentoCreateAcc {
  constructor() {
    this.firstName = "#firstname"
    this.lastName = "#lastname"
    this.email = ".control #email_address"
    this.password = "#password"
    this.confirmPassword = "#password-confirmation"
    this.createAccountBtn = ".submit"
  }

  createAccount() {
    // Generate credentials
    const userData = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(12), // 12 characters password
    }

    // Type in the form
    cy.get(this.firstName).type(userData.firstName)
    cy.get(this.lastName).type(userData.lastName)
    cy.get(this.email).type(userData.email)
    cy.get(this.password).type(userData.password)
    cy.get(this.confirmPassword).type(userData.password)
    cy.get(this.createAccountBtn).click()

    // Write credentials to a fixture file
    cy.writeFile("cypress/fixtures/userData.json", userData)
    cy.clearCookies()
    cy.clearLocalStorage()
  }
}
