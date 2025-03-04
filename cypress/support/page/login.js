import MagentoCreateAcc from "./magentoCreateAcc"
const createAcc = new MagentoCreateAcc()
export default class LoginPage {
  constructor() {
    this.emailfield = "#email"
    this.passwordfield = "#pass"
    this.signinBtn = ".primary .login"
    this.accountName = ".greet .logged-in"
  }
  loginLuma(email, password) {
    cy.get(this.emailfield).type(email)
    cy.get(this.passwordfield).type(password)
    cy.get(this.signinBtn).click()
  }
  verifyLoginSuccess(email) {
    cy.get(this.accountName)
      .invoke("text")
      .then((text) => {
        expect(text).to.contain("Welcome")
      })
  }
}
