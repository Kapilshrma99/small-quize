const quizdata=[
{
    question:"Which of these is a standard interface for serial data transmission?",
    option:["ASCII","RS232C","2","Centronics"],
    correct: 1,
},
{
    question:"Which type of topology is best suited for large businesses which must carefully control and coordinate the operation of distributed branch outlets?",
    option:["Ring","Local area","Hierarchical","star"],
    correct: 3,
}
];
//javascript initialize
const sc=document.querySelector('.main_box');
const answer=document.querySelectorAll('.opt');
// const rb=document.getElementById('opr2');
// console.log(quizdata[1].correct)
const[ques,opt1,opt2,opt3,opt4]=document.querySelectorAll('#main,#op1,#op2,#op3,#op4');
const button=document.querySelector('#but');
let currquiz=0;
let score=0;
const seoi=()=>{
    let ansind;
     answer.forEach((curroption,index )=> {
        if(curroption.checked){
            ansind=index;
        }
        
    });
    return ansind;
};
button.addEventListener('click',()=>{
    // console.log("evenrt");
   const soi=seoi();
//    console.log(soi);
   if(soi===quizdata[currquiz].correct){
    console.log("score",score);
    score++;
    console.log("score",score);
   }
    currquiz++;
    answer.forEach((curr)=>{
        curr.checked=false; 
    })
    if(currquiz<quizdata.length){
    loadQuize();}
    else{
        sc.innerHTML=`<h1>CONGRATULATION ,for completing the quize.</h1>
                        <h2>your SCORE:${score} out of ${quizdata.length}</h2>
                        <button type ='reset' class="final" onclick="location.reload()">play again</button><br><hr>
                        <button type ='reset' class="final" onclick="location.reload()">reset</button>
                        `
                        button.style.display="none";
    }
});

//load
const loadQuize=()=>{
    const{question,option,correct}=quizdata[currquiz];
    ques.innerText=question;
    opt1.innerText=option[0];
    opt2.innerText=option[1];
    opt3.innerText=option[2];
    opt4.innerText=option[3];
// console.log(correct);

};
loadQuize();