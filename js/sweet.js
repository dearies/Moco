$(function() {
    $('.btn-menu').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('change');
        $('.menu').toggleClass('menuToggle');
        //change icons menu
        $('#icons1').attr("src","images/slider/fb-brown.png");
        $('#icons2').attr("src","images/slider/insta-brown.png");
        $('#icons3').attr("src","images/slider/line-brown.png");
    });
});