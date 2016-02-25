import React from 'react'
import StyleSheet from 'react-style'
import $ from 'jquery'
import marked from 'marked'

var css, images = {};


var ReadMe = React.createClass({

    contextTypes: {
        // router: React.PropTypes.func
    },

    handlePageChange: function () {
        // this.context.router.transitionTo('/homepage');
    },

    componentDidMount: function () {

         $('.readme-container').load('./README.md', function (response, status, xhr) {

             switch (status) {
                 case 'success': this[0].innerHTML = marked(response); break;
                 default: this[0].innerHTML = '<p>Unable to load file</p>';
             }

         });

    },
	
	render () {
		return (
			<div className="readme-container">
				<p>Loading README.md</p>
			</div>
		)
  	}

})


export default ReadMe