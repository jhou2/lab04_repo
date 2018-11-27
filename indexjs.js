// $('#personalInfo').hide();
//
// $('#brandInfo-computer').hide();
// $('#brandInfo-laptop').hide();
// $('#brandInfo-phone').hide();
// $('#brandInfo-accessory').hide();
//
// $('#modelInfo-computer-brand1').hide();
// $('#modelInfo-computer-brand2').hide();
// $('#modelInfo-computer-brand3').hide();
// $('#modelInfo-computer-brand4').hide();
// $('#modelInfo-computer-brand5').hide();
//
// $('#modelInfo-laptop-brand1').hide();
// $('#modelInfo-laptop-brand2').hide();
// $('#modelInfo-laptop-brand3').hide();
// $('#modelInfo-laptop-brand4').hide();
// $('#modelInfo-laptop-brand5').hide();
//
// $('#modelInfo-phone-brand1').hide();
// $('#modelInfo-phone-brand2').hide();
// $('#modelInfo-phone-brand3').hide();
// $('#modelInfo-phone-brand4').hide();
// $('#modelInfo-phone-brand5').hide();
//
// $('#modelInfo-accessory-brand1').hide();
// $('#modelInfo-accessory-brand2').hide();
// $('#modelInfo-accessory-brand3').hide();
// $('#modelInfo-accessory-brand4').hide();
// $('#modelInfo-accessory-brand5').hide();
//
// //	toggle First buttons
// $('#device-btn1').click(function(){
// 	if ( $('#brandInfo-laptop').is(':hidden')
// 		&& $('#brandInfo-phone').is(':hidden')
// 		&& $('#brandInfo-accessory').is(':hidden')) {
// 	$('#brandInfo-computer').toggle();
// }
// })
// $('#device-btn2').click(function(){
// 		if ( $('#brandInfo-computer').is(':hidden')
// 		&& $('#brandInfo-phone').is(':hidden')
// 		&& $('#brandInfo-accessory').is(':hidden')) {
// 	$('#brandInfo-laptop').toggle();
// 	}
//
// })
// $('#device-btn3').click(function(){
// 	if ( $('#brandInfo-computer').is(':hidden')
// 		&& $('#brandInfo-laptop').is(':hidden')
// 		&& $('#brandInfo-accessory').is(':hidden')) {
// 	$('#brandInfo-phone').toggle();
// }
// })
// $('#device-btn4').click(function(){
// 	if ( $('#brandInfo-computer').is(':hidden')
// 		&& $('#brandInfo-laptop').is(':hidden')
// 		&& $('#brandInfo-phone').is(':hidden')) {
// 	$('#brandInfo-accessory').toggle();
// }
// })
//

let computer = {
		name: 'computer',
		brand : [
			{ name : 'Apple',
				model: ['c-a-1', 'c-a-1', 'c-a-1', 'c-a-1', 'c-a-1']
			},
			{ name : 'Dell',
				model: ['c-d', 'c-d', 'c-d', 'c-d', 'c-d']
			},
			{ name : 'LG',
				model: [1, 2, 3, 4, 5]
			},
			{ name : 'Samsung',
				model: [1, 2, 3, 4, 5]
			},
			{ name : 'HP',
				model: [1, 2, 3, 4, 5]
			}
		]
	}

let	laptop = {
		name : 'laptop',
		brand : [
			{ name : 'Apple',
				model: [1, 2, 3, 4, 5]
			},
			{ name : 'Dell',
				model: [1, 2, 3, 4, 5]
			},
			{ name : 'LG',
				model: [1, 2, 3, 4, 5]
			},
			{ name : 'Samsung',
				model: [1, 2, 3, 4, 5]
			},
			{ name : 'HP',
				model: [1, 2, 3, 4, 5]
			}
		]
	}

let phone = {
		name : 'phone',
		brand : [
			{ name : 'Apple',
				model: [1, 2, 3, 4, 5]
			},
			{ name : 'Dell',
				model: [6, 7, 8, 9, 10]
			},
			{ name : 'LG',
				model: [1, 2, 3, 4, 5]
			},
			{ name : 'Samsung',
				model: [1, 2, 3, 4, 5]
			},
			{ name : 'HP',
				model: [1, 2, 3, 4, 5]
			}
		]
	}
let accessory = {
		name : 'accessory',
		brand : [
			{ name : 'Apple',
				model: [1, 2, 3, 4, 5]
			},
			{ name : 'Dell',
				model: [1, 2, 3, 4, 5]
			},
			{ name : 'LG',
				model: [1, 2, 3, 4, 5]
			},
			{ name : 'Samsung',
				model: [1, 2, 3, 4, 5]
			},
			{ name : 'HP',
				model: [1, 2, 3, 4, 5]
			}
		]
	}

let list = [computer, laptop, phone, accessory];

	// Event handler when computer is clicked
