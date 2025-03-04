const { defineConfig } = require("cypress")
const fs = require("fs")

async function setupNodeEvents(on, config) {
  on("task", {
    fileExists(filename) {
      return fs.existsSync(filename)
    },
  })

  return config
}

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    setupNodeEvents,
  },
})
