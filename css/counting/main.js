/*---------------- progress bar, animated numbers,  ----------------*/
    $(document).ready(function() {

        //Animated Number
        $.fn.animateNumbers = function(stop, commas, duration, ease) {
            return this.each(function() {
                var $this = $(this);
                var start = parseInt($this.text().replace(/,/g, ""));
                commas = (commas === undefined) ? true : commas;
                $({
                    value: start
                }).animate({
                    value: stop
                }, {
                    duration: duration == undefined ? 1000 : duration,
                    easing: ease == undefined ? "swing" : ease,
                    step: function() {
                        $this.text(Math.floor(this.value));
                        if (commas) {
                            $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                        }
                    },
                    complete: function() {
                        if (parseInt($this.text()) !== stop) {
                            $this.text(stop);
                            if (commas) {
                                $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                            }
                        }
                    }
                });
            });
        };

        $('.counting-number').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
            var $this = $(this);
            if (visible) {

                $this.animateNumbers($this.data('digit'), false, $this.data('duration'));
                $this.unbind('inview');
            }
        });





$('.contact').click(function(){  
var error = 0;

if($("#name").val()==""){
  $("#name").addClass("error");
  error =1;
}else
{
   $("#name").removeClass("error");
}

if($("#email").val()=="")
{
  $("#email").addClass("error");
  error =1;
}else
{
   $("#email").removeClass("error");
}

if($("#phone").val()=="")
{
  $("#phone").addClass("error");
  error =1;
}else
{
   $("#phone").removeClass("error");
}

if($("#mktg").val()=="")
{
  $("#mktg").addClass("error");
  error =1;
}else
{
   $("#mktg").removeClass("error");
}

if($("#time2call").val()=="")
{
  $("#time2call").addClass("error");
  error =1;
}else
{
   $("#time2call").removeClass("error");
}

if($("#message").val()=="")
{
  $("#message").addClass("error");
  error =1;
}else
{
   $("#message").removeClass("error");
}

if(error)
{
   $(".alert").removeClass("successmsg");
  $(".alert").addClass("errmsg");
  $(".alert").html("All fields are mandatory.");
   $(".alert").fadeIn();

  return false;
}
else
{

  $('.contact').fadeOut();



$.ajax({
  method: "GET",
  url: "ajax.php",
  data: { req:"sendDataToContact",  frmName: $("#name").val(),  frmEmail: $("#email").val(),  frmPhone: $("#phone").val(), frmMktg: $("#mktg").val(), frmTime2Call: $("#time2call").val(), frmMessage: $("#message").val(), frmReferredBy: $("#referred_by").val() }
  })


.done(function( msg ){
 
    if(msg){

      if(msg=="1")
      {
      
       
      $(".alert").addClass("successmsg");
      $(".alert").removeClass("errmsg");
      $(".alert").html("Message sent successfully.");
       $(".alert").fadeIn();

        setTimeout(hideMessageBox, 3000);

      }
      else
      {
        
        $(".alert").addClass("errmsg");
        $(".alert").removeClass("successmsg");
        $(".submit").fadeIn();
        $(".alert").html("Can't send message. Please try again.");  
      }

       
            }
         

            });




}

 
});


var hideMessageBox = function(){
$(".enqf-in input[type=text]").val("");
$(".enqf-in input[type=select]").val("");
$(".enqf-in input[type=option]").val("");
$(".enqf-in textarea").val("");
  $(".contact").fadeIn();
  $(".academy").fadeIn();
    $(".alert").fadeOut();
  $(".alert").html("");
};


var hideNewsLetter = function(){

$("#subscriptionname").val("");
$("#subscriptionemail").val("");
$("#subscriptionemail").attr("placeholder","Enter Email");

 $(".alert2").fadeOut(); 
  $(".alert2").html("");
};






    });


 

