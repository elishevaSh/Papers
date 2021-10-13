import React, { useState, useEffect, useCallback } from 'react'
import { Route, Redirect } from 'react-router-dom';
import HeaderLeader from '@leadercodes/header'
import keys from '../config/env/keys';

function redirectToLogin(routes) {
  window.location.href = routes ?
    `${keys.LOGIN_URL}?routes=${routes}` :
    `${keys.LOGIN_URL}`;
  return null
}




const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const routes = rest.computedMatch.params.paperName;
  const userName = rest.computedMatch.params.userName;
  const isLocal = window.location.hostname === "localhost";
  useEffect(() => {
    const isPermission = async () => {
      let response = await fetch(`https://papers.dev.leader.codes/${userName}/isPermission?isLocal=${isLocal}`, {
        method: 'GET',
        headers: {
          Authorization: user,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      })
      if (response.status === 401) {
        setIsLoading(false)
        setIsLoggedIn(true)
      }
      else {
        setIsLoading(false)

      }
    }

    isPermission()
  }, [])

  return isLoading ? null : isLoggedIn ?
    redirectToLogin(routes)
    :
    <>
    
      {/* <div style={{position:"absolute",right:0,zIndex:9999}}>
        <HeaderLeader appName='papers' userName={userName}/>
      </div> */}
      <Route {...rest} render={props => {
        return <>

          <Component {...rest} {...props} />
        </>
      }} /></>

}
export default ProtectedRoute
