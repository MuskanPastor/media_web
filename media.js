var image1=document.getElementById("image1");
var image2=document.getElementById("image2");
    function zoomin(pic){
       image1.style.display="flex";
       image2.src=pic;
    };  
    function zoomout(){
        image1.style.display="none";
    };
    var signup=document.getElementById("signup");
    var signin=document.getElementById("signin");
    var title=document.getElementById("title");
    var namee=document.getElementById("namee");
    signin.onclick=function(){
        namee.style.maxHeight=0;
        title.innerHTML="Sign In";
        signup.classList.add("off");
        signin.classList.remove("off");
    }
    signup.onclick=function(){
        namee.style.maxHeight="60px";
        title.innerHTML="Sign Up";
        signup.classList.remove("off");
        signin.classList.add("off");
    }
    var register=document.getElementById("register");
    var forms=document.getElementById("forms");
    var formCover=document.getElementById("form-covered");
    var cross=document.getElementById("crossed");
    register.onclick=function(){
        formCover.style.display="flex";
        forms.style.display="block";
    }
    crosskro=function(){
        formCover.style.display="none";
        forms.style.display="none";
    }
    var contactUs=document.getElementById("contactus");
    var contact=document.getElementById("contacts");
    var contacts=document.getElementById("contacts1");
    var spna=document.getElementById("checked");
    contactus.onclick=function(){
        contact.style.display="block";
        contacts.style.display="block";

    }
    checkedd=function(){
        contact.style.display="none";
        contacts.style.display="none";
  
    }
    
    var aboutss=document.getElementById("aboutUs");
    var aboutpage=document.getElementById("about-page");
    var aboutInfo=document.getElementById("aboutInfo");
    var checks=document.getElementById("checks");
   aboutss.onclick=function(){
    aboutInfo.style.display="inline-block";
    aboutpage.style.display="inline-block";
   
   };
   checking=function(){
    aboutpage.style.display="none";
    aboutInfo.style.display="none";
   };
   const questions = [
    {
        question:"Who directed the movie 'Inception'?" ,
        answers: [
            {text:"Steven Spielberg",correct:false},
            {text:"Christopher Nolan",correct:true},
            {text:"Quentin Tarantino",correct:false},
            {text:"James Cameron"    ,correct:false},
        ]
    },
    {question:"Which TV series is set in the fictional town of Hawkins, Indiana?" ,
    answers: [
        {text:"Stranger Things",correct:true},
        {text:"Twin Peaks",correct:false},
        {text:"Riverdale",correct:false},
        {text:"Bates Motel"   ,correct:false},
    ]

    },
    {
        question:"What is the highest-grossing film of all time?" ,
        answers: [
            {text:"Titanic",correct:false},
            {text:"Avatar",correct:false},
            {text:"Avengers: Endgame",correct:true},
            {text:"Star Wars: The Force Awakens"   ,correct:false},
        ]
    
        
    },
    {
        question:"Who created the Marvel Comics character Spider-Man?" ,
        answers: [
            {text:"Stan Lee and Steve Ditko",correct:true},
            {text:" Jack Kirby and Stan Lee",correct:false},
            {text:"Steve Ditko and Jack Kirby",correct:false},
            {text:"Stan Lee and John Romita Sr." ,correct:false},
        ] 
    

    },
    {
        question:"What does BBC stand for?" ,
        answers: [
            {text:"British Broadcasting Corporation",correct:true},
            {text:"British Bureau of Communication",correct:false},
            {text:" Broadcasting British Channel",correct:false},
            {text:"British Broadcasting Channel"   ,correct:false},
        ]

    },
    {
        question:"Which newspaper is known as 'The Gray Lady'?" ,
        answers: [
            {text:" The Washington Post",correct:false},
            {text:"The Guardian",correct:false},
            {text:"  The New York Times",correct:true},
            {text:"The Wall Street Journal"   ,correct:false},
        ]


    },
    {
        question:"Which of the following is a novel by Jane Austen?" ,
        answers: [
            {text:"Wuthering Heights",correct:false},
            {text:"Jane Eyre",correct:false},
            {text:" Pride and Prejudice",correct:true},
            {text:"Great Expectations"   ,correct:false},
        ]

    },
    {
        question:"In J.K. Rowling's 'Harry Potter' series, what is the name of Harry's pet owl?" ,
        answers: [
            {text:"Errol",correct:false},
            {text:"Scabbers",correct:false},
            {text:"Crookshanks",correct:false},
            {text:"Hedwig"   ,correct:true},
        ]
    },
    {
        question:"Which writer is known for the play 'Hamlet'?" ,
        answers: [
            {text:"Christopher Marlowe",correct:false},
            {text:"William Shakespeare",correct:true},
            {text:"Ben Jonson",correct:false},
            {text:"Thomas Kyd"   ,correct:false},
        ]

    },
    {  question:"Which prize is awarded for achievements in journalism, literature, and musical composition?" ,
    answers: [
        {text:"Nobel Prize",correct:false},
        {text:"Booker Prize",correct:false},
        {text:"Pulitzer Prize",correct:true},
        {text:"National Book Award"   ,correct:false},
    ]

    }


   ];
   const question=document.getElementById("questions");
   const answers=document.getElementById("answers");
   const nextButton=document.getElementById("next-button");
   let currenti=0;
   let score=0;
   function abc(){
    currenti=0;
   score=0;
   nextButton.innerHTML="Next";
   def();
   }
   function def(){
    resetState();
    let currentques=questions[currenti];
    let quesno=currenti+1;
    question.innerHTML=quesno+"."+currentques.question;
    currentques.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("butt");
        answers.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    }

    )
   }
   function resetState(){
    nextButton.style.display="none";
    while(answers.firstChild){
        answers.removeChild(answers.firstChild);
    }
   }
   function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answers.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled="true";
    });
    nextButton.style.display="block";
   }
   function showScore(){
resetState();
question.innerHTML=`You scored ${score} out of ${questions.length}!";
nextButton.innerHTML="Play Again`;
nextButton.style.display="block"; 
   };
   function handleNextButton(){
    currenti++;
if(currenti<questions.length){
def();
}
else{
    showScore();
}
   };
   nextButton.addEventListener("click",()=>{
    if(currenti<questions.length){
        handleNextButton();
    }
    else{
        abc();
    }
   }
);
   abc();
