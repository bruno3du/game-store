/** @format */

import React from 'react';
import './FieldAddressCupom.css';

export default function FieldAddressCupom() {
	return (
		<div className='FAC-body'>
			<div className='FAC-textYourAddress'>Selecione seu endereço</div>
			<div className='FAC-InputAddressAndButton'>
				<input className='FAC-Input' type="number" placeholder="Insira seu CEP"/>
				<button className='FAC-btn FAC-AddressButton'>Consultar</button>
				<div className='FAC-ForgetAddress'>
					<a href='https://buscacepinter.correios.com.br/app/endereco/index.php' target="blank">Não Lembro meu CEP</a>
				</div>
			</div>
			<div className='FAC-AddressTextShipping'>Frete</div>
			<div className='FAC-DatasShipping'>
				<div className='FAC-SelectAndShippingCompany'>
					<input className='FAC-SelectShipping' type='radio' />
					<div className='FAC-ShippingCompany'>Sedex</div>
				</div>
				<div className='FAC-ShippingPrice'>R$ 10,00</div>
			</div>
			<div className='FAC-textCupom'>Cupom de desconto</div>
			<div className='FAC-DatasCupom'>
				<input className='FAC-Input' type='text' placeholder="Insira seu Cupom" />
				<button className='FAC-btn FAC-ButtonCupom'>Aplicar Cupom</button>
			</div>
		</div>
	);
}
