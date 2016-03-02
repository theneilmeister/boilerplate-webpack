import Backbone = require('backbone');
import Routes from './routes';


export class AppRouter extends Backbone.Router {

    constructor(options?: Backbone.RouterOptions) {

    	super(options);

	    this.routes = Routes;

    	Backbone.Router.apply(this, arguments);

    }

    initialize() {
        // can put more init code here to run after constructor
    }

    defaultRoute() {
    	console.debug('default route hit');
    }

    testRoute() {
    	console.debug('test route hit');
    }

}
