import React, { Component } from 'react';
import { Route, Switch, Router, Redirect } from 'react-router-dom'
import Home from './components/Home'
import { connect } from 'react-redux';
import { history } from './components/helpers/history';
import { alertActions } from './components/actions/alert.actions';
import LoginPage from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { PrivateRoute } from './components/PrivateRoute';
import Cart from './components/Cart'

export class App extends Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }

  render() {
    const { alert } = this.props;

    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            {alert.message &&
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Router history={history}>
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route path="/login" component={LoginPage} />
                <Route path="/cart" component={Cart} />
                <Route path="/register" component={RegisterPage} />
                <Redirect from="*" to="/" />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export default connectedApp;
