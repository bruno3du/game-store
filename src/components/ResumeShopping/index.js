/** @format */

import React from 'react';
import './ResumeShopping.css';

export default function ResumeShopping() {
	return (
		<div className='RS-body'>
			<div className='RS-title'>Resumo</div>
			<div className='RS-elements'>
				<div className='RS-description'>Valor dos Produtos:</div>
				<div className='RS-value'>R$ 10.000,00</div>
			</div>
            <div className='RS-elements'>
				<div className='RS-description'>Frete</div>
				<div className='RS-value'>R$ 10,00</div>
			</div>
            <hr id="RS-line" />
            <div id="RS-totalField" className='RS-elements'>
				<div className='RS-description'>Total</div>
				<div className='RS-value'>R$ 60,00</div>
			</div>
            <button id="RS-BuyButton" className='RS-btn'>FINALIZAR COMPRA</button>
            <button id="RS-ContinueButton" className='RS-btn'>CONTINUAR COMPRANDO</button>
		</div>
	);
}
