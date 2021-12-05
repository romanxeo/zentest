import React, {useEffect} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import s from './App.module.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
import ShowUsers from './components/showUsers/ShowUsers';
import Sidebar from './components/sidebar/Sidebar';
import {showUsersTC} from "./store/zenReducer";
import {useDispatch} from "react-redux";

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(showUsersTC())
    }, [])

/*
    useEffect(() => {
        fetch('https://zentesting.herokuapp.com/show_users/')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [])
*/

    return (
        <div>
            <Header/>
            <div className={s.container}>
                <Sidebar/>
                <Switch>
                    <Route path={'/show_users'} render={() => <ShowUsers/>}/>
                    <Route path={'/create_user'} render={() => <Content/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
