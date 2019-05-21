import React from "react";
import "../assets/css/Footer.css";
import {Link} from "react-router-dom";


export default class Footer extends React.Component{

    render(){
        return (
            <div className="Footer">
                <ul>
                    <li>
                        <Link to="/home">
                            <div className="myhome"/><h4>宠尚门</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/product">
                            <div className="product"/><h4>商品</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/service">
                            <div className="service"/><h4>服务</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/user">   
                            <div className="my"/><h4>个人中心</h4>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }


}