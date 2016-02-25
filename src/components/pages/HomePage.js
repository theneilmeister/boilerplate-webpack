import React from 'react'
import {Link} from 'react-router'
import StyleSheet from 'react-style'
import $ from 'jquery'
import marked from 'marked'


const HomePage = React.createClass({

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
				<h1>boilerplate-webpack</h1>
                <p>A simple webpack boilerplate with hot loading and ES6</p>
                <br />
                <Link to="readme">ReadMe</Link>
			</div>
		)
  	}

})


export default HomePage