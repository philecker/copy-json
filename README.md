# copy-json

A utility function to create a deep copy of a JSON object.

## Installation

You can install the package using npm:

```shell
npm install copy-json
```

## Usage

In your JavaScript file, import the `copyJSON` function and use it to create a deep copy of a JSON object:

```javascript
const copyJSON = require('copy-json');

const originalObj = { name: 'John', age: 25 };
const copiedObj = copyJSON(originalObj);

console.log(originalObj); // { name: 'John', age: 25 }
console.log(copiedObj);   // { name: 'John', age: 25 }
console.log(originalObj === copiedObj); // false (they are separate objects)
```

## API

### `copyJSON(jsonObj)`

Creates a deep copy of a JSON object.

- `jsonObj`: The JSON object to be copied.

Returns a deep copy of the input JSON object.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

Feel free to customize the README file based on your specific needs and additional information about the package. Include any relevant details about the function, usage examples, configuration options, or any other information that might be helpful for users of your package.