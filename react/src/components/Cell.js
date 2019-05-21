import React,{Component} from "react";

import '../assets/css/Cell.css'
import {Link} from 'react-router-dom'

class Cell extends Component {
  render() {
		let {cells,dataName}= this.props;
		
	
    return (
      <div className="cell">
				{	cells.length!=0 &&(
					cells.map(item => (
						<Link key={item.id} to={{pathname:"/detail/"+item.id,search:"?dataName="+dataName}}  className="cell-list">
						<img src={item.icon}/>
						<div>
			    	 		<h3>{item.id}.{item.title}</h3>
			    			<p className="service_time">服务时间:<span>30分钟</span></p>
			    			<p className="service_price">服务价格:<span>60元</span></p>
			     	</div>
						</Link>
					))
				)
				}
      </div>
    );
  }
}

			    	
export default Cell;