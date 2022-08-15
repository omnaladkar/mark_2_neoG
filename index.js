var readlineSync = require('readline-sync')

var userName = readlineSync.question('Hey pls share your name with us');


var score = 0;



//fisrtd letter start with lowercase and 2nd word with uppercase

var welcomeMessage = "I am hAppy to see you here" + " "+userName;

console.log(welcomeMessage);


var  questions = [{
    question: "Do u inevst in stock market?which platform you use?__",
    ans: "zerodha"
},
{
    question: "which app you use for insights of stocks?__",
    ans: "finology"
},
{
    question: "Which stock gave you high ROI",
    ans: "dmart"
},
{
    question: "Favroite investor in market?",
    ans: "damani"
},
{
    question: "Who inspired you to do this?",
    ans: "pappa"
}


];


const game = (question,ans) => {


    var inputAns = readlineSync.question(question);

    if(inputAns.toLowerCase() == ans){
        score = score+1;
        
    }
    else{
          
            score = score-1;
        
          
    }
}

for(var  i=0;i<5;i=i+1){
   var currentQuestion = questions[i];
   game(currentQuestion.question,currentQuestion.ans);
}

console.log(score);

