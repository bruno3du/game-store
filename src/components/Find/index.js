/** @format */

import React from 'react';
import './Find.css';
import BoxList from '../BoxList';
import { useMediaQuery, useTheme } from '@material-ui/core';

export default function Find(props) {
	const theme = useTheme();
	const breaksm = useMediaQuery(theme.breakpoints.down('sm'));
	const breakmd = useMediaQuery(theme.breakpoints.down('md'));
	let sizeWidth = '323px';
	let imageLarge = '200px'
	let height = '284px'
	let fontSize = '30px'

	function breakpoint() {

		if (breakmd) {
			sizeWidth = "220px"
			imageLarge = '150px'
			height = "220px"
			fontSize = '22px'
		} else if (breaksm) {
			sizeWidth = "120px"
			imageLarge = '100px'
			height = '120px'
			fontSize = '16px'
		}
	}
	
	breakpoint();
	return (
		<div className='find'>
			<div className='find--body'>
				{props.products.map((item) => {
					return (
						<div key={item.key}>
							<BoxList
								products={item}
								width={sizeWidth}
								imageLarge={imageLarge}
								height={height}
								fontSizePrice={fontSize}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
