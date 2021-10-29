$(document).ready(function(){

    // making the time interval of the carousel
    $('#mycarousel').carousel({ interval: 2000 });
    // making the carousel pause the button, when the user clicks, execute function
    $('#carouselButton').click(function() {
    // now create conditional statements
        if ($('#carouselButton').children('span').hasClass('fa-pause')){
            // if the button has the pause button, then you want to pause it
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause'); // remove pause image
            $('#carouselButton').children('span').addClass('fa-play') // add play image
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')){
            // if the button has the pause button, then you want to pause it
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play'); // remove play image
            $('#carouselButton').children('span').addClass('fa-pause') // add pause image
        }
    });

    // creating a login button slot
    $('#loginButton').click(function(){
        $("#loginModal").modal('show');
    });

    // creating a reserve button slot
    $('#reserveButton').click(function(){
        $('#reserveModal').modal('show');
    });
});