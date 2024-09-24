import "./App.sass";
import Layout from "./components/layout/layout";
import { BrowserRouter as Router } from "react-router-dom";
import LoginForm from "./components/loginForm/loginForm";
import {FC, useContext, useEffect, useState} from "react";
import {checkAuth} from "./utils/authFunctions";
import {userActions, userSlice} from "./redux/userSlice";
import userService from "../server/service/userService";
import store, {useAppDispatch, useAppSelector} from "./redux/store";
import {getUserInfo} from "./redux/saga";

const App:FC = () => {

    useEffect(() => {
        getUserInfo()
    }, [] )

    const user = useAppSelector((state) => state.user.user);
    const isAuth = useAppSelector((state) => state.user.isAuth);
    const isLoading = useAppSelector((state) => state.user.isLoading);
    const isError = useAppSelector((state) => state.user.isError);
    console.log(user, isAuth, 'uuuuuuuuuuuuuuuuu')

  return (
    <div className="App">
      <Router>
        {/*<Layout />*/}
          {
              isLoading ? `loading` : <h1>{isAuth ? `User has authorised + ${user?.email}` : `Please, authorise`}</h1>

          }

          <LoginForm/>
      </Router>
    </div>
  );
}

export default App;
