// Type out how we expect our configuration recieved to be ¯\_(ツ)_/¯
interface ExpectedConfig { // eslint-disable-line no-undef
  backgroundImage: string; // eslint-disable-line no-undef
  css: string; // eslint-disable-line no-undef
}

// Okay, enough TypeScript. Let's add that background image.
exports.decorateConfig = (config: ExpectedConfig) => {
  // Duplicate the config instead of mutating the config passed as an argument.
  const duplicateConfig = config;
  /* Add our custom background CSS. Don't reassign CSS to avoid replacing any existing CSS.
  We have added a newline for readability in case someone opens the inspector in Hyper. */
  duplicateConfig.css += `\nbody { background: url(file://${config.backgroundImage}) center; }`;
  // Return our new config.
  return duplicateConfig;
};

// Export our `exports` for testing because ¯\_(ツ)_/¯
module.exports = exports;
