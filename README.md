# hyper-background

[![dependencies Status](https://david-dm.org/RSG-Group/hyper-background/status.svg?style=flat-square)](https://david-dm.org/RSG-Group/hyper-background) [![devDependencies Status](https://david-dm.org/RSG-Group/hyper-background/dev-status.svg?style=flat-square)](https://david-dm.org/RSG-Group/hyper-background?type=dev)

:milky_way: Change the background of your Hyper terminal! Technically the first plugin and the whole and sole easy way to do this :stuck_out_tongue_closed_eyes:

Fun fact: We boilerplated and wrote `hyper-background` in 2 hours. And it worked perfectly the first time.

NOTE: This is a proof of concept right now and doesn't have a lot of features other than changing the background (yet).
We expect more features to arrive soon, as I wish to make this better.

***Supports Windows, macOS and Linux. [If you have any issues, report them at the repository's issue tracker.](https://github.com/RSG-Group/hyper-background/issues)***

## Installation

### Manually

Edit `.hyper.js` and add `"hyper-background"` to the `plugins` array which should be near the end of your file.

### Using hpm-cli

If you have hpm-cli installed, run

```zsh
hpm install hyper-background
```

## Usage

In your `.hyper.js` file, which probably looks something like this at this point:

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

***The recommended Node version required in development is Node 8. while the target Node version is 7. Node 6 is the absolute necessity and will work, but we are not targeting it as Hyper uses Node 7.4 internally.***

- Run tests via `npm test`
- You can bundle the plugin via `npm run build`
