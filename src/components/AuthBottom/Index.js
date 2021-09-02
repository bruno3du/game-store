/** @format */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LoginAction, LogoutAction } from '../../actions/ActionLogin';

export default function AuthButton() {
	const login = useSelector((state) => state.login);
	const dispatch = useDispatch();
	

	return login ? (
		<div
			width='30px'
			onClick={() => {
				dispatch(LogoutAction());
			}}>
				Logout
			</div>
			
	) : (
		<div
			width='30px'
			onClick={() => {
				dispatch(LoginAction());
			}}>
				Login
			</div>
	);
}
