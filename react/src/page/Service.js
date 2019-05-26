import React from 'react';
import "../assets/css/Service.css"
import Cell from '../components/Cell';
import axios from "axios";
import {action1} from "../store/action";
import connect from "react-redux/es/connect/connect"
 class Service extends React.Component{
    
  render(){
    return (
      <div className="Service">
        
       <Cell  {...this.props} cells={this.props.service} dataName="service"/>

      </div>
    )
  }
   componentDidMount(){

    this.props.get({url:'/mock/service',params:{_limit:10},typename:'UPDATE_SERVICE'});
    // this.setState({cells:resHome.data.page_data})
     
  }

}
const initMapStateToProps=state=>({
  service:state.service,
});

const initMapDispatchToProps=dispatch=>({
  get:({url,params,typename})=>dispatch(action1({
    dispatch,url,params,typename
  }))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Service)
