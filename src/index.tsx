import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { store } from './store';
import { Provider } from 'react-redux';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './styles/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
