$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});
var song=document.getElementById("song");
var img=document.getElementById("img");

img.onclick= function(){
  song.play();

}
var shyam=document.getElementById("shyam");
var ram=document.getElementById("ram");

ram.onclick= function(){
  shyam.play();

}
var song3=document.getElementById("song3");
var img3=document.getElementById("img3");

img3.onclick= function(){
  song3.play();

}
var song4=document.getElementById("song4");
var img4=document.getElementById("img4");

img4.onclick= function(){
  song4.play();

}
var song5=document.getElementById("song5");
var img5=document.getElementById("img5");

img5.onclick= function(){
  song5.play();

}
var song6=document.getElementById("song6");
var img6=document.getElementById("img6");

img6.onclick= function(){
  song6.play();

}