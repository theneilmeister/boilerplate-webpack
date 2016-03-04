import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'
import marked from 'marked'


const HomePage = React.createClass({

    contextTypes: {
        // router: React.PropTypes.func
    },

    handlePageChange: function () {
        // this.context.router.transitionTo('/homepage');
    },

    loadReadme: function () {

         // $('.readme-container').load('./README.md', function (response, status, xhr) {

         //     switch (status) {
         //         case 'success': this[0].innerHTML = marked(response); break;
         //         default: this[0].innerHTML = '<p>Unable to load file</p>';
         //     }

         // });

    },
	
	render () {
		return (
			<div className="readme-container">
				<h1>boilerplate-webpack</h1>
                <p>A simple webpack boilerplate with hot loading and ES6</p>
                <br />
                <Link to="about">About Page</Link>
			</div>
		)
  	}

})


export default HomePage