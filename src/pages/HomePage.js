/** @format */

import './GeneralCSS.css';
import Header from '../components/Header';
import Slider from '../components/Slider';
import FeaturedProduct from '../components/FeaturedProduct';
import Footer from '../components/Footer';

function HomePage() {
	return (
		<div>
			<Header />
			<Slider />
			<FeaturedProduct />
			<Footer />
		</div>
	);
}

export default HomePage;
