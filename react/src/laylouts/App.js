import React from 'react'
import { NavLink,Link,Route,Redirect,Switch} from 'react-router-dom';
import Home from "../page/Home";
import Product from "../page/Product";
import User from "../page/User";
import Login from "../page/Login";
import Service from "../page/Service";
import Reg from "../page/Reg";
import '../assets/css/App.css';
import Error from "../page/Error";
import Detail from '../page/Detail';
import Header from "./Header";
import Footer from "./Footer";
import AuthRoute from "../guard/Auth";


export default class App extends React.Component{
    render(){
        return (
            <div className="app">
                <Header/>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/service" component={Service}/>
                    <Route path="/product" component={Product}/>
                    <Route path="/login" component={Login}/>
                    <AuthRoute path="/user" component={User}/>
                    <Route path="/reg" component={Reg}/>
                    <Route path="/detail/:id" component={Detail}/>
                    <Redirect exact from ="/" to="/home"/>
                    <Route  component={Error}/>
                </Switch>
                <Footer/>
            </div>
        )
    }

}