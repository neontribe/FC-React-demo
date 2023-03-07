import {useEffect, useState} from "react";
import {
  LOGIN_STATE_ERRORED,
  LOGIN_STATE_LOADING,
  LOGIN_STATE_LOGGED_IN,
  LOGIN_STATE_LOGGED_OUT,
  WHO_AM_I_ROUTE
} from "./config";
import { useCookies } from 'react-cookie';


export const Home = () => {
  const [whoami, setWhoAmi] = useState({})
  const [loginState, setLoginState] = useState(LOGIN_STATE_LOADING)
  const [cookies, setCookie] = useCookies(['bcAppSession']);

  useEffect(() => {
    /*
                headers={
                    "Authorization": f"Bearer {token}",
                    "user-agent": None,
                },
     */
    console.log(cookies.bcAppSession)
    setLoginState(LOGIN_STATE_LOADING)
    fetch(WHO_AM_I_ROUTE).then(response => {
      if (response.status === 200) {
        setLoginState(LOGIN_STATE_LOGGED_IN)
        // response.json().then(json => setWhoAmi(json))
        setWhoAmi(response.json())
      }
      else if (response.status === 401) {
        setLoginState(LOGIN_STATE_LOGGED_OUT)
      }
      else {
        setLoginState(LOGIN_STATE_ERRORED)
      }
    })
  }, [whoami])

  if (loginState === LOGIN_STATE_LOGGED_IN) {
    return (<div>
      You are Logged in!
      { whoami }
    </div>)
  } else if (loginState === LOGIN_STATE_LOGGED_OUT) {
    return (<div>Logged out</div>)
  } else { // (loginState === LOGIN_STATE_LOADING)
    return (<div>Checking logged in state</div>)
  }
}
