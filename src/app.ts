import Backbone = require('backbone');


class AppRouter extends Backbone.Router {

    constructor(options?: Backbone.RouterOptions) {

    	super(options);

	    this.routes = {
	    	"": "defaultRoute",
            "test": "testRoute"
        }

    	Backbone.Router.apply(this, arguments);

    }

    initialize() {
        // can put more init code here to run after constructor
        console.log('AppRouter initialised..');
    }

    defaultRoute() {
    	console.debug('default route hit');
    }

    testRoute() {
    	console.debug('test route hit');
    }

}


var app_router = new AppRouter();


Backbone.history.start();
