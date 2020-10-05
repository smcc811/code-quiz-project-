// retrieving  DOM variables

// start page variables
var welcomeContainer = document.getElementById("welcome");
var startQuestion = document.getElementById("button");

// nfl variables
var nflQuestion = document.getElementById("nflQuestion");
var proCitySelection = document.getElementById("proTeamCity");
var proTeamChoice = document.getElementById("proChoice");
var resultArea = document.getElementById("trash");

// ncaa variables 
var collegeResult = document.getElementById("collegeTrash")
var ncaaResult = document.getElementById("ncaa");
var ncaaArea = document.getElementById("collegeTeam");
var ncaaQuestion = document.getElementById("ncaaQuestion");

// heisman variables
var heismanQuestion = document.getElementById("heismanQuestion");
var heismanWinner = document.getElementById("heismanWinner");
var heismanResult = document.getElementById("HeismanTrash");

// syracuse variables
var syracuseQuestion = document.getElementById("orangeMen");
var syracuseAnswer = document.getElementById("accConference");
var syracuseResult = document.getElementById("syracuseTrash");



// college Doms
var collegeTeam = document.getElementById("collegeTeam");
var ncaaConference = document.getElementById("ncaaConference");

// questions for each page
var proQuestion = ["what city do the Browns play in ?"];
var collegeQuestion = ["what conference is Ohio State a member of ?"];
var heisman = ["who won the Heisman Trophy in 1974 ? "];
var jbQuestion = ["when did Jim Brown graduate from Syracuse"];


// elements to keep track of score and seconds left
var score = 0;
var secondsLeft = 15;
var timer;
var questionCounter = 0;
var timerInterval;

//variables for finish page
var scoreAnswer =  document.getElementById("scoreAnswer");
var inputData = document.getElementById("name");
var nameAnswer = document.getElementById("nameAnswer");


// clears all "text content" variables
function clear() {
   nflQuestion.textContent = "";
   proCitySelection.textContent = ""; 
   resultArea.textContent = "";  
   ncaaConference.textContent = "";
   collegeResult.textContent = ""; 
   ncaaQuestion.textContent = "";
   heismanQuestion.textContent = "";
   heismanWinner.textContent = ""; 
   heismanResult.textContent = "";
   syracuseQuestion.textContent = "";
   syracuseAnswer.textContent = "";
   syracuseYears.textContent = ""; 
   syracuseResult.textContent = "";

}

// clears timeInterval process

function clearTime(){
   clearInterval(timerInterval);
}


// function ask question and creates needed buttons 

function nfl(){
    var availableTeams = ["Cleveland","Baltimore","Detroit", "Seattle"];
    nflQuestion.append(proQuestion);

    for(var i = 0; i < availableTeams.length; i++){
        var button = document.createElement("button");
        button.setAttribute("class", "btn btn-info")
        button.textContent = availableTeams[i];
        button.setAttribute("data-value", availableTeams[i]);      
        proCitySelection.append(button);
        

    }
}


// function evaluates choice and notifies user if right / wrong
// user runs out of time or doesn't make a pic, we time out record score
// and then send information to Local Storage

function proSelection() {
    questionCounter = questionCounter + 1;
    proCitySelection.addEventListener("click",function(event){
    if(event.target.matches("button")){       
       var selectedCity = event.target.getAttribute("data-value"); 
       if(selectedCity === "Cleveland"){            
           resultArea.textContent = "right choice";
           score = score + parseInt(25);          
        }else{
           resultArea.textContent = "wrong choice";          
           secondsLeft = secondsLeft - 3;
        }
        setTimeout(function(){
           nflQuestion.textContent = "";
           proCitySelection.textContent = ""; 
           resultArea.textContent = "";  
           if (secondsLeft > 0) {      
           ncaa();
           ncaaWork();
        }else{
           clearTime(); 
           finishPage();         
        } 




         }, 1500)
   }
});  
  }           
 
 
  

// function ask question and creates associated buttons 
// for ncaa questions 

function ncaa(){
   
    ncaaQuestion.append(collegeQuestion);
    var availableTeams = ["Big 10","Big 12","SEC", "PAC 12"];
    for(var i = 0; i < availableTeams.length; i++){
        var button = document.createElement("button");
        button.setAttribute("class", "btn btn-info")
        button.textContent = availableTeams[i];
        button.setAttribute("data-value", availableTeams[i]);      
        ncaaConference.append(button);
        

    }
}


