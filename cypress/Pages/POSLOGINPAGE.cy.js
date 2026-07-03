class POSLoginPage {

  // Selectors
  elements = {
    username: () => cy.get('#username'),
    password: () => cy.get('#password'),
    stationId: () => cy.get('#stationId'),
    loginBtn: () => cy.get('.ant-btn'),
  }

  // Actions
  visit() {
    cy.visit('http://dev1.sianty.com/#/login')
  }

  enterUsername(username) {
    this.elements.username().type(username)
  }

  enterPassword(password) {
    this.elements.password().type(password)
  }

  enterStationId(stationId) {
    this.elements.stationId().type(stationId)
  }

  clickLogin() {
    this.elements.loginBtn().click()
  }

  // Full login method
  login(username, password, stationId) {
    this.visit()
    this.enterUsername(username)
    this.enterPassword(password)
    this.enterStationId(stationId)
    this.clickLogin()
  }

}

export default new POSLoginPage()