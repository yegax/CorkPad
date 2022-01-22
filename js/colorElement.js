$(document).ready(function(){

var counter = 0;
var colors = [
  "#b5ff78",
  "#ffde5a",
  "#ff9fc9",
  "#81d3ff"     
];

var $div1 = $('#draggable1');
var $div2 = $('#draggable2');
var $div3 = $('#draggable3');
var $div4 = $('#draggable4');
var $div5 = $('#draggable5');
var $div6 = $('#draggable6');
var $div13 = $('#draggable13');
var $div14 = $('#draggable14');
var $div15 = $('#draggable15');
var $div16 = $('#draggable16');
var $div17 = $('#draggable17');
var $div18 = $('#draggable18');
var $div19 = $('#draggable19');
var $div20 = $('#draggable20');
var $div21 = $('#draggable21');
var $div22 = $('#draggable22');
var $div23 = $('#draggable23');

$('#colorchange1').click(function(){
  $div1.css({
      "background-color": colors[(counter++)%colors.length]
  })
});

$('#colorchange2').click(function(){
    $div2.css({
        "background-color": colors[(counter++)%colors.length]
    })
});

$('#colorchange3').click(function(){
    $div3.css({
        "background-color": colors[(counter++)%colors.length]
    })
});

$('#colorchange4').click(function(){
    $div4.css({
        "background-color": colors[(counter++)%colors.length]
    })
});

$('#colorchange5').click(function(){
    $div5.css({
        "background-color": colors[(counter++)%colors.length]
    })
});

$('#colorchange6').click(function(){
    $div6.css({
        "background-color": colors[(counter++)%colors.length]
    })
});

$('#colorchange13').click(function(){
    $div13.css({
        "background-color": colors[(counter++)%colors.length]
    })
});


$('#colorchange14').click(function(){
    $div14.css({
        "background-color": colors[(counter++)%colors.length]
    })
});


$('#colorchange15').click(function(){
    $div15.css({
        "background-color": colors[(counter++)%colors.length]
    })
});


$('#colorchange16').click(function(){
    $div16.css({
        "background-color": colors[(counter++)%colors.length]
    })
});


$('#colorchange17').click(function(){
    $div17.css({
        "background-color": colors[(counter++)%colors.length]
    })
});


$('#colorchange18').click(function(){
    $div18.css({
        "background-color": colors[(counter++)%colors.length]
    })
});

$('#colorchange19').click(function(){
    $div19.css({
        "background-color": colors[(counter++)%colors.length]
    })
});

$('#colorchange20').click(function(){
    $div20.css({
        "background-color": colors[(counter++)%colors.length]
    })
});

$('#colorchange21').click(function(){
    $div21.css({
        "background-color": colors[(counter++)%colors.length]
    })
});

$('#colorchange22').click(function(){
    $div22.css({
        "background-color": colors[(counter++)%colors.length]
    })
});

$('#colorchange23').click(function(){
    $div23.css({
        "background-color": colors[(counter++)%colors.length]
    })
});



});