for (let k = 0; k < 4; k++) {
	let deviceBtn = $('#device-btn' + (k + 1));
	deviceBtn.on('click', function() {
		// Assign buttons to brand button on index html
		$('#brandInfo').show();
		for(let j = 0; j < 5; j++) {
			let brand = list[k].brand[j];
			let brandBtn = $('#brand' + (j + 1));
			brandBtn.text(brand.name);
			// Assign models to models button on index html
			brandBtn.on('click', function() {
				for(let i = 0; i < 5; i++) {
					let modelBtn = $('#model' + (i + 1));
					modelBtn.text(brand.model[i]);
					modelBtn.on('click', function() {
						userModel = modelBtn.text();
						console.log(userModel);
					})
				}
			});
		}
	});
}

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

//	toggle computer-brand buttons

// $('#computer-brand1').click(function(){
// 	if ( $('#modelInfo-computer-brand2').is(':hidden')
// 		&& $('#modelInfo-computer-brand3').is(':hidden')
// 		&& $('#modelInfo-computer-brand4').is(':hidden')
// 		&& $('#modelInfo-computer-brand5').is(':hidden')
// 		) {
// 	$('#modelInfo-computer-brand1').toggle();
// }
// })
// $('#computer-brand2').click(function(){
// 	if ( $('#modelInfo-computer-brand1').is(':hidden')
// 		&& $('#modelInfo-computer-brand3').is(':hidden')
// 		&& $('#modelInfo-computer-brand4').is(':hidden')
// 		&& $('#modelInfo-computer-brand5').is(':hidden')
// 		) {
// 	$('#modelInfo-computer-brand2').toggle();
// }
// })
// $('#computer-brand3').click(function(){
// 	if ( $('#modelInfo-computer-brand1').is(':hidden')
// 		&& $('#modelInfo-computer-brand2').is(':hidden')
// 		&& $('#modelInfo-computer-brand4').is(':hidden')
// 		&& $('#modelInfo-computer-brand5').is(':hidden')
// 		) {
// 	$('#modelInfo-computer-brand3').toggle();
// }
// })
// $('#computer-brand4').click(function(){
// 	if ( $('#modelInfo-computer-brand1').is(':hidden')
// 		&& $('#modelInfo-computer-brand2').is(':hidden')
// 		&& $('#modelInfo-computer-brand3').is(':hidden')
// 		&& $('#modelInfo-computer-brand5').is(':hidden')
// 		) {
// 	$('#modelInfo-computer-brand4').toggle();
// }
// })
// $('#computer-brand5').click(function(){
// 	if ( $('#modelInfo-computer-brand1').is(':hidden')
// 		&& $('#modelInfo-computer-brand2').is(':hidden')
// 		&& $('#modelInfo-computer-brand3').is(':hidden')
// 		&& $('#modelInfo-computer-brand4').is(':hidden')
// 		) {
// 	$('#modelInfo-computer-brand5').toggle();
// }
// })
//
// //	toggle laptop-brand buttons
//
// $('#laptop-brand1').click(function(){
// 	if ( $('#modelInfo-laptop-brand2').is(':hidden')
// 		&& $('#modelInfo-laptop-brand3').is(':hidden')
// 		&& $('#modelInfo-laptop-brand4').is(':hidden')
// 		&& $('#modelInfo-laptop-brand5').is(':hidden')
// 		) {
// 	$('#modelInfo-laptop-brand1').toggle();
// }
// })
// $('#laptop-brand2').click(function(){
// 	if ( $('#modelInfo-laptop-brand1').is(':hidden')
// 		&& $('#modelInfo-laptop-brand3').is(':hidden')
// 		&& $('#modelInfo-laptop-brand4').is(':hidden')
// 		&& $('#modelInfo-laptop-brand5').is(':hidden')
// 		) {
// 	$('#modelInfo-laptop-brand2').toggle();
// }
// })
// $('#laptop-brand3').click(function(){
// 	if ( $('#modelInfo-laptop-brand1').is(':hidden')
// 		&& $('#modelInfo-laptop-brand2').is(':hidden')
// 		&& $('#modelInfo-laptop-brand4').is(':hidden')
// 		&& $('#modelInfo-laptop-brand5').is(':hidden')
// 		) {
// 	$('#modelInfo-laptop-brand3').toggle();
// }
// })
// $('#laptop-brand4').click(function(){
// 	if ( $('#modelInfo-laptop-brand1').is(':hidden')
// 		&& $('#modelInfo-laptop-brand2').is(':hidden')
// 		&& $('#modelInfo-laptop-brand3').is(':hidden')
// 		&& $('#modelInfo-laptop-brand5').is(':hidden')
// 		) {
// 	$('#modelInfo-laptop-brand4').toggle();
// }
// })
// $('#laptop-brand5').click(function(){
// 	if ( $('#modelInfo-laptop-brand1').is(':hidden')
// 		&& $('#modelInfo-laptop-brand2').is(':hidden')
// 		&& $('#modelInfo-laptop-brand3').is(':hidden')
// 		&& $('#modelInfo-laptop-brand4').is(':hidden')
// 		) {
// 	$('#modelInfo-laptop-brand5').toggle();
// }
// })
//
//
// //	toggle phone-brand buttons
//
// $('#phone-brand1').click(function(){
// 	if ( $('#modelInfo-phone-brand2').is(':hidden')
// 		&& $('#modelInfo-phone-brand3').is(':hidden')
// 		&& $('#modelInfo-phone-brand4').is(':hidden')
// 		&& $('#modelInfo-phone-brand5').is(':hidden')
// 		) {
// 	$('#modelInfo-phone-brand1').toggle();
// }
// })
// $('#phone-brand2').click(function(){
// 	if ( $('#modelInfo-phone-brand1').is(':hidden')
// 		&& $('#modelInfo-phone-brand3').is(':hidden')
// 		&& $('#modelInfo-phone-brand4').is(':hidden')
// 		&& $('#modelInfo-phone-brand5').is(':hidden')
// 		) {
// 	$('#modelInfo-phone-brand2').toggle();
// }
// })
// $('#phone-brand3').click(function(){
// 	if ( $('#modelInfo-phone-brand1').is(':hidden')
// 		&& $('#modelInfo-phone-brand2').is(':hidden')
// 		&& $('#modelInfo-phone-brand4').is(':hidden')
// 		&& $('#modelInfo-phone-brand5').is(':hidden')
// 		) {
// 	$('#modelInfo-phone-brand3').toggle();
// }
// })
// $('#phone-brand4').click(function(){
// 	if ( $('#modelInfo-phone-brand1').is(':hidden')
// 		&& $('#modelInfo-phone-brand2').is(':hidden')
// 		&& $('#modelInfo-phone-brand3').is(':hidden')
// 		&& $('#modelInfo-phone-brand5').is(':hidden')
// 		) {
// 	$('#modelInfo-phone-brand4').toggle();
// }
// })
// $('#phone-brand5').click(function(){
// 	if ( $('#modelInfo-phone-brand1').is(':hidden')
// 		&& $('#modelInfo-phone-brand2').is(':hidden')
// 		&& $('#modelInfo-phone-brand3').is(':hidden')
// 		&& $('#modelInfo-phone-brand4').is(':hidden')
// 		) {
// 	$('#modelInfo-phone-brand5').toggle();
// }
// })
//
// //	toggle Accessory-brand buttons
//
// $('#accessory-brand1').click(function(){
// 	if ( $('#modelInfo-accessory-brand2').is(':hidden')
// 		&& $('#modelInfo-accessory-brand3').is(':hidden')
// 		&& $('#modelInfo-accessory-brand4').is(':hidden')
// 		&& $('#modelInfo-accessory-brand5').is(':hidden')
// 		) {
// 	$('#modelInfo-accessory-brand1').toggle();
// }
// })
// $('#accessory-brand2').click(function(){
// 	if ( $('#modelInfo-accessory-brand1').is(':hidden')
// 		&& $('#modelInfo-accessory-brand3').is(':hidden')
// 		&& $('#modelInfo-accessory-brand4').is(':hidden')
// 		&& $('#modelInfo-accessory-brand5').is(':hidden')
// 		) {
// 	$('#modelInfo-accessory-brand2').toggle();
// }
// })
// $('#accessory-brand3').click(function(){
// 	if ( $('#modelInfo-accessory-brand1').is(':hidden')
// 		&& $('#modelInfo-accessory-brand2').is(':hidden')
// 		&& $('#modelInfo-accessory-brand4').is(':hidden')
// 		&& $('#modelInfo-accessory-brand5').is(':hidden')
// 		) {
// 	$('#modelInfo-accessory-brand3').toggle();
// }
// })
// $('#accessory-brand4').click(function(){
// 	if ( $('#modelInfo-accessory-brand1').is(':hidden')
// 		&& $('#modelInfo-accessory-brand2').is(':hidden')
// 		&& $('#modelInfo-accessory-brand3').is(':hidden')
// 		&& $('#modelInfo-accessory-brand5').is(':hidden')
// 		) {
// 	$('#modelInfo-accessory-brand4').toggle();
// }
// })
// $('#accessory-brand5').click(function(){
// 	if ( $('#modelInfo-accessory-brand1').is(':hidden')
// 		&& $('#modelInfo-accessory-brand2').is(':hidden')
// 		&& $('#modelInfo-accessory-brand3').is(':hidden')
// 		&& $('#modelInfo-accessory-brand4').is(':hidden')
// 		) {
// 	$('#modelInfo-accessory-brand5').toggle();
// }
// })





// $('#submit1').click(function(e){
//  // $('#deviceInfo').hide();
//  if ($('#')) {}
//   $('#brandInfo-computer').toggle();
//   e.preventDefault();
// });

// $('#submit2').click(function(e){
//   $('#deviceInfo').hide();
//   $('#brandInfo').hide();

//   $('#personalInfo').toggle();
//   e.preventDefault();
// });


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
