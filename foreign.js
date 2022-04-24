function oneofFour(){
    let idname = "question"+num;
    console.log(idname);
    var question = document.getElementById(idname);
    question.style.display = "none";
    let nextidname = "question"+(++num);
    console.log(nextidname);
    var nextquestion = document.getElementById(nextidname);
    nextquestion.style.display = "block";
    return num;
}