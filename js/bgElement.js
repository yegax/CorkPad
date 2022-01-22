$(document).ready(function(){

    // Cork    
    $('#cork-bg').click(function() {
        $("#printDiv").removeClass("wood-bg-img");
        $("#printDiv").addClass("cork-bg-img");
    });

    // Wood    
    $('#wood-bg').click(function() {
        $("#printDiv").removeClass("cork-bg-img");
        $("#printDiv").addClass("wood-bg-img");
    });
});