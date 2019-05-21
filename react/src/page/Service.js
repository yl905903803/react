import React from 'react';
import "../assets/css/Service.css"
import Cell from '../components/Cell';
import axios from "axios";

export default class Service extends React.Component{
    state={
      cells:[]
    }
  render(){
    return (
      <div className="Service">
        
       <Cell  {...this.props} cells={this.state.cells} dataName="service"/>

      </div>
    )
  }
  async componentDidMount(){

    let resHome = await axios({url:'/mock/service',params:{_limit:10}});
    this.setState({cells:resHome.data.page_data})
     
  }

}
