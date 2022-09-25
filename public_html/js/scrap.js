$('.carousel').carousel({
touch: true // default
})

$(".carousel").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');

  },
  allowPageScroll:"vertical"

});


Swal.fire({
  title: 'KONKURS!',
  html:
    'Po więcej informacji zapraszamy na naszego ' +
    '<a href="https://www.facebook.com/StreetRacingPoznan46/photos/rpp.1784439468440692/2456078241276808/?type=3&theater">facebooka</a> ' +
    '',
  imageUrl: 'autko.png',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
})
        