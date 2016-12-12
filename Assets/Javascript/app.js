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

// submit button adding train data
$('#trainSubmit').on("click", function(){
	var tName = $('#trainNameInput').val().trim();
	var tDestination = $('#trainDesInput').val().trim();
	var tTimeMil = $('#firstTrainInput').val().trim();
	var tFrequency = $('#frequencyInput').val().trim();

	// Creates local "temporary" object for holding train data
	var addNewTrain = {
		name: tName,
		destination: tDestination,
		firstTrain: tTimeMil,
		frequency: tFrequency
	}	

	//Sending data to the firebase database
	database.ref().push(addNewTrain);

	//Clear the textboxes
	$('#trainNameInput').val("");
	$('#trainDesInput').val("");
	$('#firstTrainInput').val("");
	$('#frequencyInput').val("");

	
	return false;
});


database.ref().on("child_added", function(childSnapshot, preveChildKey){
	var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var firstTrainTime = childSnapshot.val().firstTrain;
    var trainFrequency = childSnapshot.val().frequency;

    //Time as of now
    var timeNow = moment();

    //time difference
    var timeDifference = moment().diff(moment(firstTrainTime), "minutes");

	//Minutes till next train    
	var minutesTillNextTrain =(trainFrequency - (timeDifference % trainFrequency));
	
	//Time of next train 
	var timeOfNextTrain =  moment(timeOfNextTrain).add(minutesTillNextTrain,"minutes").format("hh:mm a");


    $("#trainScheduleShow > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
  		trainFrequency + "</td><td>" + timeOfNextTrain + "</td><td>" + minutesTillNextTrain + "</td></tr>");
});