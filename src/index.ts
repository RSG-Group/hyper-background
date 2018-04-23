// Import path if we need to resolve relative paths.
import { resolve, isAbsolute } from 'path'

// Type out how we expect our configuration recieved to be ¯\_(ツ)_/¯
/* eslint-disable no-undef */
interface ExpectedConfig {
  backgroundImage: string;
  css: string;
  backgroundColor: string;
} /* eslint-enable no-undef */

// Okay, enough TypeScript. Let's add that background image.
export const decorateConfig = (config: ExpectedConfig) => {
  // Check if config.backgroundImage is absolute, else resolve it.
  let backgroundImage // Which will soon be the absolute path to the image.
  // If path is absolute, then continue.
  if (isAbsolute(config.backgroundImage)) backgroundImage = config.backgroundImage
  // If path is not absolute then, resolve, assign and then continue.
  else backgroundImage = resolve(config.backgroundImage)

  /* Add our custom background CSS. Don't reassign CSS to avoid replacing any existing CSS.
  We have added a newline for readability in case someone opens the inspector in Hyper. */
  config.css += `.terms_terms { background: url(file://${backgroundImage}) center; background-size: cover; } .header_header { background: black }`
  config.backgroundColor = 'transparent'

  // Return our mutated config.
  return config
}
