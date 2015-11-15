// An example configuration file
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  
  baseUrl: 'http://localhost:9001',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
  
  framework: 'jasmine2',
  
  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: [
    //'e2e/example_spec.js',
    'e2e/**/*.js'
  ],
  
  exclude: [
    'e2e/example_spec.js'
  ],  

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};