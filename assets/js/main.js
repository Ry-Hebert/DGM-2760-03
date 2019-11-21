let guessCount = 0;

// Because we're trying to get a random number between 1 and 15 we are going to pass 15 (Our number of numbers we're looking for) add then add +1 to the results of randomGen(15)(Which should provided us with numbers between 0-14) so that our value of randomNumber will be somewhere between 1-15.
const randomNumber = randomGen(15) + 1
// Generates a more cryptographically secure random number than simply (Math.random). The % operator returns the remainder of the random number divided by 15.
randomGen = (x) =>{return window.crypto.getRandomValues(new Uint32Array(1))[0] % x}

checkGuess = (x, y) =>
{
    let check = x == y
    console.log(check)
    return check
}

contentLoad = () =>
{
    let pos1 = document.querySelector('#pageTitle')
    let pos2 = document.querySelector('#pageSlogan')

    pos1.textContent=`Guessing Game`
    pos2.textContent=`This is a simple number based guessing game.`
}

submitGuess() = () =>
{
    // Logged to Console for testing purposes.
    console.log(`Random Number is: ${randomNumber}`)
    let guess = document.querySelector('#numberGuess').value;

    // Check to see if value is grabbed
    console.log(`Player guess is: ${guess}`);

    if(guess < 1 || guess > 15)
    {
        document.querySelector('#feedback').textContent(`Please chose a number between 1 and 15`)
    }
    else
    {
        let check = checkGuess(guess, randomNumber)

        if(check == true){}
        else{}

    }

}