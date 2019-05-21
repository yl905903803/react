import React from "react";
import '../assets/css/User.css'
export default class User extends React.Component{
    render(){
        return (
            <div className="user">
               <div className="my_top">
	    	        <a href="#"className="my_top-a"><img/></a>
	    	        <ul>
	    	            <li>您好,<span>Tora</span></li>
	    	             <li>当前积分：<span>0</span>
                             <a href="javascript:;"  className="zx" onClick={()=>{
                            localStorage.removeItem('rc_user');this.props.history.push('/home')}}>注销</a></li>
	    	        </ul>
	            </div>
                <ul className="my_list">
                <li><a>购物车</a></li>
                <li><a>商品订单</a></li>
                <li><a>服务订单</a></li>
                <li><a>地址管理</a></li>
                <li><a>消费记录</a></li>
                <li className="hide"><a>积分商城</a></li>
                <li><a>修改密码</a></li>
                <li><a>关于我们</a></li>               
                <li className="bgwhite"><a href="tel:15807197602">热线电话：15807197602</a></li>
            </ul>
            </div>
        )
    }
}