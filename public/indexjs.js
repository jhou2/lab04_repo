
// $('#brandInfo').css('display','none');
var brandName = "";
var modelName = "";
var newKey = "";
var cart = [];
var itemsInCart = [];
let list = ['Apple', 'Dell', 'LG', 'Samsung', 'Hwawei'];

	// Event handler when computer is clicked
// for (let k = 0; k < 1; k++) {

let deviceBtn = $('#device-btn1');
deviceBtn.on('click', function() {
	// $('#brandInfo').toggle();

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

		var model = snapshot.val();
		var itemName = modelName + " " + model.price;
		console.log(model);
		if (model==null) {
			alert("We're currently not accepting this model.")
		}else{




		var item = $('#shopping').append($('<p>').text(itemName));
		// var item = $('#shopping').append($('<p>').text(modelName + " " + model.price));
		// var cart = [];
		// cart.push(item);
		itemsInCart.push(itemName);
		console.log(itemsInCart);


		var sum = 0;
		sum = parseInt(model.price.substring(1, model.price.length));
		cart.push(sum);
		console.log(cart);
		var total = 0;
		for (var i = 0; i < cart.length; i++){
			total += cart[i];
			$('#total').html("Total: $"+total);
			// console.log(total);
		}

}
	});
	// console.log(cart);


});

var count = 0;
var checkout = $('#checkout');


checkout.on('click', function(){
// count ++;
// console.log("hello");

	// function writeUserData() {
		firebase.database().ref('/users/').push().set({
			billing_name:$('#billing-name').val(),
			billing_phone: $('#billing-phone').val(),
			billing_address: $('#billing-address').val(),
			billing_city : $('#billing-city').val(),
			billing_province: $('#billing-province').val(),
			billing_postalcode: $('#billing-postalcode').val(),
			billing_email: $('#billing-email').val() ,
			cart: itemsInCart
		});


		// const postKey = firebase.database().ref().child('users').push().key;







			// firebase.database().ref('/phone/' + brandName + '/' + modelName).once('value').then(function(snapshot) {
			//
			//
			//
			// });


	// }

})
