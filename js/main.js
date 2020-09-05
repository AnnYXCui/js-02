//main.js for learing JS in Day 2
var teamRow = "";
var winRow = 0;
var lossRow = 0;
var htmlBuilder = "";
var table = document.getElementById("table");

teams = ["Braves", "Nationals","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Dogers","Diamondbacks","Giants","Padres","Rockies",];
wins = [89,79,74,72,51,81,76,74,67,62,93,75,69,66,60];
losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];

var tempHighWins = 0;
var tempLeader = 0;

for (var i= 0; i < teams.length; i++){
  if(wins[i] >= tempHighWins){
    tempHighWins = wins[i];
    tempLeader = i;
  }
}
console.log(tempLeader);

// online resources:
// W3School
// http://1bestcsharp.blogspot.com/2017/03/javascript-populate-html-table-from-array.html
for (var j = 1; j <= teams.length; j++) {
   table.rows[j].cells[0].innerHTML = teams[j-1];
   table.rows[j].cells[1].innerHTML = wins[j-1];
   table.rows[j].cells[2].innerHTML = losses[j-1];
if (j == tempLeader + 1) {
     var teamsText = teams[j-1];
     table.rows[j].cells[0].innerHTML = teamsText.bold();
     var winsNumber = wins[j-1];
     table.rows[j].cells[1].innerHTML = "<b>" + winsNumber + "</b>"
     var lossesNumber = losses[j-1];
     table.rows[j].cells[2].innerHTML = "<b>" + lossesNumber + "</b>"
   }
       }
