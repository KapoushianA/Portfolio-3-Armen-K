/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function(){
    $(".oranges").css("background-color", "cyan");
    
    $("p").css("color", "black");
    
    //$("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $("h1").bind("click", mouseClick);
    
    
    $('#replaceWText').bind('click', replaceWText);
    $('#addPara').bind('click', addAPara);
    $('#removePara').bind('click', removeAPara);
    
    $('#hide').bind('click', hideThePage);
    $('#show').bind('click', showThePage);
});

function hideThePage(){
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

function showThePage(){
    $('div').show('fold', {}, 1500);
    $('#show').hide('puff', {}, 1500);
}

function removeAPara(){
    $('#randPara p:last').remove();
}

function addAPara(){
    $('#randPara').append('<p>ADDED</p>');
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
    
    $("p").html("IM BLUE BA DA BEE DA BOO DA BA DA BEE DA BOO DA ")
}

function addAPara() {
    $('#randPara').append('Armen is hot');
}