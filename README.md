# hyper-background

:milky_way: Change the background of your hyper terminal!

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

Tip: Make hyper-background the first plugin in your plugins list for optimal performance (it won't disrupt the speed of other plugins due to its performant and small size).

Technically the first plugin and the whole and sole easy way to do this :stuck_out_tongue_closed_eyes: Fun fact: We boilerplated and wrote `hyper-background` in 2 hours. And it worked the first time.

NOTE: This plugin is small, which might cause it to seem unmaintained. If you see the plugin seem so, I assure you that this plugin is actively maintained and if you wish to propose a new feature, report an issue or you are submitting a PR, don't hesitate to do so. If you face issues, read the FAQ.

***Supports Windows, macOS and Linux. [If you have any issues, report them at the repository's issue tracker.](https://github.com/RSG-Group/hyper-background/issues)***

## Installation

### Using hyper's CLI

Run the following command in your Hyper terminal:

```zsh
hyper i hyper-background
```

### Manually

Edit `.hyper.js` and add `"hyper-background"` to the `plugins` array in the beginning (preferably) which should be near the end of your file.

### Using hpm-cli

If you have hpm-cli installed, run

```zsh
hpm install hyper-background
```

## FAQ

**How should I specify the path?**

Either you can provide an absolute path such as `/path/to/image.png` or a relative path from your home directory which hyper-background will resolve automatically.

**Does this support Hyper 2 and newer versions?**

Yep. If you're still on Hyper 1.x or older for some reason (???), use version 1.5.1 of this plugin.

## Example of a customized terminal

[![Screenshot_from_2017-08-07_13-50-38.png](https://i.postimg.cc/KzkVL4LS/Screenshot-from-2017-08-07-13-50-38.png)](https://postimg.cc/1nSJ1mJJ)

## Usage

In your `.hyper.js` file, which probably looks something like this at this point (note that Hyper v4+ will use JSON files for configuration instead of JS):

```javascript
module.exports = {
  config: {
    // font config
    fontSize: 14,
    fontFamily: 'Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    // cursor config
    cursorColor: '#EBCB8B',
    cursorShape: 'BLOCK',
    cursorBlink: true,
    // color config
    foregroundColor: '#fff',
    backgroundColor: '#000',
    borderColor: '#333',
    // hyper-background can handle any value of the CSS key, whether populated manually or populated by a plugin, and will not overwrite it.
    css: '',
    termCSS: '',
    // window and color config
    showHamburgerMenu: true,
    showWindowControls: '',
    padding: '12px 14px',
    colors: {
      ...
    },
    // shell config
    shell: '/bin/bash',
    shellArgs: ['--login'],
    env: {},
    // behaviour config
    bell: false,
    copyOnSelect: false,
  },
  plugins: [
    "hyper-background"
  ]
};
```

You will need to add the path to your selected background in the `config` object as `backgroundImage` after which your `.hyper.js` should look like:

```javascript
module.exports = {
  config: {
    // font config
    fontSize: 14,
    fontFamily: 'Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    // cursor config
    cursorColor: '#EBCB8B',
    cursorShape: 'BLOCK',
    cursorBlink: true,
    // color config
    foregroundColor: '#fff',
    backgroundColor: '#000',
    borderColor: '#333',
    // css config
    css: '',
    termCSS: '',
    // window and color config
    showHamburgerMenu: true,
    showWindowControls: '',
    padding: '12px 14px',
    colors: {
      ...
    },
    // shell config
    shell: '/bin/zsh',
    shellArgs: ['--login'],
    env: {},
    // behaviour config
    bell: false,
    copyOnSelect: false,

    // Here lies our background image.
    backgroundImage: "/path/to/your/image"
  },
  plugins: [
    "hyper-background"
  ]
};
```

After this, you should have your background image ready to go!

## Development

***The recommended Node version required in development is Node 12+ at the time of writing. This is likely out of date when you read this, so use the latest version of Node.js available. The plugin itself works on versions as old as Node.js 6, but this is irrelevant.***

- Run tests via `yarn test`
- You can bundle the plugin via `yarn build`
