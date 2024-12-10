  /// Function check correct answer
  function checkAnswer(evt, AnswerCorrect, inputName, linkid){
    var answerChoise = document.querySelector('input[name="'+ inputName +'"]:checked');
    if(answerChoise != null && answerChoise.value != null){
      var elmAnswer = document.getElementsByClassName(inputName + '_' + answerChoise.value)[0];
      var linkQuestion = document.getElementById(linkid);
        if(answerChoise.value == AnswerCorrect){
          console.log(answerChoise.value  + AnswerCorrect);
          elmAnswer.style.color = "#059862";
          var dataChoise = linkQuestion.getAttribute("data-choise");
          if(dataChoise != "false"){
            linkQuestion.style.background = "#338f7b"; 
          }
        }
        else{
          elmAnswer.style.color = "red";
          linkQuestion.style.background = "red";
          linkQuestion.setAttribute("data-choise", false);
        }
    }
  }
  // open tab
  function openTab(evt, practice, isCase) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById('Practice_' + practice).style.display = "block";
    evt.currentTarget.className += " active";

    loadParctice(practice, isCase); // true => reading, false => listening
  }
  // loading Practice
  function loadParctice(numberParctice, isCase){
      let questionNumbers = document.querySelector("#Practice_"+ numberParctice +" > .slider > #question-number-" + numberParctice);
      let questionLst = document.querySelector("#Practice_"+ numberParctice +" > .slider > .slides");
      if(questionNumbers != null && questionLst != null){
          let dataPractice = isCase ? jsonReading[numberParctice-1] : jsonListening[numberParctice-1];
          let lstNumber = "";
          let lstQuestions = "";
          if(dataPractice.questions.length > 0){
            for(let i = 0; i < dataPractice.questions.length ;i++){
              let questionData = dataPractice.questions[i];
              let questionNumber = i + 1;
             lstNumber = lstNumber + "<a class='question' onclick='selectActiveQuestion(event)' id='question-p"+ numberParctice +"-slide-"+ questionNumber +"' href='#p"+ numberParctice +"-slide-"+ questionNumber +"'>"+ questionNumber +"</a>";
             lstQuestions = lstQuestions +
              "<div class='child' id='p"+ numberParctice +"-slide-"+ questionNumber +"'>"+
              "<p>"+ questionData.title +"</p>";
              if(questionData.answers.length > 0){
                for(let j = 0;j < questionData.answers.length;j++){
                    let answerKey = getAnswerKey(j);
                    
                    lstQuestions = lstQuestions+ "<span class='p"+ numberParctice +"_Q"+ questionNumber +"_"+ answerKey +"'>"+
                    "<input type='radio' id='p"+ numberParctice +"_Q"+  questionNumber +"_"+ answerKey +"' name='p"+ numberParctice +"_Q"+  questionNumber +"' value='"+ answerKey +"'>" +
                    "<label for='p"+ numberParctice +"_Q"+ questionNumber +"_"+ answerKey +"'>"+ questionData.answers[j].name +"</label><br>"+
                  "</span>"
                }
              }
              lstQuestions = lstQuestions+ "<button class='check-answer' onclick='checkAnswer(event, \""+ questionData.correctAnswer +"\", \"p"+ numberParctice +"_Q"+ questionNumber +"\", \"question-p"+ numberParctice +"-slide-"+ questionNumber +"\")'>Check Answer</button>"+
              "</div>";
            }
            questionNumbers.innerHTML = lstNumber;
            questionLst.innerHTML = lstQuestions;
          }
      }
    
    
  }

// get question abcd
function getAnswerKey(index){
  switch(index +1 ) {
  case 1:
    return "A";
    break;
  case 2:
    return "B";
    break;
  case 3:
    return "C";
    break;
  case 4:
    return "D";
    break;
}
}

  // select question
  function selectActiveQuestion(evt) {
    var i, alinks;
    alinks = evt.currentTarget.parentNode.getElementsByClassName("question");
    for (i = 0; i < alinks.length; i++) {
      alinks[i].className = alinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
  }