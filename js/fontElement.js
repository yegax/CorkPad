$(document).ready(function(){

    var $notes = $("#draggable1, #draggable2, #draggable3, #draggable4, #draggable5, #draggable6, #draggable7, #draggable8, #draggable9, #draggable10, #draggable11, #draggable12, #draggable13, #draggable14, #draggable15, #draggable16, #draggable17, #draggable18, #draggable19, #draggable20, #draggable21, #draggable22, #draggable23");

    // Handwritten   
    $('#handwritten-btn').click(function() {

        $notes.removeClass("font-arial font-monospace");
        $notes.addClass("font-handwritten");
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