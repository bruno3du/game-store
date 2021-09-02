/** @format */

import React, { useState } from 'react';
import './ShowContentPriceProduct.css';
import StarIcon from '@material-ui/icons/Star';
import { KeyboardArrowLeft as ArrowLeft } from '@material-ui/icons';
import { KeyboardArrowRight as ArrowRight } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { AddToCart } from '../../actions/BuyProductAction';
import { useHistory } from 'react-router-dom';

export default function ShowContentPriceProduct(props) {
	const[quant, setQuant] = useState(1);
	const history = useHistory()

	if(quant < 1) {
		setQuant(1)
	}

	function calcBoleto() {
		let calc = Number((parseInt(props.product.price) * 0.05).toFixed(2));
		return props.product.price - calc;
	}

	async function handleAddToCard() {
			dispatch(AddToCart(props.product.id, quant));
			history.push('/carrinho')
	}

	const dispatch = useDispatch();

	return (
		<div className='ShowContentPriceProduct'>
			<div className='ShowContentPriceProduct--info'>
				<h3>{props.product.name}</h3>
				<span className='Show-Category'>para {props.product.category}</span>
				<div className='ShowContentPriceProduct--rating'>
					<span>Avaliação</span>
					<StarIcon />
				</div>
			</div>
			<div className='ShowContentPriceProduct--priceDatas'>
				<div className='ShowFieldOne'>
					<div className='Show--price'>R$ {props.product.price}</div>
					<div className='Show--parcelar'>
						Em até 6x de R$ {(props.product.price / 6).toFixed(2)} sem juros no
						cartão
					</div>
					<div className='Show--OptionPrice'>R$ {calcBoleto()}</div>
					<div className='Show--OptionPriceContent'>
						Em 1x no cartão ou boleto
					</div>
					<div className='Show--Amount'>
						<span>Quantidade: </span>
						<span className='Show--Amount-Arrow'>
							<ArrowLeft
								onClick={() => {
									setQuant(quant - 1)
								}}
							/>
							<input
								className='Show--Input Show--Amount-Input'
								type='number'
								value={quant}
							/>
							<ArrowRight
								onClick={() => {
									setQuant(quant + 1);
								}}
							/>
						</span>
					</div>
					<div className='Show-FreteContent'>Consultar Frete:</div>
					<div className='Show-FreteInput'>
						<form>
							<input
								className='Show--Input'
								number='8'
								type='number'
								placeholder='Insira seu CEP'
							/>
							<button className='Show--FreteButton'>Consultar</button>
						</form>
					</div>
				</div>
				<div className='ShowFieldTwo'>
				<button onClick={handleAddToCard} className='Show-btn Show--buy'>Comprar</button>
					<button
						onClick={() => {
							dispatch(AddToCart(props.product.id));
						}}
						className='Show-btn Show--AddCard'>
						Adicionar ao Carinho
					</button>
					<div className='Show--warning'>
						Produto adicionado <br />
						ao carrinho com sucesso!
					</div>
					<div className='Show--announcement'>
						O frete é <strong>grátis</strong> para compras <br />
						acima de <strong>R$ 250,00.</strong>
					</div>
				</div>
			</div>
		</div>
	);
}