// function evaluates choice and notifies user if right / wrong
// user runs out of time or doesn't make a pic, we time out record score
// and then send information to Local Storage

  
   function ncaaWork() {
     questionCounter = questionCounter + 1; 
     ncaaConference.addEventListener("click",function(event){
     if(event.target.matches("button")){       
        var selectedConference = event.target.getAttribute("data-value"); 
        if(selectedConference === "Big 10"){            
            collegeResult.textContent = "right choice";
            score = score + parseInt(25);           
         }else{
            collegeResult.textContent = "wrong choice"; 
            secondsLeft = secondsLeft - 3;         
         }
         setTimeout(function(){
            ncaaConference.textContent = "";
            collegeResult.textContent = ""; 
            ncaaQuestion.textContent = "";
             
            if (secondsLeft > 0){
            heisMan();
            heismanWork();
            }else{
               clearTime();
               finishPage();
            }  
          }, 1500)
    }
});  
   }           
   

   // function ask question and creates associated buttons 
 
    function heisMan(){
   
    heismanQuestion.append(heisman);
    var availablePeople = ["Archie Griffin","Jerry Rice","Joe Montana", "Joe Namath"];
    for(var i = 0; i < availablePeople.length; i++){
        var button = document.createElement("button");
        button.setAttribute("class", "btn btn-info")
        button.textContent = availablePeople[i];
        button.setAttribute("data-value", availablePeople[i]);      
        heismanWinner.append(button);
        

    }
}

// function evaluates choice and notifies user if right / wrong
// user runs out of time or doesn't make a pic, we time out record score
// and then send information to Local Storage

function heismanWork() {
    questionCounter = questionCounter + 1;
    heismanWinner.addEventListener("click",function(event){
    if(event.target.matches("button")){       
       var heismanCandidate = event.target.getAttribute("data-value"); 
       if(heismanCandidate === "Archie Griffin"){            
           heismanResult.textContent = "right choice";
           score = score + parseInt(25);           
        }else{
           heismanResult.textContent = "wrong choice"; 
           secondsLeft = secondsLeft - 3;          
        }
        setTimeout(function(){
           heismanQuestion.textContent = "";
           heismanWinner.textContent = ""; 
           heismanResult.textContent = "";
           if(secondsLeft > 0) {        
           syracuse();
           syracuseWork();
           }else {
              clearTime();
              finishPage();
           }
         }, 1500)
   }
});  
  }
           
  
// function ask question and creates associated buttons

  function syracuse(){
   
    syracuseQuestion.append(jbQuestion);
    var availableYears = ["1959","1961","1955", "1957"];
    for(var i = 0; i < availableYears.length; i++){
        var button = document.createElement("button");
        button.setAttribute("class", "btn btn-info")
        button.textContent = availableYears[i];
        button.setAttribute("data-value", availableYears[i]);      
        syracuseAnswer.append(button);
        

    }
}

// function evaluates choice and notifies user if right / wrong
// user runs out of time or doesn't make a pic, we time out record score
// and then send information to Local Storage


function syracuseWork() {

    syracuseAnswer.addEventListener("click",function(event){
    if(event.target.matches("button")){ 
      questionCounter = questionCounter + 1;
       var syracuseYears = event.target.getAttribute("data-value");
       if(syracuseYears === "1957"){            
           syracuseResult.textContent = "right choice";
           score = score + parseInt(25);
           }else{
           syracuseResult.textContent = "wrong choice";
           secondsLeft = secondsLeft - 3;
          
        }
        setTimeout(function(){
           syracuseQuestion.textContent = "";
           syracuseAnswer.textContent = "";
           syracuseYears.textContent = ""; 
           syracuseResult.textContent = "";                     
           clearTime();                
           finishPage();
         }, 1500)
   }
});  
  }           
  
// set time variable , will shutdown if secondsleft = 0
// or when all questions asked / answered and their is time 
// left on the clock


  function setTime() {
    var time = document.getElementById("test"); 
    timerInterval = setInterval(function() {
      secondsLeft--;
      time.textContent = "seconds left: " + secondsLeft;
      
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        time.textContent = "quiz time has expired";
        sendMessage(time);

      if(secondsLeft > 0 && questionCounter === 4){
         clearInterval(timerInterval);
         secondsLeft = 0;
         time.textContent = "questions answered before time ran out";
         sendMessage(time); 
        }

        
      //   document.getElementById("finish").setAttribute("style", "display: border-box;");
      }
  
    }, 1000);
  }


  function sendMessage(time) {
    time.textContent = " ";
}
 //   var imgEl = document.createElement("img");
  
  //  imgEl.setAttribute("src", "images/image_1.jpg");
  //  mainEl.appendChild(imgEl);
  
 


// sets up answer page after all questions asked/answered , calls
// local storage, stores name and score and retrieves upon request

function finishPage() {
  //variables for finish page
  document.getElementById("finish").setAttribute("style", "display: border-box;");
  var input = document.getElementById("input");
  var retrieve = document.getElementById("retrieve");
  var scoreAnswer =  document.getElementById("scoreAnswer");
  scoreAnswer.textContent = "Your score is: " + score;
  var inputData = document.getElementById("name");
  var nameAnswer = document.getElementById("nameAnswer");

  inputData.textContent = "Please enter name and score";
  input.addEventListener("click", function() {
   var nameAnswer = document.getElementById("nameAnswer");
   localStorage.setItem('name', JSON.stringify(nameAnswer.value));  
   
  })
  
  retrieve.addEventListener("click", function() {
    nameAnswer.value = JSON.parse(localStorage.getItem('name')); 
 
  }) 
} 


// where program starts executing

startQuestion.addEventListener("click", function() {      
    welcomeContainer.style.display = "none";
   
    timer = setTime();
    timer;
    nfl();
    proSelection(); 
    
 //   finishPage(parseInt(score)); 
});
