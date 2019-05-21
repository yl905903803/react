import React from "react";
import "../assets/css/Detail.css";
import axios from 'axios';
import querystring from 'query-string'


export default class Detail extends React.Component{
    state={
        data:{}
      }
    render(){
        let data = this.state.data;
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
    async componentDidMount(){
        let id = this.props.match.params.id;
        let dataName = querystring.parse(this.props.location.search).dataName;
        let res = await axios({url:`/mock/${dataName}/${id}`});
        this.setState({data:res.data.page_data})
      }
}