/*
	app handler
*/

	// includes
	import $ from 'jquery';
	import marked from 'marked';
	import Button from './Components/Button';
	import './styles.scss';


	function renderReadMe () {

		$('body').load('./README.md', function (response, status, xhr) {

			switch (status) {
				case 'success': this[0].innerHTML = marked(response); break;
				default: this[0].innerHTML = 'Unable to load file';
			}

		});

	}


	function renderMustacheButtonDemo () {

		const button = new Button('Google', 'http://google.com');
		button.render('body');

	}


	// renderReadMe();
	renderMustacheButtonDemo();
