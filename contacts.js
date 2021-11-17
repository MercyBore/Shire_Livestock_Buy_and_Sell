const name = document.
getElementById('name');
const email = document.
getElementById('email');
const mess = document.
getElementById('mess');
const submit = document.
getElementById('submit');


const error = (input,message)=>{
    
}

//to check if the value is empty
const checkRequiredFields=(inputArr)
=>{
    inputArr.forEach((input)=>{
        if(input.value.trim()===""){
            //error message since there is no input value
        } else {
            //success 
        }
    })
}