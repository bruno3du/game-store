/** @format */

import './Product.css';
import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShowImgOnProduct from '../components/ShowImgOnProduct';
import ShowContentPriceProduct from '../components/ShowContentPriceProduct';
import { useParams } from 'react-router-dom';
import { ContextApi } from '../contextAPI';

export default function Product (){
	const products = useContext(ContextApi);
	const [product, setProduct] = useState([]);
	const params = useParams();

	useEffect(() => {
		// eslint-disable-next-line
		let res = products.filter((product) => product.id == params.id)[0];
		setProduct(res);
	}, [params, products]);

	return (
		<div className='product'>
			<Header />
			<div className='product--body'>
				<div className='product--bodyFirst'>
					{product && <ShowImgOnProduct product={product} />}
					{product && <ShowContentPriceProduct product={product} />}
				</div>
				<div className='product--bodySecond'>
					<h3>Descrição do Produto</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
						consectetur ex a velit pretium, at congue dolor vestibulum. Sed
						commodo lacus turpis. Morbi ligula ipsum, ullamcorper vitae lectus
						sit amet, blandit pretium purus. Vivamus sit amet suscipit tortor.
						Ut ac est in metus suscipit pharetra ultrices vitae turpis.
						Vestibulum tristique, ipsum ac ullamcorper fringilla, dolor velit
						tristique orci, id pretium leo metus at lectus. Sed mollis nulla in
						enim egestas maximus. Mauris sit amet hendrerit libero. Ut ut ligula
						sed odio ultrices ullamcorper ac in velit. Donec efficitur vulputate
						justo vel sodales. Pellentesque euismod purus ut mauris
					</p>
					<br />
					<p>
						sollicitudin, porttitor condimentum lectus pellentesque. Nam rhoncus
						velit quis mi faucibus rutrum. Duis blandit lacus eu rhoncus
						iaculis. Pellentesque dolor risus, consequat in tellus in, tempor
						condimentum felis. Aenean interdum a erat at imperdiet. Morbi
						dignissim enim vitae mi dictum fermentum. Lorem ipsum dolor sit
						amet, consectetur adipiscing elit. Etiam consectetur ex a velit
						pretium, at congue dolor vestibulum. Sed commodo lacus turpis. Morbi
						ligula ipsum, ullamcorper vitae lectus sit amet, blandit pretium
						purus. Vivamus sit amet suscipit tortor. Ut ac est in metus suscipit
						pharetra ultrices vitae turpis. Vestibulum tristique, ipsum ac
						ullamcorper fringilla, dolor velit tristique orci, id pretium leo
						metus at lectus. Sed mollis nulla in enim egestas maximus. Mauris
						sit amet hendrerit libero. Ut ut ligula sed odio ultrices
						ullamcorper ac in velit. Donec efficitur vulputate justo vel
						sodales. Pellentesque euismod purus ut mauris sollicitudin,
						porttitor condimentum lectus pellentesque. Nam rhoncus velit quis mi
						faucibus rutrum. Duis blandit lacus eu rhoncus iaculis. Pellentesque
						dolor risus, consequat in tellus in, tempor condimentum felis.
						Aenean interdum a erat at imperdiet. Morbi dignissim enim vitae mi
						dictum fermentum.
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}
