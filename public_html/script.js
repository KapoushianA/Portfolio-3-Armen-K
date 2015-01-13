/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function(){
    $(".oranges").css("background-color", "yellow");
    
    $("p").css("color", "blue");
    
    //$("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $("h1").bind("click", mouseClick);
    
    
    $('#replaceWText').bind('click', replaceWText);
    $('#addPara').bind('click', addAPara);
    $('#removePara').bind('click', removeAPara);
    
});

function removeAPara(){
    $('#randPara p:last').remove();
}

function addAPara(){
    $('#addPara').append('<p>ADDED</p>');
}

function replaceWText(){
    $('#replaceWText').text('Replaced!');
}

function mouseOverMe (){
    $("h1").html("armen is cool");
}

function mouseOverMe (){
    $("h1").html("Armen is very sexy");
}

function mouseClick (){
    
    $("p").html("Clicked!!!!!!!!!!!!!!!!!!!!!!!!!")
}

function addAPara() {
    $('#randPara').append('Armen is hot');
}