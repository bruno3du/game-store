/** @format */

import React from 'react';
import './BoxList.css';
import { Link } from 'react-router-dom';

export default function BoxList(props) {
	const product = props.products

	
	return (
		<div id={product.id} key={product.id} style={{width: props.width,
			backgroundSize: props.imageLarge,
			height: props.height ? props.height : "40px",
			backgroundImage: `url(/assets/${product.image})`
			}} className='boxlist'>

			<div className='boxlist--featured'>
				<div className='boxlist--left'>
					<div className='boxlist--title'>{product.name.length > 18 ? product.name.substring(0, 18) + "..." : product.name}</div>
					<div className='boxlist--category'>{product.category}</div>
				</div>
				<div style={{fontSize: props.fontSizePrice ? props.fontSizePrice : "40px"}} className='boxlist--price'>{product.price}</div>
				<div className='boxlist--learnMore'>
					<Link to={`/product/${product.id}`}>VEJA MAIS</Link>
				</div>
			</div>
		</div>
	);
}
