$(document).ready(function(){

    $("#close-help").click(function() {
        $('#helpscreen').hide('slide', { direction: 'right', mode: 'show' }, 800);
    });
    
    $("#help-button").click(function() {
        $('#helpscreen').toggle('slide', { direction: 'right', mode: 'show' }, 800);
    });
    
});
