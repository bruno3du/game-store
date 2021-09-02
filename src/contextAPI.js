/** @format */

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ContextApi = createContext();

export function ApiProvider(props) {

	const productsApi = 'http://localhost:3004/products/';

	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios.get(productsApi).then((res) => {
			setProducts(res.data);
		});
	}, []);

	return (
		<ContextApi.Provider value={products}>{props.children}</ContextApi.Provider>
	);
}
