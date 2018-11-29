
$('#brandInfo').css('display','none');
var brandName = "";
var modelName = "";
var cart = [];
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

		var item = $('#shopping').append($('<p>').text(modelName + " " + model.price));
		// var item = $('#shopping').append($('<p>').text(modelName + " " + model.price));
		// var cart = [];
		// cart.push(item);

		var sum = 0;
		sum = parseInt(model.price.substring(1, model.price.length));
		cart.push(sum);
		console.log(cart);
		var total = 0;
		for (var i = 0; i < cart.length; i++){
			total += cart[i];
			$('#total').html("Total: $"+total);
			console.log(total);
		}

	});
	// console.log(cart);


});

function callback(){

}

var count = 0;
var checkout = $('#checkout');


checkout.on('click', function(){
// count ++;
// console.log("hello");

	// function writeUserData() {
		firebase.database().ref('/users/').push().set({
			username: $('#name').val(),
			address: $('#address').val(),
			email: $('#email').val(),
			phone_number: $('#phone').val(),
			additional_info: $('#info').val(),
			billing_name:$('#billing-name').val(),
			billing_phone: $('#billing-phone').val(),
			billing_address: $('#billing-address').val(),
			billing_city : $('#billing-city').val(),
			billing_province: $('#billing-province').val(),
			billing_postalcode: $('#billing-postalcode').val(),
			billing_email: $('#billing-email').val()

		});

	// }

})
