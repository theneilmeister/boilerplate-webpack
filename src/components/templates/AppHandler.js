var StyleSheet = require('react-style');
var React = require('react');
var Router = require('react-router');
var { RouteHandler } = Router;
var css = {};
var images = {};


var AppHandler = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    render: function() {
        return (
            <div styles={[css.container]}>
                <RouteHandler location={this.props.location} />
            </div>
        );

    }

});

css = StyleSheet.create({
    
    container: {
        position: 'relative',
        width: '100%',
        height: '100%'
    }
    
});


module.exports = AppHandler;
