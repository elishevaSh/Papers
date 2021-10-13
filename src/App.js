import React, { useEffect, useState } from 'react';
import './App.css';
import Warp from './Components/wrap';
import ListPapers from './Components/listPapers';
import { TokenToString } from './Redux/Middleware/serverData'
import ProtectedRoute from './Components/protectedRoute.js';
import View from './Components/viewNewOnePage';
import { createBrowserHistory } from 'history'
import store from './Redux/Store';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { actions } from './Redux/Action';
import HeaderLeader from '@leadercodes/header'


export const history = createBrowserHistory()
const mapStateToProps = (state) => {
  return {
    managerComponent: state.managerComponent.managerComponent,
    quote: state.quote.quote,
  };
}

const mapDispatchToProps = (dispatch) => ({
  setHaveChangesBeenMade: (bool) => dispatch(actions.setHaveChangesBeenMade(bool)),
  setFirstEntry: (bool) => dispatch(actions.setFirstEntry(bool)),
})


export default connect(mapStateToProps, mapDispatchToProps)(function App(props) {
  var url = window.location;
  const userName = (url.pathname.split('/')[1]) === "admin" ? (url.pathname.split('/')[2]) : (url.pathname.split('/')[1]);




  return (
    <>

      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <ProtectedRoute path={"/admin/:userName/add"} user={TokenToString} component={ListPapers} />
            <ProtectedRoute path={"/admin/:userName/:paperName"} user={TokenToString} component={Warp} />
            <ProtectedRoute path={"/admin/:userName"} user={TokenToString} component={ListPapers} />
            <ProtectedRoute path={"/admin/:userName/new"} user={TokenToString} component={ListPapers} />
            <Route path={"/:userName/:paperName"} component={View} />

          </Switch>
        </Router>
      </Provider>
    </>
  );
}
)