module.exports = {
  // quais presets do babel vamos utilizar.
  presets: [
    /**
     * esse altera as funcionalidades do JS para o navegador entender como:
     * import, export, arrow functions, classes e etc.
     */
    "@babel/preset-env",
    /**
     * esse altera as funcionalidades do React para o navegador entender como:
     * jsx e etc.
     */
    "@babel/preset-react",
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
  ]
};