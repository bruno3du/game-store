/** @format */

import React from 'react';
import './BoxList.css';

export default function BoxList() {
	return (
		<div className='boxlist'>
			<div className='boxlist--featured'>
				<div className='boxlist--left'>
					<div className='boxlist--title'>The Witcher</div>
					<div className='boxlist--category'>Categoria</div>
				</div>
				<div className='boxlist--price'>R$ 50,00</div>
				<div className='boxlist--learnMore'>VEJA MAIS</div>
			</div>
		</div>
	);
}
