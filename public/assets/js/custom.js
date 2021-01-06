(function($) {
    $(document).ready(function() {
  
      // hide navigation-section first
      $("#msg-app").hide();
  
      $("#msg-app-launcher").on("click", function(e) {
        $("#msg-app").toggle();
      });
      $("#msg-app-closer").on("click", function(e) {
        $("#msg-app").fadeOut();
      });
  
      $(window).scroll(function() {
  
        // set distance user needs to scroll before we start fadeIn
        if ($(this).scrollTop() > 50) {
          $('nav').addClass("theme-bg");
        } else {
          $('nav').removeClass("theme-bg");
        }
      });
  
  
      //Ajax Form control
      if ($("#home-form").length) {
        $('#home-form').on('submit', function(e) {
          e.preventDefault();
  
          $.ajax({
            type: $(this).attr("method"),
            url: $(this).attr("action"),
            data: $(this).serialize(),
            success: function() {
              $("#success").html("Successfully booked! Our team would contact you shortly.");
              $('#home-form')[0].reset();
            },
            error: function() {
              $("#error").html("Something went wrong!");
            }
          });
  
        });
      }
  
      if ($("#message-form").length) {
        $('#message-form').on('submit', function(e) {
          e.preventDefault();
  
          $.ajax({
            type: $(this).attr("method"),
            url: $(this).attr("action"),
            data: $(this).serialize(),
            success: function() {
              $("#msg-response-success").html("Message Sent!");
              $('#message-form')[0].reset();
            },
            error: function() {
              $("#msg-response-error").html("Error!");
            }
          });
  
        });
      }
  
      if ($("#join-form").length) {
        $('#join-form').on('submit', function(e) {
          e.preventDefault();
  
          $.ajax({
            type: $(this).attr("method"),
            url: $(this).attr("action"),
            data: $(this).serialize(),
            success: function() {
              $("#join-response-success").html("Your request accepted! Our team would get back to you shortly");
              $('#join-form')[0].reset();
            },
            error: function() {
              $("#join-response-error").html("Something went wrong!");
            }
          });
  
        });
      }
  
    });
  }(jQuery));
  