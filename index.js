const answer=Math.floor(Math.random() *10 +1 ) ;
console.log(answer);
let guesses = 0;

document.getElementById("submitBtn").onclick= function (){

	let guess= document.getElementById("guessField").value ;
	guesses +=1;

	if (guess == answer )
	{
		document.getElementById("answerMsg").innerHTML = `Good Answer ! the number was ${answer} <br> and it took you ${guesses} guesses`;
	}
	else if(guess>answer)
	{
		document.getElementById("answerMsg").innerHTML = `Go Lower`;
	}
	else 
	{
		document.getElementById("answerMsg").innerHTML = `Go Higher`;
	}
}