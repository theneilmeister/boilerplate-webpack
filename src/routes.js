var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute } = Router;

var AppHandler = require('./components/templates/AppHandler');
var HomePage = require('./components/pages/HomePage');

var path = history.pushState ? '/' : '';

var routes = (
    <Route path={path} handler={AppHandler}>

		<DefaultRoute name="homepage" handler={HomePage} />
		
    </Route>
);

module.exports = routes;
