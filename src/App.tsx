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
import About from "./components/about/About";
import UpdateUser from "./components/updateUser/UpdateUser";

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
                    <Route path={'/about_us'} render={() => <About/>}/>
                    <Route path={'/update_user/:id'} render={() => <UpdateUser/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
