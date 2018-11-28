
$('#brandInfo').css('display','none');
var brandName = "";
var modelName = "";

let list = ['Apple', 'Dell', 'LG', 'Samsung', 'Sony'];

	// Event handler when computer is clicked
// for (let k = 0; k < 1; k++) {

let deviceBtn = $('#device-btn1');
deviceBtn.on('click', function() {
	$('#brandInfo').toggle();
		// Assign buttons to brand button on index html
	for(let j = 0; j < 5; j++) {
		let brand = list[j];
		let brandBtn = $('#brand' + (j + 1));
		brandBtn.text(brand);
		brandBtn.on('click', function() {
			brandName = brandBtn.text();
			// console.log(brandName);
		})

	}
});


// Get a reference to the database service
var database = firebase.database();
var formSubmit = $('#form-submit');
// var userId = firebase.auth().currentUser.uid;
formSubmit.on('click', function(){
	modelName = $('#input').val();
	firebase.database().ref('/phone/' + brandName + '/' + modelName).once('value').then(function(snapshot) {
		// var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
		var model = snapshot.val();
		console.log(model);
		$('#shopping').append($('<p>').text(modelName + " " + model.price)); //???????????????????
	});
});

var checkout = $('#checkout');
checkout.on('click', function(){

	function writeUserData(name, address, email, phone, info,
		 billing_name, billing_phone, billing_address, billing_city,
		 billing_province, billing_postalcode, billing_email ) {
		firebase.database().ref('/users/' + userId).set({
			username: name,
			address: address,
			email: email,
			phone_number: phone,
			additional_info: info,
			billing_name:billing_name,
			billing_phone: billling_email,
			billing_address: billing_address,
			billing_city : billing_city,
			billing_province: billing_province,
			billing_postalcode: billing_postalcode,
			billing_email: billing_email

		});
	}

})
