const container=document.

const name = document.
getElementById('name');
const email = document.
getElementById('email');
const mess = document.
getElementById('mess');
const submit = document.
getElementById('submit');


const error = (input,message)=>{
     const firstinput = input.
     parentElement;
     firstinput.className="firstinput error";
     firstinput.querySelector('.message').textContent=message;
};

//to check if the value is empty
const checkRequiredFields=(inputArr)
=>{
    inputArr.forEach((input)=>{
        if(input.value.trim()===""){
            //error message since there is no input value
            error(input, `${input.id}is required `);  
        } else {
            //success 
        }
    })
}