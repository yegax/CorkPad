$(document).ready(function(){

    $("#close-help").click(function() {
        $('#helpscreen').hide('slide', { direction: 'right', mode: 'show' }, 800);
    });
    
    $("#help-button").click(function() { 
        $('#feedbackscreen').hide('slide', { direction: 'right', mode: 'show' }, 800);
        $('#aboutscreen').hide('slide', { direction: 'right', mode: 'show' }, 800);
        $('#helpscreen').toggle('slide', { direction: 'right', mode: 'show' }, 800);
    });

    $("#close-about").click(function() {
        $('#aboutscreen').hide('slide', { direction: 'right', mode: 'show' }, 800);
    });
    
    $("#about-button").click(function() {
        $('#feedbackscreen').hide('slide', { direction: 'right', mode: 'show' }, 800);
        $('#helpscreen').hide('slide', { direction: 'right', mode: 'show' }, 800);
        $('#aboutscreen').toggle('slide', { direction: 'right', mode: 'show' }, 800);
    });

    $("#close-feedback").click(function() {
        $('#feedbackscreen').hide('slide', { direction: 'right', mode: 'show' }, 800);
    });
    
    $("#feedback-button").click(function() {
        $('#helpscreen').hide('slide', { direction: 'right', mode: 'show' }, 800);
        $('#aboutscreen').hide('slide', { direction: 'right', mode: 'show' }, 800);
        $('#feedbackscreen').toggle('slide', { direction: 'right', mode: 'show' }, 800);
    });
    
});
