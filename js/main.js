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
        clickbtn.innerHTML = '课程一：區塊鏈底層原理和技術 ∧ ';
        list.style.display = 'inline-block';
    }
    else 
    {
        clickbtn.innerHTML = '课程一：區塊鏈底層原理和技術 V ';
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
        clickbtn1.innerHTML = '课程二：區塊鏈應用與商業場景 ∧ ';
        list1.style.display = 'inline-block';
    }
    else 
    {
        clickbtn1.innerHTML = '课程二：區塊鏈應用與商業場景 V ';
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
        clickbtn2.innerHTML = '课程三：區塊鏈金融 ∧ ';
        list2.style.display = 'inline-block';
    }
    else 
    {
        clickbtn2.innerHTML = '课程三：區塊鏈金融 V ';
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
        clickbtn3.innerHTML = '课程四：區塊鏈認知誤區和認知升級 ∧ ';
        list3.style.display = 'inline-block';
    }
    else 
    {
        clickbtn3.innerHTML = '课程四：區塊鏈認知誤區和認知升級 V ';
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
        clickbtn4.innerHTML = '课程五：全球區塊鏈和數字經濟發展前沿 ∧ ';
        list4.style.display = 'inline-block';
    }
    else 
    {
        clickbtn4.innerHTML = '课程五：全球區塊鏈和數字經濟發展前沿 V ';
        list4.style.display = 'none';
    }
})

