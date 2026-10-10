const display = document.getElementById("display")
const button= document.querySelectorAll(".btn")

button.forEach(function(button){
    button.addEventListener("click", function()
    {
        const value = this.innerText;

        if(value==="C"){
            clearDisplay();
        }
        else if(value==="="){
            calculate();
        }
        else if(value==="x"){
            display.value+= "*";
        }
        else{
            display.value+= value
        }

        
    });
});

function appendValue(value){
    display.value+= value;
}

function clearDisplay(){
    display.value= "";
}
function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch{
        display.value = "Error"
    }
}