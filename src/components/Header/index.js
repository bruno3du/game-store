/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Cart from '../../image/cart-icon.svg';
import Search from '../../image/search.svg';
import AuthButton from '../AuthBottom/Index';


const menus = [
	{
		id: 'home',
		title: 'Início',
		link: '/',
	},
	{
		id: 'catConsole',
		title: 'Console',
		link: '/search',
	},
	{
		id: 'catComputer',
		title: 'Computador',
		link: '/search',
	},
	{
		id: 'catAces',
		title: 'Acessórios',
		link: '/search',
	},
	{
		id: 'catRating',
		title: 'Popular',
		link: '/search',
	},
];

export default function Header() {
	


	return (
		<header>
			<div className='header-login'>
				<AuthButton />
			</div>

			<div className='header--top'>
				<div className='logo'>
					<Link to='/'>Logo</Link>
				</div>
				<div className='header--features'>
					<input
						className='header--input'
						type='text'
						name='seach'
						placeholder='Pesquisa'></input>
					<button className='header--inputButton'>
						<img alt='search' src={Search} />
					</button>
					<Link to='/carrinho'>
						<img alt='cart' className='header--cart' src={Cart} />
					</Link>
				</div>
			</div>
			<nav>
				<ul className='menus'>
					{menus.map((menu) => {
						return (
							<Link to={menu.link}>
								<li id={menu.id} key={menu.id} className='menu'>
									{menu.title}
								</li>
							</Link>
						);
					})}
					<Link to='/search'>
						<li className='menu menu1'>Lançamento</li>
					</Link>
				</ul>
			</nav>
		</header>
	);
}
