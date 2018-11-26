$('#personalInfo').hide();
// $('#brandInfo-computer').hide();
// $('#brandInfo-phone').hide();
$('#brandInfo').hide();


$('#button1').click(function(e){
  $('#deviceInfo').hide();
  $('#brandInfo').toggle();
  e.preventDefault();
});

$('#button2').click(function(e){
  $('#deviceInfo').hide();
  $('#brandInfo').toggle();
  // $('#personalInfo').toggle();
  e.preventDefault();
});

$('#button3').click(function(e){
  $('#deviceInfo').hide();
  $('#brandInfo').toggle();
  e.preventDefault();
});

$('#button4').click(function(e){
  $('#deviceInfo').hide();
  $('#brandInfo').toggle();
  // $('#personalInfo').toggle();
  e.preventDefault();
});

$('#button5').click(function(e){
  $('#deviceInfo').hide();
  $('#brandInfo').toggle();
  e.preventDefault();
});



// var view = $("#tslshow");
// var move = "100px";
// var sliderLimit = "-1000";
//
// $("#rightArrow").click(function(){
//
//     var currentPosition = parseInt(view.css("left"));
//     if (currentPosition >= parseInt(sliderLimit)) view.stop(false,true).animate({left:"-="+move},{ duration: 400})
//
// });
//
// $("#leftArrow").click(function(){
//
//     var currentPosition = parseInt(view.css("left"));
//     if (currentPosition <= 0) view.stop(false,true).animate({left:"+="+move},{ duration: 400})
//
// });
