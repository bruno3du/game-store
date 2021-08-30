/** @format */

import React from 'react';
import './Filter.css';
import Collapse from '../Collapse';

function Filter() {
	return (
		<div className='filter'>
			<div className='filter--title'>Filtrar por</div>
			<div className='filter--searchBy'>
				<Collapse
					title={'Categoria'}
					items={[
						{ item: 'Console' },
						{ item: 'Computador' },
						{ item: 'Acessórios' },
						{ item: 'Celular' },
					]}
				/>
				<Collapse
					title={'Popularidade'}
					items={[{ item: 'Mais Populares' }, { item: 'Menos Populares' }]}
				/>
				<Collapse
					title={'Preço'}
					items={[{ item: 'Mais baratos' }, { item: 'Mais caros' }]}
				/>
				<Collapse
					title={'Ordem Alfabética'}
					items={[{ item: 'Ordem crescente' }, { item: 'Ordem descrescente' }]}
				/>
			</div>
		</div>
	);
}

export default Filter;
