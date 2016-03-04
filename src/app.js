import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import AppHandler from './components/templates/AppHandler'
import NoMatch from './components/pages/404'
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'


render((
  <Router history={browserHistory}>
    <Route path="/" component={AppHandler}>
      
		<IndexRoute component={HomePage} />
		<Route path="about" component={AboutPage} />

		<Route path="*" component={NoMatch}/>
      
    </Route>
  </Router>
), document.getElementById('app'))
