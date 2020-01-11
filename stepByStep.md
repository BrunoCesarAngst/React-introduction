### 1. Configurando a estrutura

No terminal
```bash
comp:~$ mkdir pasta
comp:~$ cd pasta
comp:~/pasta$ yarn init -y
comp:~/pasta$ code .
```
No terminal do vscode
```bash
comp:~$ yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli -D
comp:~$ yarn add react react-dom -D
comp:~$ yarn add babel-loader -D
```
criar um arquivo babel.config.js

criar um arquivo webpack.config.js

criar uma pasta src que conterá todo o código JS

criar dentro da pasta src o arquivo index.js o arquivo de entrada de nossa aplicação, partindo tudo desse arquivos

criar uma pasta public que conterá o bundle.js com o código transpilado e para isso, configuramos o arquivo webpack.config.js

No package.json criamos a scripts
```js
"scripts": {
    "build": "webpack --mode development"
  },
```
No terminal do vscode
```bash
comp:~$ yarn build # executa o arquivo webpack.config.js e cria o arquivo
                   # bundle na pasta public
```
criar um arquivo index.html editamos e o abrimos para testar
No terminal do vscode
```bash
comp:~$ yarn add webpack-dev-server -D # para rodar a aplicação sempre atualizada
```
criar uma nova propriedade no webpack.config.js, devServer...
No package.json criamos outro script
```js
"scripts": {
    "build": "webpack --mode production" // quando for em produção
    "dev": "webpack-dev-server --mode development"
  },
```
No terminal do vscode
```bash
comp:~$ yarn dev # acessando o localhost fornecido
```
### 2. Criando o componente raiz
por conta do preset-react no arquivo babel.config.js a aplicação ja entende qualquer coisa utilizando código em react

editamos o arquivo index.js da pasta src

criamos um arquivo App.js dentro da pasta src separando o nosso componente principal(raiz)

### 3. Importando CSS
No terminal do vscode
```bash
comp:~$ yarn add style-loader css-loader -D
```
criamos uma nova rules(regra) no webpack.config.js

### 4. Importando imagens
No terminal do vscode
```bash
comp:~$ yarn add file-loader -D
```
criamos uma nova rules(regra) no webpack.config.js

criar uma pasta assets para conter as imagens e importar na aplicação(App.js)

### 5. Class Components
criamos uma pasta Components que contem todos, menos o App.js e dentro um arquivo o nosso segundo componente
podemos criar componentes no formato de funções ou classes, primeiramente vamos utilizar as classes ("por ter sido mais utilizado precisamos compreender, até para dar manutenção nos sistemas existentes"), nesse componente TechList.js, importamos esse arquivo dentro do nosso App
No terminal do vscode
```bash
comp:~$ yarn add @babel/plugin-proposal-class-properties -D
```
e no arquivo babel.config.js alem dos preset teremos os plugins

### 6. Estado e imutabilidade
trabalhando com os objetos state e setState no arquivo TechList.js
todo state é imutável mas a partir do setState que cria um novo estado podemos manipular o array ou objetos criamos uma nova array ou objeto copiando um ou todo o conteúdo e dessa array ou objeto e incluindo em uma posição desejada da array o valor que se está sendo recebido em outra state que recebe esse novo valor

### 7. Removendo itens do estado
trabalhando com os objeto setState no arquivo TechList.js

### 8. Propriedades do React
criando um outro componente com parte de outro componente recebendo as propriedades através da tag do componente importado.
criamos o arquivo TechItem.js na pasta Components

### 9. Default Props & PropTypes
```bash
comp:~$ yarn add prop-types
```
validado as propriedades que o nosso componente recebe para avisar que se está passando uma propriedade de forma incorreta

### 10. Ciclo de vida do componente
são métodos dentro das classes
quando o componente aparece na tela
quando o componente é modificado, alterado
quando o componente deixa de existir

### 11. Debugando React com DevTools

