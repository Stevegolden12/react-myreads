import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Search from './components/Search';
import * as serviceWorker from './serviceWorker';
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const routing = (
  <Router history={history}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/search" component={Search} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
