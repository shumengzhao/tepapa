jQuery(document).ready(function($){

$('.rss-feed').rss(
'http://feeds.feedburner.com/Html5AndBeyondHtml5AndBeyond',{
limit: 10,
entryTemplate: '<li><a href="{url}" target="_blank">{title}</a></li>',
success: function(){
$('.rss-feed ul li a').each(function(){
$(this).attr('data-search-term', $(this).text().toLowerCase());
});
}
})

$('.live-search-box').on('keyup', function(){

var searchTerm = $(this).val().toLowerCase();

    $('.rss-feed ul li a').each(function(){

        if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
            $(this).parent('li').show();
        } else {
            $(this).parent('li').hide();
        }

    });

});
    
$( ".live-search-box" ).hide();
$( ".rss-feed" ).hide();
    
$(".search").click(function () { 
    $( ".live-search-box" ).show();
    $( ".rss-feed" ).show();
});
    
$(".nav").click(function () { 
    $( ".live-search-box" ).hide();
    $( ".rss-feed" ).hide();
});    

});