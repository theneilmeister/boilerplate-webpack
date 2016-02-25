import greeter = require('./modules/greeter');  
import $ = require('jquery');
import Student from './classes/Student';

var user = new Student("Jane", "M.", "User");

$(() => {
  $(document.body).html(greeter(user));
});
