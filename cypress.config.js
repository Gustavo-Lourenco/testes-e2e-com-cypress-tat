const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    projectId: 'tmuxkg',
    baseUrl: 'https://notes-serverless-app.com',
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    chromeWebSecurity: false,
    env: {
      viewportWidthBreakpoint: 768,
    }
  },
})
