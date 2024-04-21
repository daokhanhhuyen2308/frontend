function Validator(options){
  
    const formElement = document.querySelector(options.form);
    if(formElement){

        console.log(formElement);
    }

}

//Định nghĩa các rules
Validator.isRequired = function(selector)
{
    console.log(selector);

}

Validator.isEmail = function(){

}