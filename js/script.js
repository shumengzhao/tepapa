$(document).ready(function () { 

    $(".close").hide();
    $(".pop").hide();
    
    var revealHeight = $(".moreList li").height()+$(this).find(".reveal").height();
    
    var screenTop = $(document).scrollTop();
    var screenBottom = $(window).scrollTop() + $(window).height();
    
$(".item").click(function () {
    
    $(".hideaway").animate({"top": -36}, 750);
    $(".feature").animate({"margin-top": 0}, 400);
    
    $(".search").hide();
    $(".pop").show();
    $(".pop").animate({"top": screenTop + 49 + 'px'}, 400);
    $(".close").fadeIn(400);
    $( ".content" ).delay(400).hide(0);
});
    
$(".close").click(function () {
    
    $( ".content" ).show();
    $(".pop").animate({"top": screenBottom}, 400);
    $(".close").fadeOut(100);
    $(".pop").hide(100);
    $(".search").fadeIn(600);
});
    
$(".hideaway .hide").click(function () {
    
    $(".hideaway").animate({"top": -36}, 750);
    $(".feature").animate({"margin-top": 0}, 400);
    
});
    
/*$( ".moreList li" ).click(function() {
    if ( $(this).height() != 400)
          $( this ).animate({ height: 400 }, 750 );
    else
          $( this ).animate({ height: 60 }, 750 );
});*/
  
$( ".moreList li" ).click(function(e) {
    
     if($(e.target).is('.reveal')){
            e.preventDefault();
            return;
        }
    
    if ( $(this).height() < 80)
          $( this ).animate({
              'height':($(".moreList li").height()+$(this).find(".reveal").height())
                            });
    
    else
          $( this ).animate({ height: 70 }, 750 );
});   
    
    
$( ".moreList li" ).click(function(e) {
    
     if($(e.target).is('.reveal')){
            e.preventDefault();
            return;
        }
    
    if ( $(this).height() < 80)
          $(this).find('.arrow').addClass( "turn" );
    
    else
          $(this).find('.arrow').removeClass( "turn" );
});       

    
});

