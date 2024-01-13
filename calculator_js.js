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
document.addEventListener('keypress', (hello) => {
    var name = hello.key;
    if(name=="1"||name=="2"||name=="3"||name=="4"||name=="5"||name=="6"||name=="7"||name=="8"||"*"||"/"||"-"||"+"){
        appendToDisplay(name);
    }
    else if(name=="Enter"){
        calculate();
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
