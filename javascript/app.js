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

var questionCount = 0;
var userSelections = [];

function q1 (){
	$("#testArea").html(quiz[0].question);
	$('#answerA').append('<div><button>' + quiz[0].choices[0]);
	$('#answerB').append('<div><button>' + quiz[0].choices[1]);
	$('#answerC').append('<div><button>' + quiz[0].choices[2]);
	$('#answerD').append('<div><button>' + quiz[0].choices[3]);

}

$('#start').click(q1);




function checkAnswer(){
	if(userChoice = quiz[0].correct){
		alert("You're Right!");
	}else if(userChoice != quiz[0].correct){
		alert("You're Wrong!");
	}
}
var userChoice = $('#answerA').on("click", checkAnswer);

console.log(userChoice);
console.log(quiz[0].correct);


