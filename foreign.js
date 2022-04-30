
var valueofAnswerTab ={
    11:[2.1,5.1,2.1,5.1,10.1,2.1,2.1,2.1],
    12:[10.1,10.1,10.1,2.1,2.1,2.1,5.1,2.1],
    13:[5.1,2.1,5.1,2.1,2.1,10.1,10.1,5.1],
    14:[2.1,2.1,2.1,10.1,5.1,5.1,2.1,10.1],
    21:[],
    22:[],
    23:[],
    31:[],
    32:[],
    33:[],
    34:[],
    41:[],
    42:[],
    43:[],
    51:[],
    52:[],
    53:[],
    54:[]
};

var score = {typeA:0,typeB:0,typeC:0,typeD:0,typeE:0,typeF:0,typeG:0,typeH:0};
var chart=[];


function oneofFour(key){
    let idname = "question"+num;
    //console.log(idname);
    let question = document.getElementById(idname);
    question.style.display = "none";
    let nextidname = "question"+(++num);
    //console.log(nextidname);
    let nextquestion = document.getElementById(nextidname);
    nextquestion.style.display = "block";
    
    /**register answer info (answer (n))*/
    //chart.push();
    console.log(key);
    console.log(valueofAnswerTab[key])
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
    document.getElementByClassId("topbar").style.display="none";
    return;
}