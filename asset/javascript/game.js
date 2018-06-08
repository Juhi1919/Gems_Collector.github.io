var win= 0;
var losses= 0;
var total= 0;
var Random= 0;
var red= 0;
var green= 0;
var blue= 0;
var yellow= 0;

function values() {
    Random=Math.floor(Math.random()*(101)+19);
    $("#targetvalue").html("<p>Computer Score: "+ Random+"</p>");
    total= 0;
    $("#totalscore").html("<p>Your Total Score: "+ total+"</p>");


   red= Math.floor(Math.random()*(11)+1);
   console.log("red"+red);
   green= Math.floor(Math.random()*(11)+1);
   console.log("green"+green);
   blue= Math.floor(Math.random()*(11)+1);
   console.log("blue"+blue);
   yellow= Math.floor(Math.random()*(11)+1);
   console.log("yellow"+yellow);
}
   
function totalScore() {
 		
    if(total >Random){
        losses++
    $("#lose").html("<p>Losses: "+ losses+"</p>");	
   alert("You Lose the game");
   values();
}

    if(total ===Random){
        win++
    $("#win").html("<p>Wins: "+ win+"</p>");	
   alert("You winner");
  values();
}
}

$(document).ready(function(){
    values();

    $('#red').on ('click', function(){
		total= total + red;
		$("#totalscore").html("<p>Your Total Score: "+ total+"</p>");
		totalScore();
    });
    $('#green').on ('click', function(){
		total= total + red;
		$("#totalscore").html("<p>Your Total Score: "+ total+"</p>");
		totalScore();
    });	
    $('#blue').on ('click', function(){
		total= total + red;
		$("#totalscore").html("<p>Your Total Score: "+ total+"</p>");
		totalScore();
    });	
    $('#yellow').on ('click', function(){
		total= total + red;
		$("#totalscore").html("<p>Your Total Score: "+ total+"</p>");
		totalScore();
	});	
});