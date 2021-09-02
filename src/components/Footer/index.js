/** @format */

import React from 'react';
import './Footer.css';
import FooterMenu from '../FooterMenu';
import FooterCategory from '../FooterCategory';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useMediaQuery, useTheme } from '@material-ui/core';

export default function Footer() {
	const theme = useTheme();
	const breaksm = useMediaQuery(theme.breakpoints.down('sm'));
	const breakmd = useMediaQuery(theme.breakpoints.down('md'));
	let size = '50px';

	function breakpoint() {
		if (breakmd) {
			size = '30px';
		} else if (breaksm) {
			size = '20px';
		}
	}

	breakpoint();
	return (
		<div className='footer'>
			<FooterMenu />
			<div className='footer--container'>
				<div className='footer--category'>
					<FooterCategory />
					<FooterCategory />
					<FooterCategory />
					<FooterCategory />
				</div>
				<div className='footer--social'>
					<ul>
						<li className='footer--socialItem'>
							<FacebookIcon style={{ fontSize: size, color: '#3B5998' }} />
						</li>
						<li className='footer--socialItem'>
							<InstagramIcon style={{ fontSize: size }} />
						</li>
						<li className='footer--socialItem'>
							<YouTubeIcon style={{ fontSize: size, color: '#A00707' }} />
						</li>
					</ul>
				</div>
				<div className='footer--rights'>Todos os direitos são reservados</div>
			</div>
		</div>
	);
}
