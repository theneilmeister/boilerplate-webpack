import greeter = require('./modules/greeter');  
import $ = require('jquery');

$(() => {
  $(document.body).html(greeter("Boilerplate"));
});
