import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import MainPage from './pages/main';
import Ticket from './pages/ticket';
import SharesPage from "./pages/sharesPage";
import BondsPage from "./pages/bondsPage";
import IndexPage from "./pages/indexPage";

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"
import {createBrowserHistory} from 'history'


const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/shares/" component={SharesPage}/>
        <Route exact path="/bonds/" component={BondsPage}/>
        <Route exact path="/index/" component={IndexPage}/>
        <Route path="/shares/:ticket" component={Ticket}/>
        {/* то что ниже - надо исправить */}
        <Route path="/bonds/:ticket" component={Ticket}/>
        <Route path="/index/:ticket" component={Ticket}/>
      </Switch>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

