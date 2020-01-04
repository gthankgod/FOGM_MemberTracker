import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import Login from './components/Login';
import Register from './components/Register';
import err from './components/layouts/err';
import store from './store';
import Dashboard from './components/Dashboard/Dashboard';
import Members from './components/Members';
import Alerts from './components/layouts/Alerts';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Alerts />
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/members" component={Members} />
            <Route component={err} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
