
$('#brandInfo').css('display','none');
var brandName = "";

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
			console.log(brandName);
		})

	}
});


// Get a reference to the database service
var database = firebase.database();
var formSubmit = $('#form-submit');
// var userId = firebase.auth().currentUser.uid;
formSubmit.on('click', function(){
	let modelName = $('#input').val();
	firebase.database().ref('/phone/' + brandName + '/' + modelName).once('value').then(function(snapshot) {
		// var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
		let model = snapshot.val();
		console.log(model);
	});
});
