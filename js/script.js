$(function(){
    'use strict';
    
    // Intialize Header height
    $(".header").height($(window).height());
    $(window).resize(function(){
        $(".header").height($(window).height());  //Centeralize the slider in window while reszing
        $(".slider").each(function(){
            $(this).css("paddingTop",($(window).height() - $(".slider div").height()) / 2);
        });
    });
    
    // Add active class to clicked link
    $(".links li a").click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
    });
    $(window).scroll(function(){
        if($(window).scrollTop() <= $(".header").height()){
            $(".navbar .links li:first-child").addClass("active").siblings().removeClass("active");
        }
    });
    
    // Triger the slider
    $('.slider').bxSlider({
        pager : false
    });  
    $(".slider").each(function(){    //Centeralize the slider in window
        $(this).css("paddingTop",($(window).height() - $(".slider div").height()) / 2);
    });
    
    //Smooth the move to selected section
    $(".links li a").click(function(){
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("value")).offset().top
        },1000);
    });
    
    //Testimonials auto slider
    (function autoSlider(){
        $(".clients-slider .active").each(function(){
            if(!$(this).is(":last-child")){
                $(this).delay(2000).fadeOut(1000,function(){
                    $(this).removeClass("active").next().addClass("active").fadeIn(1000);
                    autoSlider();
                });
            }else{
                $(this).delay(2000).fadeOut(1000,function(){
                    $(this).removeClass("active");
                    $(".clients-slider div:first-child").addClass("active").fadeIn();
                    autoSlider();
                });
            }
        });
    }());
    
    // Setting up gallary function
    $(".our-projects ul li").click(function(){
        var className = $(this).data("value");
        var selector = $("." + $(this).data("value"));
        $(this).addClass("selected").siblings().removeClass("selected");
        if($(this).is(":first-child")){
            $(".gallary > div").fadeIn(1500);
        }else{
            $(".gallary > div").each(function(){
            if(!$(this).hasClass(className)){
                $(this).hide();
                $(selector).fadeIn(500);
                }
            });
        }
    });
    
    //trigger a nice scroll plugin
    $("body").niceScroll({
        cursorcolor: "#1ABC9C",
        cursorwidth:"10px",
        cursorborder: "1px solid #1ABC9C"
    });
});
