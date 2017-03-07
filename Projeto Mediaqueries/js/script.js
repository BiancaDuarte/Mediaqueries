$(document).ready(function() {
   $('.hist').click(function(event) {
	    // Preventing default action of the event
	    event.preventDefault();
	    // Getting the height of the document
	    var n = $('.historia').height();
	    console.log(n);
	    $('html, body').animate({ scrollTop: n }, 3000);
	});
});

$(document).ready(function() {
   $('.seletor').click(function(event) {
	    // Preventing default action of the event
	    event.preventDefault();
	    // Getting the height of the document
	    var n = $('.historia').height();
	    console.log(n);
	    $('html, body').animate({ scrollTop: n }, 3000);
	});
});

$(document).ready(function() {
    $('.choco').click(function(event) {
	    // Preventing default action of the event
	    event.preventDefault();
	    // Getting the height of the document
	    var n = $('.historia').height();
	    n += $('.chocolate').height();
	    $('html, body').animate({ scrollTop: n }, 3000);
	});
});

$(document).ready(function() {
   $('.loja').click(function(event) {
	    // Preventing default action of the event
	    event.preventDefault();
	    // Getting the height of the document
		var n = $('.historia').height();
		n += $('.chocolate').height();
		n += $('.lojas').height();
	    $('html, body').animate({ scrollTop: n }, 3000);
	});
});

$(document).ready(function() {
   $('.contat').click(function(event) {
	    // Preventing default action of the event
	    event.preventDefault();
	    // Getting the height of the document
		var n = $('.historia').height();
		n += $('.chocolate').height();
		n += $('.lojas').height();
		n += $('.divisao').height();
		n += $('.contatos').height();
	    $('html, body').animate({ scrollTop: n }, 3000);
	});
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}