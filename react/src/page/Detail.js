import React from "react";
import "../assets/css/Detail.css";
import axios from 'axios';
import querystring from 'query-string'
import propTypes from "prop-types";
import {action1} from "../store/action";
import connect from "react-redux/es/connect/connect";

 class Detail extends React.Component{
    

      
    render(){
        let data = this.props.data;
        return (
            <div className="Detail">
                <div className="nav">
          <ul>
            <li className="l-btn" onClick={()=>this.props.history.go(-1)}></li>
          </ul>
          </div>
          {
                     data.title && (
                <div className="content">         
              <li className="bgwhite">
	    		  	<img src={data.icon}/>
	    		  	<div>
	    		  		<h3>{data.id}.{data.title}</h3>
	    		  		<p className="service_time">服务时间:<span>60分钟</span></p>
	    		  		<p className="service_price">服务价格:<span>￥60元</span></p>
	    		  	</div>                     
	    	   </li>
                 <div className="cont">
                 <div className="text-box" dangerouslySetInnerHTML={{__html:data.detail.content}}></div>
               </div> 
               </div>      
                     )}
            </div>
        )
    }
     componentDidMount(){
        let id = this.props.match.params.id;
        let dataName = querystring.parse(this.props.location.search).dataName;
        this.props.get({url:`/mock/${dataName}/${id}`,params:{limit:10},typename: 'UPDATE_DETAIL'})
      }
}

const initMapStateToProps=state=>({
  data:state.detail,
});

const initMapDispatchToProps=dispatch=>({
  get:({url,params,typename})=>dispatch(action1({
    dispatch,url,params,typename
  }))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Detail)