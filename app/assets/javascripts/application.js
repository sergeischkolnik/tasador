// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
// require activestorage
// require_tree .

//= require jquery3
//= require popper
//= require bootstrap

// custom
//= require bootstrap_static_form_validation
//= require fill_controller
//= require password_controller
//= require toggle_controller
//= require tooltip_controller
//= require rails.validations
//= require rails.validations.simple_form.bootstrap4

window.ClientSideValidations.callbacks.element.fail = function(element, message, callback){
    $('.submit').prop("disabled",true);
    callback();
};
window.ClientSideValidations.callbacks.element.pass = function(element, callback){
    $('.submit').prop("disabled",false);
    callback();
};