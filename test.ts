/* eslint-env jest */
// Import index.ts for testing.
const testFile = require("./src/index");

// It should decorate config properly when empty CSS is passed.
test("it returns expected configuration on empty CSS", () => {
  // Declare the config we must send for reference.
  const configSent = {
    backgroundImage: "/exampleImageWeWontResolve.png",
    css: "",
  };
  // Save the config we recieved.
  const recievedConfig = testFile.decorateConfig(configSent);
  // We expect this config to be recieved.
  const expectedConfig = {
    backgroundImage: "/exampleImageWeWontResolve.png",
    css: "body { background: url(file:///exampleImageWeWontResolve.png) center; }",
  };
  // We expect..
  expect(recievedConfig).toMatchObject(expectedConfig);
});

// It should decorate config properly when some CSS is passed.
test("it returns expected configuration on empty CSS", () => {
  // Declare the config we must send for reference.
  const configSent = {
    backgroundImage: "/exampleImageWeWontResolve.png",
    css: "body { background: url(file:///exampleImageWeWontResolve.png) center; }",
  };
  // Save the config we recieved.
  const recievedConfig = testFile.decorateConfig(configSent);
  // We expect this config to be recieved.
  const expectedConfig = {
    backgroundImage: "/exampleImageWeWontResolve.png",
    css: "body { background: url(file:///exampleImageWeWontResolve.png) center; }\nbody { background: url(file:///exampleImageWeWontResolve.png) center; }",
  };
  // We expect..
  expect(recievedConfig).toMatchObject(expectedConfig);
});
