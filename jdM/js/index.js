/**
 * Created by zhousg on 2017/10/12.
 */
window.onload = function () {
	// body...
	// 1.顶部搜索
	search();
	/* 2.轮播图*/
	banner();
	/* 3.倒计时*/
	downTime();
};
var search = function () {
	var searchBox = document.querySelector('.jd_search_box');
    var banner = document.querySelector('.jd_banner');
	var height = banner.offsetHeight;
	window.onscroll = function () {
	    var scrollTop = document.body.scrollTop;
        console.log(scrollTop);
	    var opacity = 0;
	    if (scrollTop < height) {
	        opacity = scrollTop / height * 0.85;
        }else {
	        opacity = 0.85;
        }
        searchBox.style.background = 'rgba(201, 21, 35,'+opacity+' )';
    }
};
var banner = function () {
    //获取轮播图
    var banner = document.querySelector('.jd_banner');
    /*获取宽度*/
    var width = banner.offsetWidth;
    /*图片的容器*/
    var imgBox = banner.querySelector('ul:first-child');
    /*电容器*/
    var pointBox = banner.querySelector('ul:last-child');
    /*所有的点*/
    var points = pointBox.querySelectorAll('li');

    var index = 1;
    var time = setInterval(function () {
        index++;
        /*加过渡*/
        imgBox.style.transition = 'all 0.2s';
        imgBox.style.webkitTransition = 'all 0.2s';
        /*做位移*/
        imgBox.style.transform = 'translateX('+(-index*width)+'px)';
        imgBox.style.webkitTransform = 'translateX('+(-index*width)+'px)';
    }, 3000);
    imgBox.addEventListener('transitionend',function () {
        if(index >= 9) {
            index = 1;
            
        }
    });


};
var downTime = function () {

};