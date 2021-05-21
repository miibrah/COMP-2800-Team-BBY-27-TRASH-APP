/* Retrieves the restaurant ID parameter from the URL search string. */
if (document.location.search.substring(1)) {
	const urlParams = new URLSearchParams(document.location.search.substring(1).toLowerCase());
	const restaurantID = urlParams.get('restaurantid');
	if (restaurantID != "") {

		/* Reads the restaurant's info from Firestore. */
		let restaurant = db.collection("restaurants").doc(restaurantID);
		restaurant.onSnapshot(function(doc) {
			if (doc.exists) {
				$("#success-item-name").text(doc.data().name);
			} else {
				console.log("No matching restaurant ID.");
				failRetrieval();
			}
		});
	} else {
		failRetrieval();
	}	
} else {
	failRetrieval();
}

/* Automatically redirects to the Main page after 5 seconds. */
$(document).ready(() => {
	setTimeout(() => {
		window.location.assign("landing.html");
	}, 5000);
});

/*
    Hides page elements if it fails to retrieve data from 
    Heroku
*/
function failRetrieval() {
	$("#success-item-name").text("N/A");	
}