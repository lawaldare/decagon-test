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
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  })
});



$(document).ready(function() {

  // process the form
  $('#mentorForm').submit(function(event) {

      // get the form data
      // there are many ways to get this data using jQuery (you can use the class or id also)
      var formData = {
          'name'              : $('#firstName').val(),
          'email'             : $('#name').val(),
          'superheroAlias'    : $('#phoneNumber').val()
      };

      // process the form
      $.ajax({
          type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
          url         : 'process.php', // the url where we want to POST
          data        : formData, // our data object
          dataType    : 'json', // what type of data do we expect back from the server
          encode      : true
      })
          // using the done promise callback
          .done(function(data) {

              // log data to the console so we can see
              console.log(data);

              // here we will handle errors and validation messages
          });

      // stop the form from submitting the normal way and refreshing the page
      event.preventDefault();
  });

});