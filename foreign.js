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

    return num;
}

function accumulate(){
    //どの性格かを求める
    //性格に合わせたデータを取得
    //リザルトに設定
    let result = document.getElementById("result");
    //リザルトを表示
    result.style.display = "block";
    return;
}