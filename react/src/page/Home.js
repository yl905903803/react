import React from "react";
import Swiper from "../components/Swiper";
import "../assets/css/Home.css";
import {NavLink,Link,Route} from "react-router-dom";
import Baike from "./Baike";
import Hservice from "./Hservice";
import Hospital from "./Hospital"
import axios from "axios";


export default class Home extends React.Component{
  
    render(){
        return (
            <div className="Home">
                    <Swiper/>
                    <ul className="nine_grid">
                    <li>
                        <Link to="/product">
                            <img className="Img"/>
                            <p>洗澡</p>
                         </Link>
                    </li>
                    <li>
                         <Link to="/product">
                            <img className="Img"/>
                            <p>洗澡</p>
                         </Link>
                    </li>
                    <li>
                         <Link to="/product">
                            <img className="Img"/>
                            <p>洗澡</p>
                         </Link>
                    </li>
                    <li>
                        <Link to="/product">
                            <img className="Img"/>
                            <p>洗澡</p>
                         </Link>
                    </li>
                    <li>
                        <Link to="/product">
                            <img className="Img"/>
                            <p>洗澡</p>
                         </Link>
                    </li>
                    <li>
                         <Link to="/product">
                            <img className="Img"/>
                            <p>洗澡</p>
                         </Link>
                    </li>
                    <li>
                         <Link to="/product">
                            <img className="Img"/>
                            <p>洗澡</p>
                         </Link>
                    </li>
                    <li>
                        <Link to="/product">
                            <img className="Img"/>
                            <p>洗澡</p>
                         </Link>
                    </li>
                </ul>
                <ul className="tabs1">
                    <li>
                        <NavLink to="/home/hservice" activeClassName="app-nav-active">宠物服务</NavLink>
                    </li>
                    <li>
                        <NavLink to="/home/hospital" activeClassName="app-nav-active">宠物医院</NavLink>
                    </li>
                    <li>
                        <NavLink to="/home/baike" activeClassName="app-nav-active">宠物百科</NavLink>
                    </li>
	    	    </ul>
                

                <Route path="/home/hservice" component={Hservice}/>
                <Route path="/home/hospital" component={Hospital}/>
                <Route path="/home/baike" component={Baike}/>

            </div>
        )
    }
   
}