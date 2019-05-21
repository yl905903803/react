import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/Login.css';


export default class Reg extends React.Component{

  render(){
    return (
      <div className="login">
      <div className="log_banner">
      </div>
      <form>
      <div className="yhmm">
      <label className="label1"></label><input type="text" name="phone" placeholder="请输入手机号"/> 
      </div>
      <div className="yhmm">
      <label className="label3"></label>
    			<input type="text" placeholder="请输入验证码"/>
    		<input type="button" value="获取验证码"/>
    	</div>
      <div className="yhmm">
      <label className="label2"></label><input type="text" name="password" placeholder="请输入密码"/> 
      </div>
      <div className="wj">
            <Link className="wjmm" to="/login">已有账号点击登录</Link>
      </div>     
      <div className="qx">
      <Link className="tjan" to="/login">确认</Link>
      </div>
      </form>
  </div>
        
        

      
    )
  }

}
