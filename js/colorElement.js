$(document).ready(function(){

var counter = 0;
var colors = [
  "#b5ff78",
  "#ffde5a",
  "#ff9fc9",
  "#81d3ff"     
];

var $div1 = $('#sticky1, #draggable1');
var $div2 = $('#sticky2, #draggable2');
var $div3 = $('#sticky3, #draggable3');
var $div4 = $('#sticky4, #draggable4');
var $div5 = $('#sticky5, #draggable5');
var $div6 = $('#sticky6, #draggable6');

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


});