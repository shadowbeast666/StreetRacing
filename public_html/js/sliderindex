 var $slider = $('#team-carousel');

   $slider.on( "swipeleft", function(){ // show next image on swipe left
        if($('.carousel-inner .item:last').hasClass('active')){
            $('#team-carousel').carousel('pause');
        } else{
            $('#team-carousel').carousel('next');
        }

    }).on( "swiperight", function(){ // show prev image on swipe right
        if($('.carousel-inner .item:first').hasClass('active')){
            $('#team-carousel').carousel('pause');
        } else{
            $('#team-carousel').carousel('prev');
        }
    });