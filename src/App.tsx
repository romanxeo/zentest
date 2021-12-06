import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import s from './App.module.css';
import Header from './components/header/Header';
import ShowUsers from './components/showUsers/ShowUsers';
import Sidebar from './components/sidebar/Sidebar';
import {showUsersTC} from "./store/zenReducer";
import {useDispatch} from "react-redux";
import CreateUsers from "./components/createUser/CreateUser";
import GetUser from "./components/getUser/GetUser";

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(showUsersTC())
    }, [dispatch])


    return (
        <div>
            <Header/>
            <div className={s.container}>
                <Sidebar/>
                <Switch>
                    <Route path={'/show_users'} render={() => <ShowUsers/>}/>
                    <Route path={'/create_user'} render={() => <CreateUsers/>}/>
                    <Route path={'/get_user'} render={() => <GetUser/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
