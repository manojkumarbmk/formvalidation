const form = document.getElementById("form");
const names = document.getElementById("name");
const number = document.getElementById("number");
var a=0;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validatInputs();
    
    if (a==2){
        display()
    }
    else{
        a=0
    }
});


function validatInputs() {
    const nameVal = names.value.trim();
    const numberVal = number.value.trim();



    if (nameVal==='') {
        setError(names,"please enter your name");
    }
    else {
        setSuccess(names);
    }

    if (numberVal==='') {
        setError(number,"enter mobile number");
    }
    else if(numberVal.length!==10){
        setError(number,"plaese give 10 digit numbers");
    }
    else {
        setSuccess(number);
    }
    console.log('Running if');
}

function setError(input,message) {

    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'error input';
    small.innerText = message;
}

function setSuccess(input) {
    a+=1
    const formControl = input.parentElement;
    formControl.className = 'success input';
}
display = ()=>{
    document.write(names.value)
    document.write('<br>')
    document.write(number.value)
}

console.log('Running');







