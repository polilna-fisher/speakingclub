import "./App.sass";
import Layout from "./components/layout/layout";
import { BrowserRouter as Router } from "react-router-dom";
import LoginForm from "./components/loginForm/loginForm";
import {FC, useEffect, useState} from "react";
import {userActions, userSlice} from "./redux/userSlice";
import {useAppDispatch, useAppSelector} from "./redux/store";
import {authActions} from "./redux/authSlice";

const App:FC = () => {
    const dispatch = useAppDispatch()

    const user = useAppSelector((state) => state.user.user);
    const accessToken = useAppSelector((state) => state.auth.accessToken);
    const isLoading = useAppSelector((state) => state.user.isLoading);
    const isError = useAppSelector((state) => state.user.isError);

    useEffect(() => {
        if(!!accessToken) {
            dispatch(userActions.getMe())
        }
    }, [accessToken] )

  return (
    <div className="App">
        <Router>
            {/*<Layout />*/}
            {
                isLoading ? `loading` :
                    <h1>{!!accessToken ? `User has authorised + ${user?.email}` : `Please, authorise`}</h1>
            }


            {!!accessToken ? <button onClick={() => dispatch(authActions.logout())}>Logout</button> : <LoginForm/>}
        </Router>
    </div>
  );
}

export default App;
