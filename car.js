$(document).ready(function(){
    let currentIndex = 0;
    const images = $('.my-car .img2');
    const totalImages = images.length;

    function showImage(index) {
        if (index >= totalImages) {
            index = 0;
        } else if (index < 0) {
            index = totalImages - 1;
        }
        $('.my-car').css('transform', `translateX(${-index * 100}%)`);
        currentIndex = index;
    }
        function prev(){
            currentIndex--;
            showImage(currentIndex);
        }
        function next(){
            currentIndex++;
            showImage(currentIndex);
        }
        $('.prev2').click(prev)
        $('.next2').click(next)

});