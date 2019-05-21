import React from 'react';
import "../assets/css/Service.css";
import Cell from "../components/Cell"
import axios from 'axios';


export default class Hservice extends React.Component{
  state={
    cells:[]
  }

  render(){
    return (
      <div className="Hservice">
        <Cell  {...this.props} cells={this.state.cells} dataName="home"/>

      </div>
    )
  }
  async componentDidMount(){

    let resService = await axios({url:'/mock/service',params:{_limit:6}});
    this.setState({cells:resService.data.page_data})
     
  }
}
