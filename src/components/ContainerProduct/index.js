/** @format */

import React from 'react';
import './ContainerProduct.css';
import { KeyboardArrowLeft } from '@material-ui/icons';
import { KeyboardArrowRight } from '@material-ui/icons';



export default function ContainerProduct(props) {
	
	return (
		<div className='CP--container'>
			<div>
				<img alt='imagem' src='/assets/fifa-18.png' />
			</div>
			<div className="CP--TitleAndCat">
				<div className='CP--title'>{props.product.name}</div>
				<div className='CP--category'>{props.product.category}</div>
			</div>
			<div>
				<div className='CP--QuantTitle'>Quant.</div>
				<div className='CP--QuantField'>
					<div className='CP--QuantNumberAndArrows'>
						<KeyboardArrowLeft />
						<div className='CP--QuantNumber'>
							<input type='number' value='1' />
						</div>
						<KeyboardArrowRight />
					</div>
					<div className='terceiro'>
						<div className='CP--QuantRemove'>REMOVER</div>
					</div>
				</div>
			</div>
			<div className='CP--Price'>12x R$ 169,59 <br />(À prazo: R$ {props.product.price})</div>
			<div className='CP--Boleto'>R$ 1.729,90 <br /> (À vista no Boleto)</div>
		</div>
	);
}
