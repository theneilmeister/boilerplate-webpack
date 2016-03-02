import Backbone = require('backbone');
import Router = require('./router');


var app_router = new Router.AppRouter();

Backbone.history.start();
