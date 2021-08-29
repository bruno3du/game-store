import React from 'react';
import './Header.css';
import Cart from '../../image/cart-icon.svg';
import Search from '../../image/search.svg'

const menus = [
	{
		title: 'Início',
		link: 'http://localhost:3000',
	},
	{
		title: 'Console',
		link: 'http://localhost:3000',
	},
	{
		title: 'Computador',
		link: 'http://localhost:3000',
	},
	{
		title: 'Acessórios',
		link: 'http://localhost:3000',
	},
	{
		title: 'Popular',
		link: 'http://localhost:3000',
	},
];

export default function Header() {
	return (
		<header>
			<div className='header--top'>
				<div className='logo'>Logo</div>
				<div className='header--features'>
					<input
						className='header--input'
						type='text'
						name='seach'
						placeholder='Pesquisa'></input>
					<button className='header--inputButton'>
						<img alt="search" src={Search}/>
					</button>
                    <img alt="cart" className="header--cart" src={Cart} />
				</div>
			</div>
			<nav>
				<ul className='menus'>
					{menus.map((menu) => {
						return (
							<a href={menu.link}>
								<li className='menu'>{menu.title}</li>
							</a>
						);
					})}
					<a href='http://localhost:3000'>
						<li className='menu menu1'>Lançamento</li>
					</a>
				</ul>
			</nav>
		</header>
	);
}