/** @format */

import './GeneralCSS.css';
import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import Find from '../components/Find';
import { ContextApi } from '../contextAPI';


function Search() {
	const products = useContext(ContextApi);
	
	return (
		<div className="background">
			<Header />
			<h2>Console</h2>
			<div className='search--body' style={{display: 'flex'}}>
				<Filter />
				{products && <Find products={products} />}
			</div>
			<Footer />
		</div>
	);
}

export default Search;
