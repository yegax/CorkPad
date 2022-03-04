$(document).ready(function(){

var counter = 0;
var colors = [
  "#b5ff78",
  "#ffde5a",
  "#ff9fc9",
  "#81d3ff"     
];

var colorsModern = [
    "rgba(154, 255, 114, 0.85)",
    "rgba(255, 234, 114, 0.85)",
    "rgba(255, 151, 255, 0.85)",
    "rgba(114, 194, 255, 0.85)"     
  ];

var colorsNeon = [
    "rgba(55, 55, 55, 0.07)",
    "rgba(55, 55, 55, 0.07)",
    "rgba(55, 55, 55, 0.07)",
    "rgba(55, 55, 55, 0.07)" 
  ];

var colorsGlass = [
    "rgba(154, 255, 114, 0.296)",
    "rgba(255, 234, 114, 0.296)",
    "rgba(255, 151, 255, 0.296)",
    "rgba(114, 194, 255, 0.296)"   
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

var $notes = $("#draggable1, #draggable2, #draggable3, #draggable4, #draggable5, #draggable6, #draggable7, #draggable8, #draggable9, #draggable10, #draggable11, #draggable12, #draggable13, #draggable14, #draggable15, #draggable16, #draggable17, #draggable18, #draggable19, #draggable20, #draggable21, #draggable22, #draggable23");

// Glass
$('#glass-notestyle-btn').click(function() {

    $notes.removeClass("panel panel-modern panel-neon");
    $notes.addClass("panel-glass");
    $div1.css({"background-color": colorsGlass[(counter++)%colorsGlass.length]})
});

// Neon  
$('#neon-notestyle-btn').click(function() {

    $notes.removeClass("panel panel-glass panel-modern");
    $notes.addClass("panel-neon");
    $div1.css({"background-color": colorsNeon[(counter++)%colorsNeon.length]})
});

// Modern
$('#modern-notestyle-btn').click(function() {

    $notes.removeClass("panel panel-glass panel-neon");
    $notes.addClass("panel-modern");
    $div1.css({"background-color": colorsModern[(counter++)%colorsModern.length]})
});

// Classic (Default)   
$('#classic-notestyle-btn').click(function() {

    $notes.removeClass("panel-glass panel-modern panel-neon");
    $notes.addClass("panel");
    $div1.css({"background-color": colors[(counter++)%colors.length]})
});

$('#colorchange1').click(function(){

  if ($div1.hasClass("panel")) {
    $div1.css({"background-color": colors[(counter++)%colors.length]})
  } else if ($div1.hasClass("panel-modern")) {
    $div1.css({"background-color": colorsModern[(counter++)%colorsModern.length]})
  } else if ($div1.hasClass("panel-neon")) {
    $div1.css({"background-color": colorsNeon[(counter++)%colorsNeon.length]})
  } else if ($div1.hasClass("panel-glass")) {
    $div1.css({"background-color": colorsGlass[(counter++)%colorsGlass.length]})
  }
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