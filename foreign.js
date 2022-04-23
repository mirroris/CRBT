function oneofFour(num){
    let idname = "question"+num;
    console.log(idname);
    var question = document.getElementById(idname);
    question.style.display = "none";
    let nextidname = "question"+(num++);
    var nextquestion = document.getElementById(nextidname);
    nextquestion.style.display = ""
    return num;
}