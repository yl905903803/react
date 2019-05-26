import React from "react";
// import {Link, Route} from 'react-router-dom'
import "../assets/css/Product.css"
import axios from "axios";
import pubsub from 'pubsub-js';
import {action1} from "../store/action";
import connect from "react-redux/es/connect/connect"

 class Product extends React.Component{

	
    render(){
        return (
            <div className="Product">
               <ul className="pro_list clearfix">
            	{
					this.props.product.map(item=>(
						<li key={item.id}>
						<a>
							<div className="product-img">
            				<img src={item.banner}/>
            				
            			</div>
            			<p>售价：<span>100元</span></p>

						</a>
						</li>
					))
				}
	        </ul>

            </div>
        )
	}
 componentDidMount(){
	
	this.props.get({url:'/mock/product',params:{_limit:10},typename:'UPDATE_PRODUCT'});

	}
}

const initMapStateToProps=state=>({
	product:state.product,
  });
  
  const initMapDispatchToProps=dispatch=>({
	get:({url,params,typename})=>dispatch(action1({
	  dispatch,url,params,typename
	}))
  });
  
  export default connect(
	initMapStateToProps,
	initMapDispatchToProps
  )(Product)

   