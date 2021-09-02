/** @format */

import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


export default function Negado() {
	const login = useSelector(state => state.login)
	const history = useHistory()
	const location = useLocation()

	useEffect(()=>{
		let {from} = location.state || { from: {pathname: "/"}}
		if(login) {
			history.replace(from)
		}
		// eslint-disable-next-line
	},[login])

	return (
		<div>
			<Header />
			<div style={{display: "flex", justifyContent:"center", alignItems: "center", width: "100%", height: "100vh", background: "#121212"}}>
				<p>Você Precisar Realizar seu login para acessar ao carrinho  </p>
			<p>	<Link to="/">Acessa Página Inicial</Link></p>
			</div>
			<Footer />
		</div>
	);
}
