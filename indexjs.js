$('#personalInfo').hide();
$('#phoneBrandInfo').hide();
$('#computerBrandInfo').hide();
$('#modelInfo').hide();
$('#conditionInfo').hide();
$('#addAnotherDevice').hide();

$('#submit1').click(function(e){
  $('#typeInfo').hide();
  $('#personalInfo').toggle();
  e.preventDefault();
});

});
