import assert from 'node:assert'
import test from 'node:test'
import plugin from './index.js'

const { decorateConfig } = plugin

// It should decorate config properly when empty CSS is passed.
test('it returns expected configuration on empty CSS', t => {
  // Declare the config we must send for reference.
  const configSent = {
    backgroundImage: '/exampleImageWeWontResolve.png',
    css: ''
  }
  // Save the config we recieved.
  const recievedConfig = decorateConfig(configSent)
  // We expect this config to be recieved.
  const expectedConfig = {
    backgroundImage: '/exampleImageWeWontResolve.png',
    backgroundColor: 'transparent',
    css: `
      
      .hyper_main {
        background: url(file:///exampleImageWeWontResolve.png) center;
        background-size: cover;
      }
      .terms_terms {
        background-color: transparent;
      }
    `
  }
  // We expect that..
  assert.deepEqual(recievedConfig, expectedConfig)
})

// It should decorate config properly when some CSS is passed.
test('it returns expected configuration with some custom CSS', (t) => {
  // Declare the config we must send for reference.
  const configSent = {
    backgroundImage: '/exampleImageWeWontResolve.png',
    css: 'body { background: url(file:///exampleImageWeWontResolve.png) center; }'
  }
  // Save the config we recieved.
  const recievedConfig = decorateConfig(configSent)
  // We expect this config to be recieved.
  const expectedConfig = {
    backgroundImage: '/exampleImageWeWontResolve.png',
    backgroundColor: 'transparent',
    css: `
      body { background: url(file:///exampleImageWeWontResolve.png) center; }
      .hyper_main {
        background: url(file:///exampleImageWeWontResolve.png) center;
        background-size: cover;
      }
      .terms_terms {
        background-color: transparent;
      }
    `
  }
  // We expect that..
  assert.deepEqual(recievedConfig, expectedConfig)
})
