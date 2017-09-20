$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('header, header>*').addClass("sticky");
$('main, aside').css("padding-top", '250px');
}
else{
$('header, header>*').removeClass("sticky");
$('main, aside').css("padding-top", '0');
}
});



