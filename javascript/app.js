
//set up for the test questions and answers and multiple choices as an array of objects


var quiz = [
	{
		question : "Q1: What is 2+2?",
		choices : [
						"2",
						"4",
						"10",
						"3"
					],

		correct : "4"
	}, 

	{
		question : "What is the best day of the week?",
		choices : [
						"Friday",
						"Tuesday",
						"Monday",
						"Wednesday"
					],
		correct : "Friday"
	},

	{
		question : "What is my name?",
		choices : [
						"John",
						"Joe",
						"Alex",
						"Kimber"
					],
		correct : "Alex"
	},

];

//here I am setting the question number to 0
var questionCount = 0;

//Here I display my first object from my quiz array as a question and answers as buttons 
function q1 (){
	$("#testArea").html(quiz[0].question);
	$('#answerA').append('<button>' + quiz[0].choices[0]);
	$('#answerB').append('<button>' + quiz[0].choices[1]);
	$('#answerC').append('<button>' + quiz[0].choices[2]);
	$('#answerD').append('<button>' + quiz[0].choices[3]);

}

//here I run my q1 function when the player hits the start button 
$('#start').click(q1);



//All of the code above run and works 




//Here I want to check if the button that the user clicked on was the correct answer 
function checkAnswer(){
	console.log(this);
	var userChoice = $(this); 
	// console.log('userChoice ' , userChoice);
	// console.log('quiz ', quiz[0].correct);
	
	if(userChoice == quiz[0].correct){
		alert("You're Right!");
	}else{
		alert("You're Wrong!");
	}
}

$('#answerA').on("click", checkAnswer);
$('#answerB').on("click", checkAnswer);
$('#answerC').on("click", checkAnswer);
$('#answerD').on("click", checkAnswer);




