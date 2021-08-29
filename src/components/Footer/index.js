/** @format */

import React from 'react';
import './Footer.css';
import FooterMenu from '../FooterMenu';
import FooterCategory from '../FooterCategory';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';

export default function Footer() {
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
						<li id='footer--facebook' className='footer--socialItem'>
							<FacebookIcon style={{fontSize: "50px"}} />
						</li>
						<li className='footer--socialItem'>
							<InstagramIcon style={{fontSize: "50px"}} />
						</li>
                        <li className='footer--socialItem'>
                            <YouTubeIcon style={{fontSize: "50px"}} />
                        </li>
					</ul>
				</div>
			</div>
		</div>
	);
}
