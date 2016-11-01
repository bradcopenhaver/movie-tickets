function Ticket(movieTitle, age, time, surcharge) {
	this.movieTitle = movieTitle;
	this.age = age;
	this.time = time;
	this.surcharge = surcharge;
}
function Movie(title, showtime, quality) {
	this.title = title;
	this.showtime = showtime;
	this.quality = quality;
}

var ageRange = function(age) {
	if (age < 18) {
		return "junior";
	} else if (age >= 65) {
		return "senior";
	} else {
		return "adult";
	}
}

var ticketPrice = function(ticket) {
	var price = 20;

	if (ticket.time <= 1800) {
		price = price * 0.6;
	}
	if (ticket.age === "junior" || ticket.age === "senior") {
		price = price * 0.9;
	}
	if (ticket.surcharge === "premium") {
		price = price * 1.5;
	}
	return price;
}

var movie1 = new Movie("Ben Hur", [1430, 1600, 1800], 'nonpremium');
var movie2 = new Movie("Happy Feet", [1230, 1400, 1530], 'nonpremium');
var movie3 = new Movie("Ernest Goes to Jail", [1600, 1800, 2000], 'nonpremium');
var movie4 = new Movie("Titanic", [1600, 1800, 2000], 'premium');
var movies = [movie1, movie2, movie3, movie4]



$(document).ready(function() {

	for (var i = 0; i < movies.length; i++) {
		$("#movie").append("<option value = " + i + ">" + movies[i].title + "</option>");
	}
	$("#movie").change(function(){
		$(".clearMe").each(function(){
			this.remove();
		});
		for (var i = 0; i < movies[parseInt($("#movie").val())].showtime.length; i++) {
			$("#time").append("<option class='clearMe'>" + movies[parseInt($("#movie").val())].showtime[i] + "</option>");

		$("#time").show();
		}
	});
	$("form").submit(function(event) {
		event.preventDefault();
				var age = parseInt($("#age").val());
		var ticketAge = ageRange(age);

		var time = parseInt($("#time").val())
		var movieTitle = movies[parseInt($("#movie").val())].title
		var surcharge = movies[parseInt($("#movie").val())].quality
		var ticket = new Ticket(movieTitle, ticketAge, time, surcharge);
		$("#output").text(ticketPrice(ticket));
	});
});
