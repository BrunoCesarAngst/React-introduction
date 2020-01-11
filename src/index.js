import React from 'react';
// react-dom é a integração do react com o browser(a arvore de elementos DOM)
import { render } from 'react-dom';
// render renderiza um código(componente) 

import App from './App';

// o primero e principal componente da aplicação
render(<App />, document.getElementById('app'));
