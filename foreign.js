
var valueofAnswerTab =[];
var answer1_1 = [];
var answer1_2 = [];
var answer1_3 = [];
var answer1_4 = [];
var answer2_1 = [];
var answer2_2 = [];
var answer2_3 = [];
var answer3_1 = [];
var answer3_2 = [];
var answer3_3 = [];
var answer3_4 = [];
var answer4_1 = [];
var answer4_2 = [];
var answer4_3 = [];
var answer5_1 = [];
var answer5_2 = [];
var answer5_3 = [];
var answer5_4 = [];

var score = {typeA:0,typeB:0,typeC:0,typeD:0,typeE:0,typeF:0,typeG:0,typeH:0};
var chart=[];


function oneofFour(){
    let idname = "question"+num;
    //console.log(idname);
    let question = document.getElementById(idname);
    question.style.display = "none";
    let nextidname = "question"+(++num);
    //console.log(nextidname);
    let nextquestion = document.getElementById(nextidname);
    nextquestion.style.display = "block";
    
    /**register answer info (answer (n))*/
    chart.push(id);
    console.log(id);
    return num;
}

function back(){
    let idname = "question"+num;
    //console.log(idname);
    let question = document.getElementById(idname);
    question.style.display = "none";
    let nextidname = "question"+(--num);
    //console.log(nextidname);
    let nextquestion = document.getElementById(nextidname);
    nextquestion.style.display = "block";
    
    /* delete answer info[answer (--num)] */
    chart.pop();
    console.log(chart);
    return num;
}

function accumulate(){
    //どの性格かを求める
    console.log(chart);
    //性格に合わせたデータを取得

    //リザルトに設定
    document.getElementById("question6").style.display="none";
    let result = document.getElementById("resultsheet");
    //リザルトを表示
    result.style.display = "block";
    return;
}