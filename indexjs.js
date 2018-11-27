
$('#brandInfo').css('display','none');
$('#modelInfo').css('display','none');

let list = [{
		name : 'computer',
		brand : [
			{ name : 'Asus',
				model: ['ASUS Z240', 'ASUS G20CI', 'ASUS G11CD', 'ASUS G14C', 'ASUS G15D']
			},
			{ name : 'Dell',
				model: ['Dell precision', 'Dell Inspriron', 'Dell XPS w', 'Dell Inspiron 22', 'Dell PC5']
			},
			{ name : 'LG',
				model: ['LG PC1', 'LG PC2', 'LG PC3', 'LG PC4', 'LG PC5']
			},
			{ name : 'Samsung',
				model: ['S PC1', 'S PC2', 'S PC3', 'S PC4', 'S PC5']
			},
			{ name : 'Sony',
				model: ['Sony PC1', 'Sony PC2', 'Sony PC3', 'Sony PC4', 'Sony PC5']
			}
		]
	}, {
			name : 'laptop',
			brand : [
				{ name : 'Apple',
					model: ['Macbook air 11', 'Macbook air 13', 'Mac pro 11', 'Mac pro 13', 'Macintosh']
				},
				{ name : 'Dell',
					model: ['XPS 9360 13', 'XPS 9370 13', 'XPS 9360 15', 'XPS 9360 11', 'XPS']
				},
				{ name : 'LG',
					model: ['LG Gram14', 'LG laptop2', 'LG laptop3', 'LG laptop4', 'LG laptop5']
				},
				{ name : 'Samsung',
					model: ['S laptop1', 'S laptop2', 'S laptop3', 'S laptop4', 'S laptop5']
				},
				{ name : 'HP',
					model: ['HP laptop1', 'HP laptop2', 'HP laptop3', 'HP laptop4', 'HP laptop5']
				}
			]
		}, {
				name : 'phone',
				brand : [
					{ name : 'Apple',
						model: ['Iphone5', 'Iphone6s', 'Iphone8', 'IphoneX', 'Iphone5s']
					},
					{ name : 'Dell',
						model: ['Venue8', 'Venue7', 'Streak7', 'Venue10', 'Venue6']
					},
					{ name : 'LG',
						model: ['Nexus4', 'Q6', 'Nexux5', 'Nexux5X', 'V30']
					},
					{ name : 'Samsung',
						model: ['GalaxyJ3', 'Galaxy Core', 'Galaxy Nexus', 'Galaxy A5', 'Galaxy A8']
					},
					{ name : 'Sony',
						model: ['Xperia M4', 'Xperia Z', 'Xperia Z1', 'XperiaZ2', 'XperiaZ3']
					}
				]
			}, {
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
				}];

	// Event handler when computer is clicked
for (let k = 0; k < 4; k++) {
	let deviceBtn = $('#device-btn' + (k + 1));
	deviceBtn.on('click', function() {
		// Assign buttons to brand button on index html
		$('#brandInfo').show();
		for(let j = 0; j < 5; j++) {
			let brand = list[k].brand[j];
			let brandBtn = $('#brand' + (j + 1));
			brandBtn.on('click', function(){
				$('#modelInfo').toggle();
			})
			brandBtn.text(brand.name);
			// Assign models to models button on index html
			brandBtn.on('click', function() {
				for(let i = 0; i < 5; i++) {
					let modelBtn = $('#model' + (i + 1));
					modelBtn.text(brand.model[i]);
					modelBtn.on('click', function() {
						userModel = modelBtn.text();
						console.log(deviceBtn.text() + brandBtn.text() + userModel);
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

<<<<<<< HEAD
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
=======

>>>>>>> 7a7c95632e6c926b1fd62bb743e6bcc7353b9c04





<<<<<<< HEAD
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
=======




//Code not in use------------------------------------------

>>>>>>> 7a7c95632e6c926b1fd62bb743e6bcc7353b9c04



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
