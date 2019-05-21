import React from "react";
// import {Link, Route} from 'react-router-dom'
import "../assets/css/Product.css"
import axios from "axios";


export default class Product extends React.Component{

	state={
		lists:[]
	}

    render(){
        return (
            <div className="Product">
               <ul className="pro_list clearfix">
            	{
					this.state.lists.map(item=>(
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
	async componentDidMount(){

		let resProduct = await axios({url:'/mock/product',params:{_limit:10}});
		this.setState({lists:resProduct.data.page_data})
		
	}
}

   