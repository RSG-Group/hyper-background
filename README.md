# hyper-background

[![dependencies Status](https://david-dm.org/RSG-Group/hyper-background/status.svg?style=flat-square)](https://david-dm.org/RSG-Group/hyper-background) [![devDependencies Status](https://david-dm.org/RSG-Group/hyper-background/dev-status.svg?style=flat-square)](https://david-dm.org/RSG-Group/hyper-background?type=dev)

:milky_way: Change the background of your Hyper terminal! Technically the only plugin and the only easy way to do this :stuck_out_tongue_closed_eyes:

Fun fact: `hyper-background` was boilerplated and written in 2 hours. And it worked perfectly the first time.

NOTE: This is a proof of concept right now and doesn't have a lot of features other than changing the background (yet).
More features can be expected to arrive soon, as I wish to make this better.

## Installation

***Windows currently unsupported. Only a matter of time until I get to it because hey, this was written in 30 minutes or something.***

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
    // font stuff
    fontSize: 14,
    fontFamily: 'Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    // cursor stuff
    cursorColor: '#EBCB8B',
    cursorShape: 'BLOCK',
    cursorBlink: true,
    // color stuff
    foregroundColor: '#fff',
    backgroundColor: '#000',
    borderColor: '#333',
    // It doesn't matter if your CSS property is populated, hyper-background can handle this.
    css: '',
    termCSS: '',
    // window and color stuff
    showHamburgerMenu: true,
    showWindowControls: '',
    padding: '12px 14px',
    colors: {
      ...
    },
    // shell stuff
    shell: '/bin/bash',
    shellArgs: ['--login'],
    env: {},
    // behaviour stuff
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
    // font stuff
    fontSize: 14,
    fontFamily: 'Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    // cursor stuff
    cursorColor: '#EBCB8B',
    cursorShape: 'BLOCK',
    cursorBlink: true,
    // color stuff
    foregroundColor: '#fff',
    backgroundColor: '#000',
    borderColor: '#333',
    // css stuff
    css: '',
    termCSS: '',
    // window and color stuff
    showHamburgerMenu: true,
    showWindowControls: '',
    padding: '12px 14px',
    colors: {
      ...
    },
    // shell stuff
    shell: '/bin/zsh',
    shellArgs: ['--login'],
    env: {},
    // behaviour stuff
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
