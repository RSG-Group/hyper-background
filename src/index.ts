// Type out how we expect our configuration recieved to be ¯\_(ツ)_/¯
interface ExpectedConfig { // eslint-disable-line no-undef
  backgroundImage: string; // eslint-disable-line no-undef
  css: string; // eslint-disable-line no-undef
}

// Okay, enough TypeScript. Let's add that background image.
exports.decorateConfig = (config: ExpectedConfig) => {
  // Duplicate the config instead of mutating the config passed as an argument.
  const duplicateConfig = JSON.parse(JSON.stringify(config));
  // Add our custom background CSS.
  // If it isn't empty, then add to existing CSS.
  if (config.css !== "") {
    duplicateConfig.css += `\nbody { background: url(file://${config.backgroundImage}) center; }`;
  } else {
    // Else, reassign it to our own CSS.
    duplicateConfig.css = `body { background: url(file://${config.backgroundImage}) center; }`;
  }
  // Return our new config.
  return duplicateConfig;
};

// Export our `exports` for testing because ¯\_(ツ)_/¯
module.exports = exports;
