# NPM Module Boilerplate (ESM and CommonJS)

This boilerplate provides a foundational setup for creating npm modules that support both ECMAScript Modules (ESM) and CommonJS (CJS) formats. It includes a build script for generating `dist/cjs` and `dist/mjs` folders and is configured with Jest for comprehensive testing.

## Features

- **Dual Format Support**: Build your npm modules in both ESM and CJS formats to ensure compatibility with various node versions and environments.
- **Jest Integration**: Comes pre-configured with Jest for unit testing your modules, making it easier to maintain high-quality code.
- **Easy to Use Build Scripts**: Utilize predefined scripts to generate distribution folders, simplifying the build process.

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your system to use this boilerplate. You can download it from [Node.js website](https://nodejs.org/).

### Installation

Clone this repository to get started with your module development:

```bash
git clone <repository-url>
cd <repository-directory>
```

#### Install dependencies:

```
npm install
```

#### Building Your Module

To compile your module into ESM and CJS formats, use the provided build script:

```
npm run build
```

This will generate dist/cjs and dist/mjs folders, containing the CommonJS and ESM versions of your module, respectively.

#### Testing Your Module

To run unit tests written with Jest, execute:

```
npm test
```

Ensure your tests are located in the tests directory for Jest to automatically detect and run them.

### Usage

After building your module, you can include it in your projects as follows:

For ESM:

```
import myModule from 'path/to/dist/mjs/myModule.mjs';
```

For CommonJS:

```
const myModule = require('path/to/dist/cjs/myModule.cjs');
```

#### Credit

This boilerplate is based on DeepSense who came up with this hybrid approach.

### Contributing

Contributions are welcome and greatly appreciated.

### License

This project is licensed under the MIT License

Contact
Fahim Chowdhury - fahim.chowdhury1985@gmail.com
