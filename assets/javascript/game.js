var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

    var wins = 0;
    var losses =0;
    var guessesLeft =9;
    var yourGuesses = [];

    document.onkeyup = function (event) {

        var userGuess = event.key;
        console.log(userGuess)

        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

        if (userChoices.indexOf(userGuess) > -1) {
            
            if (userGuess === computerGuess) {
                wins++;
                guessesLeft = 9;
                yourGuesses = [];
            }

            if (userGuess != computerGuess) {
                guessesLeft --;
            }

            if (guessesLeft === 0) {
                guessesLeft = 9;
                losses++;
                $("#yourGuesses").empty().text("Your Guesses thus far: ");
            }

            guessesLeftText.textContent = "Guesses left: " + guessesLeft;
            $("#yourGuesses").append(userGuess);
            winsText.textContent = "Wins: " + wins;
            lossesText.textContent = "Losses: " + losses;

        }
    }; 