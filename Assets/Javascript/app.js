// Initialize Firebase
var config = {
    apiKey: "AIzaSyCu7jLLQI6mjJfhKKeEzvKUp9W0voZSFbU",
    authDomain: "week7-train.firebaseapp.com",
    databaseURL: "https://week7-train.firebaseio.com",
    storageBucket: "week7-train.appspot.com",
    messagingSenderId: "102563349887"
};

firebase.initializeApp(config);

var database = firebase.database();

$('#trainSubmit').on("click", function(){
	console.log("faras");
	var tName = $('#trainNameInput').val().trim();
	var tDestination = $('#trainDesInput').val().trim();
	var tTimeMil = $('#firstTrainInput').val().trim();
	var tTimeTrain = moment(tTimeMil).format('ha z')
	var tFrequency = $('#frequencyInput').val().trim();

	console.log(tTimeMil);
	console.log(tTimeTrain)
	
	return false;
});