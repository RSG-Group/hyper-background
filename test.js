/* eslint-env ava */
// Import Ava.
import test from "ava";
// Import index.ts for testing.
import plugin from "./lib/index";

// It should decorate config properly when empty CSS is passed.
test("it returns expected configuration on empty CSS", (t) => {
  // Declare the config we must send for reference.
  const configSent = {
    backgroundImage: "/exampleImageWeWontResolve.png",
    css: "",
  };
  // Save the config we recieved.
  const recievedConfig = plugin.decorateConfig(configSent);
  // We expect this config to be recieved.
  const expectedConfig = {
    backgroundImage: "/exampleImageWeWontResolve.png",
    // We expect a newline as index.js was slightly optimized after speed complaints (from me).
    // This will have no issues on the plugin's operation.
    css: "\nbody { background: url(file:///exampleImageWeWontResolve.png) center; }",
  };
  // We expect that..
  t.deepEqual(recievedConfig, expectedConfig);
});

// It should decorate config properly when some CSS is passed.
test("it returns expected configuration on empty CSS", (t) => {
  // Declare the config we must send for reference.
  const configSent = {
    backgroundImage: "/exampleImageWeWontResolve.png",
    css: "body { background: url(file:///exampleImageWeWontResolve.png) center; }",
  };
  // Save the config we recieved.
  const recievedConfig = plugin.decorateConfig(configSent);
  // We expect this config to be recieved.
  const expectedConfig = {
    backgroundImage: "/exampleImageWeWontResolve.png",
    css: "body { background: url(file:///exampleImageWeWontResolve.png) center; }\nbody { background: url(file:///exampleImageWeWontResolve.png) center; }",
  };
  // We expect that..
  t.deepEqual(recievedConfig, expectedConfig);
});
