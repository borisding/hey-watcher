## Hey! Watcher
[![npm version](https://img.shields.io/npm/v/hey-watcher.svg?style=flat-square)](https://www.npmjs.com/package/hey-watcher)
[![npm downloads](https://img.shields.io/npm/dm/hey-watcher.svg?style=flat-square)](https://www.npmjs.com/package/hey-watcher)

- A Webpack plugin that fixes the multiple times build issue at first start. (eg: writing a new file)

- [Read more](https://github.com/webpack/watchpack/issues/25) about this issue.

## Installation

```
npm install hey-watcher --save
```

## Usage

- In your webpack configuration file, eg `webpack.config.js`

```
const HeyWatcher = require('hey-watcher');

...

plugins: [
  new HeyWatcher() // default `timeFix` is 11000
]

...

```

## License

MIT
