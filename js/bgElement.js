$(document).ready(function(){

    // Bright Mode Secondary Color
    var $allBgs = $("cork-bg-img, wood-bg-img, metal-bg-img, woodgrain-bg-img, tiles-bg-img, brick-bg-img, grass-bg-img, chipboard-bg-img");

    // Cork    
    $('#cork-bg').click(function() {
        $("#printDiv").removeClass("wood-bg-img metal-bg-img woodgrain-bg-img tiles-bg-img brick-bg-img grass-bg-img chipboard-bg-img");
        $("#printDiv").addClass("cork-bg-img");
    });

    // Wood    
    $('#wood-bg').click(function() {
        $("#printDiv").removeClass("cork-bg-img metal-bg-img woodgrain-bg-img tiles-bg-img brick-bg-img grass-bg-img chipboard-bg-img");
        $("#printDiv").addClass("wood-bg-img");
    });

    // Metal   
    $('#metal-bg').click(function() {
        $("#printDiv").removeClass("cork-bg-img wood-bg-img woodgrain-bg-img tiles-bg-img brick-bg-img grass-bg-img chipboard-bg-img");
        $("#printDiv").addClass("metal-bg-img");
    });

    // Woodgrain   
    $('#woodgrain-bg').click(function() {
        $("#printDiv").removeClass("cork-bg-img wood-bg-img metal-bg-img tiles-bg-img brick-bg-img grass-bg-img chipboard-bg-img");
        $("#printDiv").addClass("woodgrain-bg-img");
    });

    // Tiles  
    $('#tiles-bg').click(function() {
        $("#printDiv").removeClass("cork-bg-img wood-bg-img metal-bg-img woodgrain-bg-img brick-bg-img grass-bg-img chipboard-bg-img");
        $("#printDiv").addClass("tiles-bg-img");
    });

    // Brick  
    $('#brick-bg').click(function() {
        $("#printDiv").removeClass("cork-bg-img wood-bg-img metal-bg-img woodgrain-bg-img tiles-bg-img grass-bg-img chipboard-bg-img");
        $("#printDiv").addClass("brick-bg-img");
    });

    // Grass   
    $('#grass-bg').click(function() {
        $("#printDiv").removeClass("cork-bg-img wood-bg-img metal-bg-img woodgrain-bg-img tiles-bg-img brick-bg-img chipboard-bg-img");
        $("#printDiv").addClass("grass-bg-img");
    });

    // Chipboard   
    $('#chipboard-bg').click(function() {
        $("#printDiv").removeClass("cork-bg-img wood-bg-img metal-bg-img woodgrain-bg-img tiles-bg-img brick-bg-img grass-bg-img");
        $("#printDiv").addClass("chipboard-bg-img");
    });
});