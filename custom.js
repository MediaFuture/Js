jQuery(document).ready(function(){$("ul.nav li.dropdown").hover(function(){$(this).find(".dropdown-menu").stop(true,true).delay(200).fadeIn(200)},function(){$(this).find(".dropdown-menu").stop(true,true).delay(200).fadeOut(200)});$(".slick_slider").slick({dots:true,infinite:true,speed:800,slidesToShow:1,slide:"div",autoplay:true,autoplaySpeed:5000,cssEase:"linear"});$(".latest_postnav").newsTicker({row_height:64,speed:800,prevButton:$("#prev-button"),nextButton:$("#next-button")});jQuery(".fancybox-buttons").fancybox({prevEffect:"none",nextEffect:"none",closeBtn:true,helpers:{title:{type:"inside"},buttons:{}}});$(window).scroll(function(){if($(this).scrollTop()>300){$(".scrollToTop").fadeIn()}else{$(".scrollToTop").fadeOut()}});$(".scrollToTop").click(function(){$("html, body").animate({scrollTop:0},800);return false});$(".tootlip").tooltip();$("ul#ticker01").liScroll()});wow=new WOW({animateClass:"animated",offset:100});wow.init();jQuery(window).load(function(){$("#status").fadeOut();$("#preloader").delay(100).fadeOut("slow");$("body").delay(100).css({overflow:"visible"})});
