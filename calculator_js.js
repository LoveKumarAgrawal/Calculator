let currentInput = '';

function appendToDisplay(value){
    currentInput += value;
    document.getElementById('display').value = currentInput;
}
function clearDisplay(){
    currentInput = '';
    document.getElementById('display').value = currentInput;
}

function deleteChar(){
    currentInput = currentInput.substring(0, currentInput.length - 1);
    document.getElementById('display').value = currentInput;
}
document.addEventListener('keydown', (hello) => {
    const name = hello.key;
    if("1234567890*/+-".includes(name)){
        appendToDisplay(name);
    }
    else if(name=="Enter"){
        calculate();
    }
    else if (name === "Escape") {
        clearDisplay();
    }
    else if (name === "Backspace") {
        deleteChar();
    }
},false);

function calculate(){
    try{
        const result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = result.toString();
    }
    catch(error){
        document.getElementById('display').value = 'error';
        currentInput = '';
    }
}
