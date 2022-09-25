  var $slider = $('#myCarousel');

   $slider.on( "swipeleft", function(){ // show next image on swipe left
        if($('.carousel-inner .item:last').hasClass('active')){
            $('#myCarousel').carousel('pause');
        } else{
            $('#myCarousel').carousel('next');
        }

    }).on( "swiperight", function(){ // show prev image on swipe right
        if($('.carousel-inner .item:first').hasClass('active')){
            $('#myCarousel').carousel('pause');
        } else{
            $('#myCarousel').carousel('prev');
        }
    });