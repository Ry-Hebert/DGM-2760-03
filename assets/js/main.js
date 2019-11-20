checkGuess = (x, y) =>
{
    let check = x == y
    console.log(check)
    return check
}

guessingGame = () =>
{
    // Because we're trying to get a random number between 1 and 15 we are going to pass 15 (Our number of numbers we're looking for) add then add +1 to the results of randomGen(15)(Which should provided us with numbers between 0-14) so that our value of randomNumber will be somewhere between 1-15.
    const randomNumber = randomGen(15) + 1

    // Logged to Console for testing purposes.
    console.log(randomNumber)
}

// Generates a more cryptographically secure random number than simply (Math.random). The % operator returns the remainder of the random number divided by 15.
randomGen = (x) =>{return window.crypto.getRandomValues(new Uint32Array(1))[0] % x}

contentLoad = () =>
{
    let pos1 = document.querySelector('#pageTitle')
    let pos2 = document.querySelector('#pageSlogan')

    pos1.textContent=`Guessing Game`
    pos2.textContent=`This is a simple number based guessing game.`
}

submitGuess() = () =>
{
    
}