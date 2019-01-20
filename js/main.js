// function btnClick(x) {
//     x.classList.toggle("change");
//     var menuToggle = document.getElementById("menu-sp");
//     menuToggle.style.display = menuToggle.style.display === 'none' ? 'block' : 'none';
// }
$(function() {
    $('.btn-menu').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('change');
        $('.menu').toggleClass('menuToggle');
    });
    const bg1 = "url('images/slider/main01.jpg')";
    const bg2 = "url('images/slider/main02.jpg')";
    const bg3 = "url('images/slider/main03.jpg')";
    const arr = [bg1,bg2,bg3];
    let i = 0;
    time = setInterval(function() {
        $('.slider').css("background-image", arr[i]);
        i++;
        if(i==3) {
            i=0;
        }
    },4000);
});