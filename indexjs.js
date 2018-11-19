$('#personalInfo').hide();

$('#submit1').click(function(e){
  $('#deviceInfo').hide();
  $('#personalInfo').toggle();
  e.preventDefault();
});
