/*-----------------------------------------------------------------------------------*/
/* 		Mian Js Start 
/*-----------------------------------------------------------------------------------*/
$(document).ready(function($) {
"use strict"
/*-----------------------------------------------------------------------------------*/
/*		STICKY NAVIGATION
/*-----------------------------------------------------------------------------------*/
$(".sticky").sticky({topSpacing:0});
/*-----------------------------------------------------------------------------------*/
/* 	LOADER
/*-----------------------------------------------------------------------------------*/
$("#loader").delay(500).fadeOut("slow");
/*-----------------------------------------------------------------------------------*/
/*  FULL SCREEN
/*-----------------------------------------------------------------------------------*/
$('.full-screen').superslides({});
/*-----------------------------------------------------------------------------------*/
/* 	Counter Timer
/*-----------------------------------------------------------------------------------*/
$('.countdown').downCount({
     date: '12/12/2018 12:00:00' // M/D/Y
});
$('.countdown-all').downCount({
     date: '12/12/2020 12:00:00' // M/D/Y
});
/*-----------------------------------------------------------------------------------*/
/* 	COUNTER
/*-----------------------------------------------------------------------------------*/
$('.counter').counterUp({
    delay: 50,
    time: 2000
});
/*-----------------------------------------------------------------------------------*/
/* 	MagnificPopup
/*-----------------------------------------------------------------------------------*/
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	disableOn: 700,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	fixedContentPos: false
});

});


var clickbtn = document.getElementById('clickOpen');
var list = document.getElementsByClassName('list')[0];
var isopen = false;

clickbtn.addEventListener('click',function()
{
    isopen = !isopen;
    if(isopen)
    {
        clickbtn.innerHTML = '?????????????????????????????????????????? ??? ';
        list.style.display = 'inline-block';
    }
    else 
    {
        clickbtn.innerHTML = '?????????????????????????????????????????? V ';
        list.style.display = 'none';
    }
})

var clickbtn1 = document.getElementById('clickOpen1');
var list1 = document.getElementsByClassName('list1')[0];
var isopen = false;

clickbtn1.addEventListener('click',function()
{
    isopen = !isopen;
    if(isopen)
    {
        clickbtn1.innerHTML = '?????????????????????????????????????????? ??? ';
        list1.style.display = 'inline-block';
    }
    else 
    {
        clickbtn1.innerHTML = '?????????????????????????????????????????? V ';
        list1.style.display = 'none';
    }
})

var clickbtn2 = document.getElementById('clickOpen2');
var list2 = document.getElementsByClassName('list2')[0];
var isopen = false;

clickbtn2.addEventListener('click',function()
{
    isopen = !isopen;
    if(isopen)
    {
        clickbtn2.innerHTML = '??????????????????????????? ??? ';
        list2.style.display = 'inline-block';
    }
    else 
    {
        clickbtn2.innerHTML = '??????????????????????????? V ';
        list2.style.display = 'none';
    }
})

var clickbtn3 = document.getElementById('clickOpen3');
var list3 = document.getElementsByClassName('list3')[0];
var isopen = false;

clickbtn3.addEventListener('click',function()
{
    isopen = !isopen;
    if(isopen)
    {
        clickbtn3.innerHTML = '???????????????????????????????????????????????? ??? ';
        list3.style.display = 'inline-block';
    }
    else 
    {
        clickbtn3.innerHTML = '???????????????????????????????????????????????? V ';
        list3.style.display = 'none';
    }
})

var clickbtn4 = document.getElementById('clickOpen4');
var list4 = document.getElementsByClassName('list4')[0];
var isopen = false;

clickbtn4.addEventListener('click',function()
{
    isopen = !isopen;
    if(isopen)
    {
        clickbtn4.innerHTML = '?????????????????????????????????????????????????????? ??? ';
        list4.style.display = 'inline-block';
    }
    else 
    {
        clickbtn4.innerHTML = '?????????????????????????????????????????????????????? V ';
        list4.style.display = 'none';
    }
})

