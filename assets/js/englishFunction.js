let cacheKeyGlobal = ""; //"listening_";// reading_

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
        // add cache
        addCacheData(inputName, answerChoise.value, answerChoise.value == AnswerCorrect)
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
          cacheKeyGlobal = isCase ? "reading_" : "listening_";
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

            // load answer from cache
            loadAnswerFromCache(numberParctice);

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



  // Load cache
function loadAnswerFromCache(practiceKey){
     let cacheKey = cacheKeyGlobal +"p" + practiceKey;
   let dataCaches = f_ReadCacheDataToLocalStorage(cacheKey);
   if(dataCaches != ""){
    for (var i in dataCaches) {
    //"question-p1-slide-1"
    
     let lstKey = (dataCaches[i].questionKey).split("_");
     let keyParactice = lstKey[0].replace('p',"");
     let keyQuestion = lstKey[1].replace('Q',"");
     var linkQuestion = document.getElementById("question-p"+ keyParactice +"-slide-"+ keyQuestion +"");
     var question = document.getElementById(dataCaches[i].questionKey + "_" + dataCaches[i].answer);
     var elmAnswer = document.getElementsByClassName(dataCaches[i].questionKey + "_" + dataCaches[i].answer)[0];
     if(dataCaches[i].isCorrect){
      linkQuestion.style.background = "#338f7b";
      elmAnswer.style.color = "#338f7b";
     }
     else{
      linkQuestion.style.background = "red";
      elmAnswer.style.color = "red";
     }
   }
   }
  }
  
  // Cache function data to local storage
  function addCacheData(questionKey, answer, isCorrect){
   const practiceKey = questionKey.slice(0, 2);
   let cacheKey = cacheKeyGlobal + practiceKey;
   let cacheNewData = {"questionKey":questionKey, "answer":answer, "isCorrect":isCorrect};
   let cacheStorage = f_ReadCacheDataToLocalStorage(cacheKey);
   if(cacheStorage != ""){
   // check if exist data
    cacheStorage = changeDataCache(questionKey, answer, isCorrect, cacheStorage, cacheNewData);
    console.log('have data cache');
    console.log(cacheStorage);
   }
   else{
    cacheStorage = [cacheNewData];
   }
   // create cache
   f_CreateCacheDataToLocalStorage(cacheKey, cacheStorage);
  }
  
  // check if exist and update data
  function changeDataCache(questionKey, answer, isCorrect, cacheStorage, cacheNewData ) {
   let isExist = false;
   for (var i in cacheStorage) {
    if (cacheStorage[i].questionKey == questionKey) {
      cacheStorage[i].answer = answer;
      cacheStorage[i].isCorrect = isCorrect;
      isExist = true;
      break; //Stop this loop, we found it!
    }
   }
   if(!isExist){
    cacheStorage.push(cacheNewData);
   }
   return cacheStorage;
  }
  
  // function Create cache
  function f_CreateCacheDataToLocalStorage(cacheKey ,data){
   localStorage.removeItem(cacheKey);
   localStorage[cacheKey] = JSON.stringify(data);
  }
  
  // function Read cache
  function f_ReadCacheDataToLocalStorage(cacheKey){
   var stored = localStorage[cacheKey];
   let data = "";
   if (stored) data = JSON.parse(stored);
   return data;
  }
  
  // function clear cache
  function f_clearCache(cacheKey){
   localStorage.removeItem(cacheKey);
  }