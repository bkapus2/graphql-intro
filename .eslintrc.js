module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "mocha": true,
  },
  "extends": "eslint:recommended",
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "windows"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-unused-vars" : [
      "error", 
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false
      }
    ],
    "comma-style": [
      "error",
      "last",
    ],
    "comma-dangle": [
      "error", {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "never",
      }
    ],
    "no-console": "error",
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2017,
  },
};