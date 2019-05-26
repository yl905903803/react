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
import Loading from "../components/Loading";
import {action1} from "../store/action";
import connect from "react-redux/es/connect/connect";

 class App extends React.Component{
  componentWillReceiveProps(nextProps){
    let path = nextProps.location.pathname;
    this.checkRoute(path);
  }
  componentDidMount(){
    let path = this.props.location.pathname;
    this.checkRoute(path);
  }

  checkRoute = (path) => {

    let {viewNav,viewFoot} = this.props;
    if (/home|service|product|user/.test(path)){
      viewNav(true);viewFoot(true);
    }
    if (/login|reg|detail/.test(path)){
      viewNav(false);viewFoot(false);
    }
  
  };

    
     
    render(){
      let {bNav,bFoot,bLoading} = this.props;
        return (
            <>
                {bLoading && <Loading/>}
                {bNav && <Header/>}
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
                {bFoot && <Footer {...this.props} />}

            </>
        )
    }

}

const initMapStateToProps=state=>({
  bNav:state.bNav,
  bFoot:state.bFoot,
  bLoading:state.bLoading,
});

const initMapDispatchToProps=dispatch=>({
  viewNav:(bl)=>dispatch({type:'VIEW_NAV',payload:bl}),
  viewFoot:(bl)=>dispatch({type:'VIEW_FOOT',payload:bl}),
  viewLoading:(bl)=>dispatch({type:'VIEW_LOADING',payload:bl}),
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(App)