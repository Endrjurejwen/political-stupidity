module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "settings": {
          "ecmascript": 6,
          "jsx": true
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "experimentalDecorators": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "extends": ["airbnb", "prettier"],
    "rules": {
      "react/jsx-filename-extension": 0,
      "function-paren-newline": 0,
      "linebreak-style": 0,
      "eol-last": 0,
      "no-shadow": "off",
      'import/no-unresolved': "off",
      "prettier/prettier": "error",
    }
  };