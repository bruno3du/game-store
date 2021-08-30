/** @format */

import React from 'react';
import './BoxList.css';


export default function BoxList(props) {
	return (
		<div className='boxlist'>
			<div className='boxlist--featured'>
				<div className='boxlist--left'>
					<div className='boxlist--title'>{props.title}</div>
					<div className='boxlist--category'>{props.category}</div>
				</div>
				<div className='boxlist--price'>{props.price}</div>
				<div className='boxlist--learnMore'><a href={props.link}>VEJA MAIS</a></div>
			</div>
		</div>
	);
}
