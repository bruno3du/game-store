/** @format */

import React, { useState, useRef } from 'react';
import './Collapse.css';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

function Collapse(props) {
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef();
	
	return (
		<div className='collapse'>
			<div
				onClick={() => {
					setIsOpen(!isOpen);
				}}
				className='collapse-Category'>
				<div>
					{isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
				</div>
				<div className='collapse-CategoryTitle'>{props.title}</div>
			</div>
			<div
				ref={containerRef}
				style={
					isOpen
						? { height: containerRef.current.scrollHeight + 'px' }
						: { height: '0px' }
				}
				className={
					isOpen ? 'collapse-CategoryList show' : 'collapse-CategoryList'
				}>
				<ul>
					{props.items.map((item) => {
						return <li className='collapse-CategoryItem'>{item.item}</li>;
					})}
				</ul>
			</div>
		</div>
	);
}

export default Collapse;
