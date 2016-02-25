import React from 'react'

import {Router, 
		Route, 
		IndexRoute, 
		Redirect, 
		Link, 
		IndexLink, 
		hashHistory, 
		browserHistory,
		DefaultRoute} from 'react-router'

import AppHandler from './components/templates/AppHandler'
import HomePage from './components/pages/HomePage'
import ReadMe from './components/pages/ReadMe'


React.render((
	<Router history={browserHistory}>



		<Route path="/" component={AppHandler}>

			<IndexRedirect to="home" />
			<Route path="home" component={HomePage} />
			<Route path="readme" component={ReadMe} />

		</Route>



	</Router>
), document.body)