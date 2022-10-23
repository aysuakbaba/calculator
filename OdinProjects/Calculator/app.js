const numberButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clearBtn");
const deleteButton = document.getElementById("deleteBtn");
const pointButton = document.getElementById("pointBtn");
const equalsButton = document.getElementById("equalsBtn");
const lastOperationScreen = document.getElementById("lastOperationScreen");
const currentOperationScreen = document.getElementById(
  "currentOperationScreen"
);
const plusMinus = document.querySelector(".plusminus");
const percent = document.querySelector(".percent");
const backslash = document.querySelector(".backslash");
const star = document.querySelector(".star");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
let before = "";
let after = "";
let operator=".";
let result ="";
let digit= 0;
let bol = false;
let operatorPressed = false;



const equal = () => {
   
    if (operator==="*") {
        result=before*after;    
    } else if(operator==="/" && after!==0) {
        result = before / after;
    }else if(operator==="-"){
        result = before-after;
    }else if(operator==="+"){
        result =Number(before) + Number(after);    
    }else{
        result=before/100;
    }
    
}


for (let index = 0; index < numberButtons.length; index++) {
  numberButtons[index].addEventListener("click", () => {
    
    if (currentOperationScreen.textContent === "0") {
        currentOperationScreen.textContent = numberButtons[index].textContent;
        digit++;
        digitCounter();
       
    } else if(lastOperationScreen.textContent.charAt(lastOperationScreen.textContent.length-1) === operator && !bol) {
        currentOperationScreen.textContent = numberButtons[index].textContent;
        digit++;
        digitCounter();
        bol=true;

    }else{
        currentOperationScreen.textContent += numberButtons[index].textContent;
        digit++;
        digitCounter();
    }
    after = currentOperationScreen.textContent;
  });

  
}

deleteButton.addEventListener("click" , ()=>{
    if(currentOperationScreen.textContent!=="0"){
        currentOperationScreen.textContent*= 0.1;

        if(currentOperationScreen.textContent>0){
            currentOperationScreen.textContent= Math.floor(currentOperationScreen.textContent);
        }else{
            currentOperationScreen.textContent=Math.ceil(currentOperationScreen.textContent);
        }
    }
    digit--;
    digitCounter();
    

});

clearButton.addEventListener("click" ,()=>{
    currentOperationScreen.textContent="0";
    lastOperationScreen.textContent="";
    operator=".";
    digit=0;
    bol=false;
    operatorPressed=false;

    refreshDigit();
    
} )

plusMinus.addEventListener("click" , ()=>{
    currentOperationScreen.textContent*=-1;
    if(currentOperationScreen.textContent.search("-")===-1){
        digit--;
        digitCounter();
        
    }else{
        digit++;
        digitCounter();
    }
})

backslash.addEventListener("click" , ()=>{
    if(currentOperationScreen.textContent!==0 && !operatorPressed){
        before = currentOperationScreen.textContent;
        lastOperationScreen.textContent= before + "/"; 
        operator="/";
        digit++;
        digitCounter(); 
        bol=false;
        operatorPressed = true;
    }else if(operatorPressed){
        equal();  
        currentOperationScreen.textContent = result;   
        operator="/";
        lastOperationScreen.textContent= result + operator;
        before=result;
        operatorPressed = true;
        bol=false;
        digitCounter();
    }
    
})

star.addEventListener("click" , ()=>{
    if(currentOperationScreen.textContent!==0 && !operatorPressed){
        before=currentOperationScreen.textContent;
        lastOperationScreen.textContent=before+ "*";
        operator="*";
        digit++;
        bol=false;
        operatorPressed = true;
        digitCounter();
    }
    else if(operatorPressed){
        equal();
        
        currentOperationScreen.textContent = result;
        
        operator="*";
        lastOperationScreen.textContent= result + operator;
        before=result;
        operatorPressed = true;
        bol=false;
        digitCounter();
    }
})

minus.addEventListener("click" ,()=>{
    if(currentOperationScreen.textContent!==0 && !operatorPressed ){
        before = currentOperationScreen.textContent;
        lastOperationScreen.textContent=before + "-";
        operator= "-";
        digit++;
        bol=false;
        digitCounter();
        operatorPressed = true;
    }else if(operatorPressed){
        equal();
        
        currentOperationScreen.textContent = result;
        
        operator="-";
        lastOperationScreen.textContent= result + operator;
        before=result;
        operatorPressed = true;
        bol=false;
        digitCounter();
    }
})

percent.addEventListener("click" , ()=>{
    if(currentOperationScreen.textContent!==0 && !operatorPressed){
        before= currentOperationScreen.textContent;
        lastOperationScreen.textContent=before + "%";
        operator="%";
        digit++;
        bol=false;
        digitCounter();
        operatorPressed = true;
    }else if(operatorPressed){
        equal();
        
        currentOperationScreen.textContent = result;
        
        operator="%";
        lastOperationScreen.textContent= result + operator;
        before=result;
        operatorPressed = true;
        bol=false;
        digitCounter();
    }
})

plus.addEventListener("click",()=>{
    if(currentOperationScreen.textContent!==0 && !operatorPressed){
        before= currentOperationScreen.textContent;
        lastOperationScreen.textContent=before + "+";
        operator="+";
        digit++;
        bol=false;
        digitCounter();
        operatorPressed = true;
    }else if(operatorPressed){
        equal();
        currentOperationScreen.textContent = result;       
        operator="+";
        lastOperationScreen.textContent= result + operator;
        before=result;
        operatorPressed = true;
        bol=false;
        digitCounter();
    }
})

pointButton.addEventListener("click" , ()=>{
        before = currentOperationScreen.textContent;
        lastOperationScreen.textContent=before + ".";
        digit++;
        digitCounter();
})

equalsButton.addEventListener("click",()=>{
    equal();
    currentOperationScreen.textContent = result;
        
    
    lastOperationScreen.textContent= before + operator + after + "=";


});


const digitCounter=()=>{
    if(digit>6){
        currentOperationScreen.classList.add("digit");  
    
    }else if(digit<6){
        currentOperationScreen.classList.remove("digit");
    }
}

const refreshDigit=()=>{
    currentOperationScreen.classList.remove("digit");
}

