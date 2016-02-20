var StyleSheet = require('react-style');
var React = require('react');
var Router = require('react-router');
var marked = require('marked');
var $ = require('jquery');
var css = {};
var images = {};


var HomePage = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    handlePageChange: function () {
        this.context.router.transitionTo('/homepage');
    },

    componentDidMount: function () {

         $('.homepage').load('./README.md', function (response, status, xhr) {

             switch (status) {
                 case 'success': this[0].innerHTML = marked(response); break;
                 default: this[0].innerHTML = 'Unable to load file';
             }

         });

    },

    render: function() {
        return (
            <div className="homepage" styles={[css.container]}>
                <p>Loading README.md...</p>
            </div>
        );
    }

});


css = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%'
    }
    
});


module.exports = HomePage;
