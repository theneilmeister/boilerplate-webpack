"use strict";
var greeter = require('./modules/greeter');
var $ = require('jquery');
$(function () {
    $(document.body).html(greeter("World"));
});
