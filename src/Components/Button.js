import $ from 'jquery';
import template from './Button.html';
import Mustache from 'mustache';
import './Button.scss';


export default class Button {

    constructor(title, link) {
        this.title = title;
        this.link = link;
    }

    onClick(event) {
        event.preventDefault();
        alert(this.link);
    }

    render(node) {

        const text = this.title;
        const link = this.link;

        // Render our button
        $(node).html(
            Mustache.render(template, {text})
        );

        // Attach our listeners
        $('.button').click(this.onClick.bind(this));
    }

}
