/** @format */

import React from 'react';
import Product from './pages/Product';
import HomePage from './pages/HomePage';
import Search from './pages/Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApiProvider } from './contextAPI';
import Carrinho from './pages/Carrinho';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducerLogin from './reducers/reducerLogin';
import PrivateRoute from './PrivateRoute';
import Negado from './Negado';
import BuyProductReducer from './reducers/BuyProductReducer';

const allreducers = combineReducers({
	login: reducerLogin,
	buyproduct: BuyProductReducer,
});

const store = createStore(allreducers);

function App() {
	return (
		<Provider store={store}>
			<ApiProvider>
				<Router>
					<Switch>
						<Route path='/search/' component={Search} />
						<Route path='/product/:id' component={Product} />
						<Route exact path='/' component={HomePage} />
						<PrivateRoute path='/carrinho/'>
							<Carrinho />
						</PrivateRoute>
						<Route path='/negado' component={Negado} />
						<Route path='*'>
							<div
								style={{
									fontSize: '80px',
									display: 'flex',
									justifyContent: 'center',
									height: '100vh',
									alignItems: 'center',
								}}>
								Está Página não existe
							</div>
						</Route>
					</Switch>
				</Router>
			</ApiProvider>
		</Provider>
	);
}

export default App;
