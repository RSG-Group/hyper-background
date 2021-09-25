// Import path if we need to resolve relative paths.
const path = require('path')
const os = require('os')

// Let's add that background image.
exports.decorateConfig = config => {
  if (!config.backgroundImage) return
  // Check if the background path is absolute.
  const backgroundPath = path.isAbsolute(config.backgroundImage)
    // If it is absolute, then set it to the value, else resolve it correctly.
    ? config.backgroundImage
    : path.resolve(os.homedir(), config.backgroundImage)
  // Assign the old config and our customizations to a new object and return it.
  return Object.assign(config, {
    // This makes the terminal transparent.
    backgroundColor: 'transparent',
    // Add our custom background CSS. Don't reassign CSS to avoid replacing any existing CSS.
    css: `
      ${config.css || ''}
      .hyper_main {
        background: url(file://${backgroundPath}) center;
        background-size: cover;
      }
      .terms_terms {
        background-color: transparent;
      }
    `
  })
}
