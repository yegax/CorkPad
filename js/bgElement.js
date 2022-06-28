$(document).ready(function(){

    // Bright Mode Secondary Color
    var $allBgs = $("cork-bg-img, wood-bg-img, metal-bg-img, woodgrain-bg-img, tiles-bg-img, brick-bg-img, grass-bg-img, chipboard-bg-img");

    // Cork    
    $('#cork-bg').click(function() {
        $("#printDiv").removeClass("sky-bg-gradient sunrise-bg-gradient white-bg-gradient multicolor-bg-gradient rainbow-bg-gradient dark-bg-gradient gray-bg-gradient wood-bg-img metal-bg-img woodgrain-bg-img tiles-bg-img brick-bg-img grass-bg-img chipboard-bg-img");
        $("#printDiv").addClass("cork-bg-img");
    });

    // Wood    
    $('#wood-bg').click(function() {
        $("#printDiv").removeClass("sky-bg-gradient sunrise-bg-gradient white-bg-gradient multicolor-bg-gradient rainbow-bg-gradient dark-bg-gradient gray-bg-gradient cork-bg-img metal-bg-img woodgrain-bg-img tiles-bg-img brick-bg-img grass-bg-img chipboard-bg-img");
        $("#printDiv").addClass("wood-bg-img");
    });

    // Metal   
    $('#metal-bg').click(function() {
        $("#printDiv").removeClass("sky-bg-gradient sunrise-bg-gradient white-bg-gradient multicolor-bg-gradient rainbow-bg-gradient dark-bg-gradient gray-bg-gradient cork-bg-img wood-bg-img woodgrain-bg-img tiles-bg-img brick-bg-img grass-bg-img chipboard-bg-img");
        $("#printDiv").addClass("metal-bg-img");
    });

    // Woodgrain   
    $('#woodgrain-bg').click(function() {
        $("#printDiv").removeClass("sky-bg-gradient sunrise-bg-gradient white-bg-gradient multicolor-bg-gradient rainbow-bg-gradient dark-bg-gradient gray-bg-gradient cork-bg-img wood-bg-img metal-bg-img tiles-bg-img brick-bg-img grass-bg-img chipboard-bg-img");
        $("#printDiv").addClass("woodgrain-bg-img");
    });

    // Tiles  
    $('#tiles-bg').click(function() {
        $("#printDiv").removeClass("sky-bg-gradient sunrise-bg-gradient white-bg-gradient multicolor-bg-gradient rainbow-bg-gradient dark-bg-gradient gray-bg-gradient cork-bg-img wood-bg-img metal-bg-img woodgrain-bg-img brick-bg-img grass-bg-img chipboard-bg-img");
        $("#printDiv").addClass("tiles-bg-img");
    });

    // Brick  
    $('#brick-bg').click(function() {
        $("#printDiv").removeClass("sky-bg-gradient sunrise-bg-gradient white-bg-gradient multicolor-bg-gradient rainbow-bg-gradient dark-bg-gradient gray-bg-gradient cork-bg-img wood-bg-img metal-bg-img woodgrain-bg-img tiles-bg-img grass-bg-img chipboard-bg-img");
        $("#printDiv").addClass("brick-bg-img");
    });

    // Grass   
    $('#grass-bg').click(function() {
        $("#printDiv").removeClass("sky-bg-gradient sunrise-bg-gradient white-bg-gradient multicolor-bg-gradient rainbow-bg-gradient dark-bg-gradient gray-bg-gradient cork-bg-img wood-bg-img metal-bg-img woodgrain-bg-img tiles-bg-img brick-bg-img chipboard-bg-img");
        $("#printDiv").addClass("grass-bg-img");
    });

    // Chipboard   
    $('#chipboard-bg').click(function() {
        $("#printDiv").removeClass("sky-bg-gradient sunrise-bg-gradient white-bg-gradient multicolor-bg-gradient rainbow-bg-gradient dark-bg-gradient gray-bg-gradient cork-bg-img wood-bg-img metal-bg-img woodgrain-bg-img tiles-bg-img brick-bg-img grass-bg-img");
        $("#printDiv").addClass("chipboard-bg-img");
    });

    // Gradient-Gray   
    $('#gray-g-bg').click(function() {
        $("#printDiv").removeClass("sky-bg-gradient sunrise-bg-gradient white-bg-gradient multicolor-bg-gradient rainbow-bg-gradient dark-bg-gradient cork-bg-img wood-bg-img metal-bg-img woodgrain-bg-img tiles-bg-img brick-bg-img grass-bg-img");
        $("#printDiv").addClass("gray-bg-gradient");
    });

    // Gradient-Black   
    $('#dark-g-bg').click(function() {
        $("#printDiv").removeClass("sky-bg-gradient sunrise-bg-gradient white-bg-gradient multicolor-bg-gradient rainbow-bg-gradient gray-g-bg cork-bg-img wood-bg-img metal-bg-img woodgrain-bg-img tiles-bg-img brick-bg-img grass-bg-img");
        $("#printDiv").addClass("dark-bg-gradient");
    });

        // Gradient-White 
    $('#white-g-bg').click(function() {
        $("#printDiv").removeClass("sky-bg-gradient sunrise-bg-gradient dark-bg-gradient multicolor-bg-gradient rainbow-bg-gradient gray-g-bg cork-bg-img wood-bg-img metal-bg-img woodgrain-bg-img tiles-bg-img brick-bg-img grass-bg-img");
        $("#printDiv").addClass("white-bg-gradient");
    });

        // Gradient-Sky 
    $('#sky-g-bg').click(function() {
        $("#printDiv").removeClass("sunrise-bg-gradient white-bg-gradient dark-bg-gradient multicolor-bg-gradient rainbow-bg-gradient gray-g-bg cork-bg-img wood-bg-img metal-bg-img woodgrain-bg-img tiles-bg-img brick-bg-img grass-bg-img");
        $("#printDiv").addClass("sky-bg-gradient");
    });

        // Gradient-Sunrise   
    $('#sunrise-g-bg').click(function() {
        $("#printDiv").removeClass("sky-bg-gradient white-bg-gradientdark-bg-gradient multicolor-bg-gradient rainbow-bg-gradient gray-g-bg cork-bg-img wood-bg-img metal-bg-img woodgrain-bg-img tiles-bg-img brick-bg-img grass-bg-img");
        $("#printDiv").addClass("sunrise-bg-gradient");
    });

        // Gradient-Multicolor  
    $('#multicolor-g-bg').click(function() {
        $("#printDiv").removeClass("sky-bg-gradient sunrise-bg-gradient white-bg-gradient dark-bg-gradient rainbow-bg-gradient gray-g-bg cork-bg-img wood-bg-img metal-bg-img woodgrain-bg-img tiles-bg-img brick-bg-img grass-bg-img");
        $("#printDiv").addClass("multicolor-bg-gradient");
    });

        // Gradient-Rainbow  
    $('#rainbow-g-bg').click(function() {
        $("#printDiv").removeClass("sky-bg-gradient sunrise-bg-gradient white-bg-gradient dark-bg-gradient multicolor-bg-gradient gray-g-bg cork-bg-img wood-bg-img metal-bg-img woodgrain-bg-img tiles-bg-img brick-bg-img grass-bg-img");
        $("#printDiv").addClass("rainbow-bg-gradient");
    });

});