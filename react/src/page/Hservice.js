import React from 'react';
import "../assets/css/Service.css";
import Cell from "../components/Cell"
import axios from 'axios';
import {action1} from "../store/action";
import connect from "react-redux/es/connect/connect";


 class Hservice extends React.Component{

  render(){
    return (
      <div className="Hservice">
        <Cell  {...this.props} cells={this.props.hservice} dataName="home"/>

      </div>
    )
  }
  componentDidMount(){

    this.props.get({url:'/mock/home',params:{_limit:3},typename:'UPDATE_HSERVICE'});

     
  }

}
const initMapStateToProps=state=>({
  hservice:state.hservice,
});

const initMapDispatchToProps=dispatch=>({
  get:({url,params,typename})=>dispatch(action1({
    dispatch,url,params,typename
  }))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Hservice)