/** @format */

import './GeneralCSS.css';
import './Search.css';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import Find from '../components/Find';

function Search() {
	return (
		<div >
			<Header />
			<h2>Console</h2>
			<div className='search--body'>
				
					<Filter />
				
				
					<Find />
				
			</div>
			<Footer />
		</div>
	);
}

export default Search;
