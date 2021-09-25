// Import path if we need to resolve relative paths.
import { resolve, isAbsolute } from 'path'
import { homedir } from 'os'

// Let's add that background image.
exports.decorateConfig = (
  config: { backgroundImage: string, css: string, backgroundColor: string }
) => {
  // Check if the background path is absolute.
  const backgroundPath = isAbsolute(config.backgroundImage)
    // If it is absolute, then set it to the value, else resolve it correctly.
    ? config.backgroundImage
    : resolve(homedir(), config.backgroundImage)
  // Assign the old config and our customizations to a new object and return it.
  return Object.assign({}, config, {
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
