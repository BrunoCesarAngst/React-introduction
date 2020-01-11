// para resolver a questão do / ou \ dos SO.
const path = require('path');

module.exports = {
  // a vírgula é substituída conformo o sistema operacional.
  entry: path.resolve(__dirname, 'src', 'index.js'),
  // informamos onde sera colocado o arquivo bundle.js o código transpilado pelo webpack com as funcionalidades que o JS já entende.
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  // criamos uma configuração que contem
  module: {
    // regras
    rules: [
      // o que deve ser usado para determinado tipo de arquivo.
      {
        /**
         * propriedade para encontrar esses arquivos para o babel poder
         * transpilar
         */
        test: /\.js$/,
        // para não transpilarmos novamente esses arquivos
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: [
          // importar arquivos css
          { loader: 'style-loader' },
          // importar arquivos imagens ou outro arquivo css por exemplo
          { loader: 'css-loader' },
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  }
}