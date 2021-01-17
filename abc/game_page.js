q_num = "";
input_box = "";
check_btn = "";
row = "";
function send(){
    num1 = document.getElementById("no1").value;
    num2 = document.getElementById("no2").value;
    console.log("Number 1 : " + num1);
    console.log("Number 2 : " + num2);
    input_box = "<br>Answer : <input type='number' id='input_check'>";
    check_btn = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = q_num + input_box + check_btn;
    document.getElementById("output_div").innerHTML = row;
    document.getElementById("no1").value = "";
    document.getElementById("no2").value = "";
    add();
}
player1_name = localStorage.getItem("Player1Name");
player2_name = localStorage.getItem("Player2Name");

player1_score = 0;
player2_score = 0;

document.getElementById("p1_name").innerHTML = player1_name + ":";
document.getElementById("p2_name").innerHTML = player2_name + ":";

document.getElementById("p1_score").innerHTML = player1_score;
document.getElementById("p2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function add(){
    num1 = document.getElementById("no1").value;
    num2 = document.getElementById("no2").value;
    q_num = "<h4>Q. " + num1 + "+" + num2 + "</h4>";
}

function subtract(){
    num1 = document.getElementById("no1").value;
    num2 = document.getElementById("no2").value;
    q_num = "<h4>Q. " + num1 + "-" + num2 + "</h4>";
}

function multiply(){
    num1 = document.getElementById("no1").value;
    num2 = document.getElementById("no2").value;
    q_num = "<h4>Q. " + num1 + "*" + num2 + "</h4>";
}

function divide(){
    num1 = document.getElementById("no1").value;
    num2 = document.getElementById("no2").value;
    q_num = "<h4>Q. " + num1 + "/" + num2 + "</h4>";
}