
var valueofAnswerTab =[5][4];
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
    chart.push(this.id);
    console.log(chart);
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
    let result = document.getElementById("result");
    //リザルトを表示
    result.style.display = "block";
    return;
}