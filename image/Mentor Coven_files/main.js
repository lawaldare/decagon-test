$(document).ready(function(){
  $('.testimony-box').slick({
    slidesToShow: 3,
    slidesToScroll:1,
    autoplay: true,
    dots: true,
    autoplaySpeed:2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true
        }
  
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint:425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  })
})