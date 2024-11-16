
$(document).ready(function() {
    let currentIndex = 0;
    const images = $('.carousel-slider .img');
    const totalImages = images.length;

    function showImage(index) {
        if (index >= totalImages) {
            index = 0;
        } else if (index < 0) {
            index = totalImages - 1;
        }
        $('.carousel-slider').css('transform', `translateX(${-index * 100}%)`);
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
        $('.prev').click(prev)
        $('.next').click(next)

    setInterval(function() {
        showImage(currentIndex + 1);
    }, 5000); 
});