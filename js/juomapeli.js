function newCard() {
	var arvot = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
	var maat = ["clubs", "diamonds", "hearts", "spades"];

	var arvo = Math.floor(Math.random() * (arvot.length + 1));
	var maa = Math.floor(Math.random() * maat.length);

	var pee = document.getElementById("kortti-img");

	if (arvo == 13) {
		pee.src = "img/joker.png";
	} else {
		pee.src = "img/" + arvot[arvo] + "_of_" + maat[maa] + ".png";
	}
};
