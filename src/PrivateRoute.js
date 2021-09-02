/** @format */

import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ children, ...rest }) {

	const login = useSelector((state) => state.login);
	// console.log(login)

	return (
		<Route
			{...rest}
			render={({ location }) => 
				login ? 
					(children)
				 : (
					<Redirect to={{ pathname: '/negado', state: { from: location } }} />
				)
			}></Route>
	);
}
