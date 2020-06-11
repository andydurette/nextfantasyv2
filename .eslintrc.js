module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"node": true,
		"jest": true
	},
	"extends": ["eslint:recommended",'plugin:react/recommended'],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaVersion": 2018,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true,
			"modules": true
		}
	},
	"settings": {
    "react": {
      "version": "latest"
    }
  },
	"rules": {
		"react/react-in-jsx-scope": "off",
		"react/jsx-no-undef": "off",
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	}
};