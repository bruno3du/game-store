/** @format */

import React, { useContext } from 'react';
import './FeaturedProduct.css';
import BoxList from '../BoxList';
import { ContextApi } from '../../contextAPI';
import { useMediaQuery, useTheme } from '@material-ui/core';

export default function FeaturedProduct() {
	const theme = useTheme();
	const breaksm = useMediaQuery(theme.breakpoints.down('sm'));
	const breakmd = useMediaQuery(theme.breakpoints.down('md'));
	let sizeWidth = '400px';
	let imageLarge = '280px';
	let height = '320px';
	let fontSize = '30px';

	if (breakmd) {
		sizeWidth = '250px';
		imageLarge = '180px';
		height = '250px';
		fontSize = '20px';
	} else if (breaksm) {
		sizeWidth = '150';
		imageLarge = '120px';
		height = '150px';
		fontSize = '35px';
	}

	const products = useContext(ContextApi);

	return (
		<div className='featuredProduct'>
			<h2>Novos Produtos</h2>
			<div className='featuredProduct--List'>
				{products.map((item) => (
					<BoxList
						products={item}
						width={sizeWidth}
						imageLarge={imageLarge}
						height={height}
						fontSizePrice={fontSize}
					/>
				))}
			</div>
		</div>
	);
}
