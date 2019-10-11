yarn create react-app nomeDoProjeto

remover o eslintConfig do package.json

limpar os arquivos index, app.css... e serviceworker

EditorConfig

yarn add eslint -D <br />
yarn eslint --init <br />
remover o package.lock e rodar yarn novamente <br />

yarn add -D prettier eslint-config-prettier eslint-plugin-prettier babel-eslint <br />
configurar arquivo .eslintrc <br />
add no extends prettier e prettier/react <br />
add parser: 'babel-eslint' antes do parserOptions <br />
add prettier nos plugins <br />
sobreescrever as regras do airbnb: <br />
rules: {
  'prettier/prettier': 'error',
  'react/jsx-filename-extension': [
    'warn',
    { extensions: ['.jsx', '.js'] }
  ],
  'import/prefer-default-export': 'off'
},

yarn add eslint-plugin-react-hooks -D <br />
add 'react-hooks' aos plugins <br />
add rules: <br />
'react-hooks/rules-of-hooks': 'error',
'react-hooks/exhaustive-deps': 'warn',

criar o arquivo .prettierrc com o singlequote e o trailingcomma es5

yarn add react-router-dom //lidar com rotas na SPA

yarn add history //history api do navegador <br/>
criar o service de history e export no history <br/>
importar o service history e Router do react-router-dom no App e substituir o BrowserRouter por router, passando o history como parametro <br/>
importar o service history no sagas e utilizar o history.push('/suaRotaAqui');

.....
yarn add customize-cra react-app-rewired -D <br/>
//Para adicionar configuracoes ao create-react-app
//o react-app-rewired carrega o arquivo config-overrides.js e adicionar plugins/dependencias ao create react-app

yarn add babel-plugin-root-import -D  <br/>
//add a possiblidade de importar arquivos direto da raiz, sem os ../../../
usamos o customize-cra e o rewired para consiguir adicioná-los ao projeto create react-app <br />
no arquivo config-overrrides: <br />
const { addBabelPlugin, override } = require('customize-cra');
module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ]),
);

substituir o react-scripts por react-app-rewired nos scrips de start, build e tests do package.json

yarn add eslint-import-resolver-babel-plugin-root-import -D <br />
//Para resolver o problema do eslint com o ~ <br/>
configurar o eslint: <br/>
settings: {
  'import/resolver': {
    'babel-plugin-root-import': {
      rootPathSuffix: 'src'
    }
  }
}

criar o arquivo jsconfig.json com o conteúdo abaixo para sinalizar ao vsconde o ~/src e poder usar o CMD-Click nos arquivos importados com o ~ <br />
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "~/*": ["*"]
    }
  }
}
......


yarn add prop-types

yarn add styled-components //lidar com estilos

yarn add polished // lida com cores no css - escure/clarea variacoes das suas cores principais

yarn add @rocketseat/unform

yarn add yup //validacoes tanto no front quanto no backend

yarn add redux react-redux redux-saga reactotron-redux reactotron-redux-saga immer

    yarn add redux react-redux // add api de estado redux - arquitetura flux

    yarn add reactotron-react-js reactotron-redux

    yarn add immer //lidar com as alteracoes no estado do redux de forma facil, atraves de um rascunho

    yarn add redux-saga

    yarn add reactotron-redux-saga


yarn add axios // lidar com requisicoes http - melhor que o fetch do browser

yarn add redux-persist //persistir dados em bancos locais - no localStorage por exemplo <br/>
//Veja mais no arquivo src/store/persistReducers.js

yarn add react-toastity //alertas tipo toast

http://avatars.adorable.io //para gerar avatars aleatorios - defina o tamanho e o border-radios e copie o link

yarn add react-icons //vários pacotes de icones

yarn add react-perfect-scrollbar

yarn add date-fns //Funcoes de datas - melhor que moment <br />
yarn add data-fns-tz //Funcoes de datas para lidar com timezone



@@@@@@@ NOPE @@@@@@@

yarn global add json-server //fake api atraves de arquivo JSON - criar o arquivo server.json <br />
json-server server.json -p 3333 -w //roda o jsonserver servindo o arquivo server.json na porta 3333 e fica ouvindo o arquivo (-w --watch)
