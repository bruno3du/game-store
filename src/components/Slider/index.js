/** @format */

import './Slider.css';
import React from 'react';
import ArrowBack from '../../image/arrow-backward.svg';
import ArrowForward from '../../image/arrow-forward.svg';

export default function Slider() {
	return (
		<div>
			<div className='slider'>
                <div className="slider-show">
                    <div className="slider-items"></div>
                </div>
				<div className="slider--arrows">
					<img
						className='slider--arrowBack'
						alt='Arrow-backward'
						src={ArrowBack}
					/>
					<img
						className='slider--arrowForward'
						alt='Arrow-forward'
						src={ArrowForward}
					/>
				</div>
			</div>
		</div>
	);
}
