var deck = [];

function newCard() {
	if (deck.length == 0) {
		var suits = [
	        "clubs",
	        "diamonds",
	        "hearts",
	        "spades"
	    ];
	    var ranks = [
	        "ace",
	        "2",
	        "3",
	        "4",
	        "5",
	        "6",
	        "7",
	        "8",
	        "9",
	        "10",
	        "jack",
	        "queen",
	        "king"
	    ];
	    
	    for (var s = 0; s < suits.length; s++) {
	        for (var r = 0; r < ranks.length; r++) {
	            deck.push([
	                ranks[r],
	                suits[s]
	            ]);
	        }
	    }
		
		var counter = deck.length;
	    while (counter > 0) {
	        var index = Math.floor(Math.random() * counter);
	        counter--;
	        var temp = deck[counter];
	        deck[counter] = deck[index];
	        deck[index] = temp;
	    }
		
		console.log(deck);
	}
	
	var card = deck.shift();
	$("#card-img").attr("src", "img/cards/" + card[0] + "_of_" + card[1] + ".png");
};
