import React from "react";
import '../assets/css/Login.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
export default class Detail extends React.Component{
	state={
		username:'',
		password:'',
	
	  }
	  changeIpt = (ev) => {
		this.setState({
		  [ev.target.name]:ev.target.value
		})
	  }
	  submit = async () => {
		let res = await axios({
		  url:'/mock/login',
		  params:{
			username:this.state.username,
			password:this.state.password
		  }
		});
	
		// console.log(res)
		if (res.data.error===0){
		  //写入local && 跳转user
		  localStorage.setItem('rc_user',JSON.stringify(res.data.page_data))
		  this.props.history.push('/user')
		} else {
		  alert('失败')
		}
	  }
    render(){
        return (
            <div className="login">
                <div className="log_banner">
                </div>
                <form>
    		<div className="yhmm">
    			<label className="label1"></label><input type="text"  name="username" value={this.state.username} onChange={this.changeIpt} placeholder="请输入手机号"/> 
    		</div>
    		<div className="yhmm">
    			<label className="label2"></label><input type="text" name="password" value={this.state.password} onChange={this.changeIpt} placeholder="请输入密码"/> 
    		</div>
    		<div className="wj">
                <Link className="wjmm" to="/reg">忘记密码？</Link>
    		</div>
    		<div className="dl">
    			<a className="tjan" onClick={this.submit}>登录</a>
    		</div>
    		<div className="qx">
    			<Link className="tjan" to="/reg">注册</Link>
    		</div>
    	</form>
            </div>
        )
    }
}