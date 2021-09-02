/** @format */

import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/index';
import ContainerProduct from '../components/ContainerProduct/index';
import './Carrinho.css';
import FieldAddressCupom from '../components/FieldAddressCupom';
import ResumeShopping from '../components/ResumeShopping';
import DeleteIcon from '@material-ui/icons/Delete';
import { useContext } from 'react';
import { ContextApi } from '../contextAPI';
import { useSelector } from 'react-redux';

export default function Carrinho() {
	const selected = useSelector(state => state.buyproduct)
	const products = useContext(ContextApi);
	const [product, setProduct] = useState([]);	

	useEffect(() => {

		let res = products.filter((product) => product.id === selected.id);
		
		setProduct(res);
	}, [products]);

	return (
		<div>
			<Header />
			<div className='Cart-body'>
				<div className='Cart-products'>
					<button className='Cart-DeleteAll'>
						<DeleteIcon />
						<span className="Cart-DeleteText">REMOVER TUDO</span>
					</button>
					{product && <ContainerProduct product={product}/>}
					<div className='Cart-DatasAndResume'>
						<FieldAddressCupom />
						<ResumeShopping />
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
