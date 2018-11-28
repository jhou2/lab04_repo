
$('#brandInfo').css('display','none');


let list = ['Apple', 'Dell', 'LG', 'Samsung', 'Sony'];

	// Event handler when computer is clicked
// for (let k = 0; k < 1; k++) {

let deviceBtn = $('#device-btn1');
deviceBtn.on('click', function() {
	console.log('here');
	$('#brandInfo').toggle();
		// Assign buttons to brand button on index html
	for(let j = 0; j < 5; j++) {
		let brand = list[j];
		let brandBtn = $('#brand' + (j + 1));
		brandBtn.text(brand);

	}
});
	// }






		// console.log(brandBtn4.text());



		// 	brandBtn.on('click', function(){
		// 		// $('#modelInfo').toggle();
		// 		let brandName = $('this').val();
		// 		console.log(brandBtn);
		// 	})

			// Assign models to models button on index html
			// brandBtn.on('click', function() {
			// 	for(let i = 0; i < 5; i++) {
			// 		let modelBtn = $('#model' + (i + 1));
			// 		modelBtn.text(brand.model[i]);
			// 		modelBtn.on('click', function() {
			// 			userModel = modelBtn.text();
			// 			console.log(deviceBtn.text() + brandBtn.text() + userModel);
			// 		})


			// });
		// }







// if the computer button is clicked
// forEach to go throught obj.computer.brand
// obj.computer.brand.forEach(function(e) {
//   $("#brand1").text() = e.name
// }

// if the brand button is clicked
// models = obj.computer.brand.filter(function(e) {
// 		return e.name == button.val();
// }
// for (let i = 0; i < model.length; i++) {
// $('#model' + i).text() = model[i]
// $('#model' + i).val() = model[i]
// }
// })











//Code not in use------------------------------------------




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
