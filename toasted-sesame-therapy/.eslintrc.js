module.exports = {
    "env": {
      "node": true,
      "browser": true,
      "es2021": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "overrides": [
      {
        "env": {
          "node": true
        },
        "files": [
          ".eslintrc.{js,cjs}"
        ],
        "parserOptions": {
          "sourceType": "script"
        }
      }
    ],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "plugins": [
      "react"
    ],
    "rules": {
      // Add specific rule configurations here
      "react/prop-types": "off", // Disable prop-types validation
      "react-hooks/exhaustive-deps": "off", // Disable exhaustive-deps rule
      "react/no-unescaped-entities": "off" // Disable unescaped-entities rule
    }
  };
