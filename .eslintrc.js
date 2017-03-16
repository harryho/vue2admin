module.exports = {
  root: true,
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // -------------------------
    "strict": "off",
    "no-trailing-spaces": "off",
    "semi": "off",
    "spaced-comment": "off",
    "indent": "off",
    "jsx-quotes": "off",
    "quotes": "off",
    "no-unused-vars": "off",
    "no-unexpected-multiline": "off",
    "no-lonely-if": "off",
    "no-alert": "off",
    "curly": "off",
    "camelcase": "off",
    "comma-spacing": "off",
    "init-declarations" : "off",
    "block-spacing": "off",
    "func-call-spacing": "off",
    "eqeqeq" : "off",
    "no-multi-str":"off",
    "one-var": "off",
    "space-before-function-paren": "off",
    "operator-linebreak":"off",
    "padded-blocks": "off",
    "object-property-newline": "off",
    "space-before-blocks": "off",
    "no-multiple-empty-lines": "off",
    "brace-style" : "off",
    "comma-dangle": "off",
    "no-tabs" : "off"
  }
}
