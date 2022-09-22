import $ from 'jquery';
$(document).ready(function() {
    $('.preloader').fadeOut('slow');
    console.log('coucou');
    $('#register').removeAttr("disabled");
    $("#search").click(function (){
        $("#search").attr('value',"");
    })
});