$(document).ready(function(){

    // Handwritten   
    $('#handwritten-btn').click(function() {
        $("#draggable1").removeClass("font-arial font-monospace");
        $("#draggable1").addClass("font-handwritten");
    });

    // Monospace 
    $('#monospace-btn').click(function() {
        $("#draggable1").removeClass("font-arial font-handwritten");
        $("#draggable1").addClass("font-monospace");
    });

    // Arial (Default)   
    $('#arial-btn').click(function() {
        $("#draggable1").removeClass("font-handwritten font-monospace");
    });

});