// Code By Webdevtrick ( https://webdevtrick.com )
$(document).ready(function() {
    // label animation
    $('input').each(function() {
  
      $(this).on('focus', function() {
        $(this).parent('.css').addClass('active');
      });
  
      $(this).on('blur', function() {
        if ($(this).val().length == 0) {
          $(this).parent('.css').removeClass('active');
        }
      });
  
      if ($(this).val() != '') $(this).parent('.css').addClass('active');
  
    });
  
    // count characters
    var text_max = 140;
    var warning_msg = "";
    $('#character_remaining').html('Characters remaining: ' + text_max);
  
    $('input').keyup(function() {
      if ($('#link').val().length > 0) {
        text_max = 116;
      } else {
        var text_max = 140;
      }
  
      var text_length = $('#txt').val().length;
      var text_remaining = text_max - text_length;
      if (text_remaining < 0) {
        warning_msg = "- too long!";
        $('#character_remaining').addClass('warning');
      } else {
        warning_msg = "";
        $('#character_remaining').removeClass('warning');
      }
  
      $('#character_remaining').html('Characters remaining: ' + text_remaining + " " + warning_msg);
    });
    // generate intent
    $('.btn').on('click', function() {
      var start_text = 'https://twitter.com/intent/tweet?text=';
      var generated_tweet = encodeURIComponent($('#txt').val());
      if ($('#link').val().length > 0) {
        var generated_url = "&url=" + encodeURIComponent($('#link').val());
      } else {
        var generated_url = "";
      }
      if ($('#txt').val().length > 0) {
        $('#intent').html(start_text + generated_tweet + generated_url);
      } else {
        $('#intent').html("Your tweet is empty!")
      }
    })
  });