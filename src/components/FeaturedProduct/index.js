/** @format */

import React, { useEffect, useState } from 'react';
import './FeaturedProduct.css';
import BoxList from '../BoxList';
// import { productsApi } from '../../Api';
import axios from 'axios';

const productsApi = 'http://localhost:3004/products';

export default function FeaturedProduct() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios.get(productsApi).then((res) => {
			setProducts(res.data);
		});
	}, []);

	return (
		<div className='featured'>
			{console.log(products)}
			{products.map(x => x.id)}
			<h2>Novos Produtos</h2>
			<BoxList />
		</div>
	);
}
