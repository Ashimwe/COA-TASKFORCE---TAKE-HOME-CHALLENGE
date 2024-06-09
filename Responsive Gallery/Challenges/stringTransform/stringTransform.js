//Assigning HTML elements contents to JavaScript variables
const stringToBeTransformedField = document.getElementById("stringToBeTransformed");
const string = document.getElementById("string");
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

//Function to transform string entered by the user and transform it according to its length.
function convert(){
    const stringToBeTransformed = stringToBeTransformedField.value;
    string.innerText = stringToBeTransformed + " is the string you entered";
const stringCharArray = Array.from(stringToBeTransformed);
        const stringTransformed = document.getElementById("stringTransformed");
        if(stringCharArray.length > 0){
            if(stringCharArray.length < 1001){

                //String transformation if the string's length is divisible by both 3 and 5.
function both(){
    let reversed = [];
    let numbers = [];
    for(let i = stringCharArray.length-1; i >= 0;i--){
       reversed.push(stringCharArray[i]);
    }
    for(let i = 0;i < reversed.length-1;i++){
        numbers.push(reversed[i].charCodeAt(0));
    };
    stringTransformed.innerText = "Your string is reversed and converted to ASCII code and its result is: ";
    for(let i of numbers){
        stringTransformed.innerText += " " + i;
    };
};

//String to be reversed only if the string's length is divisible by 3 but not by 5 too.
function reverse()
{
    stringTransformed.innerText = "Your string is reversed and its result is: " + " ";
    for(let i = stringCharArray.length-1; i >= 0;i--){
        stringTransformed.innerText += stringCharArray[i];
    };
};

//function to convert the string to ASCII code if the string's length is divisible by 5 but not by 3.
function numbersCode()
{
    stringTransformed.innerText = "Your string is converted to ASCII code and its result is: ";
    for(let i = 0;i < stringCharArray.length; i++){
        stringTransformed.innerText += "  " + stringCharArray[i].charCodeAt(0);
};
};

//function if the string's length is neither divisible by 3 nor divisible by  5.
function unconvertible(){
    stringTransformed.innerText = ("Your string is not convertible");
}

//If statement to check the string length and decide what function to use.
if (stringCharArray.length % 15 == 0){
    both();
}
else{
    if (stringCharArray.length % 3 == 0){
        reverse();
    }
    else if (stringCharArray.length % 5 == 0){
        numbersCode();
    }
    else{
        unconvertible();
    }
}

            }

            //Actions if user enters a value with more than 1000 characters
            else{
                string.innerText = "Your text is too big";
                stringTransformed.innerText = "";
            }
        }
        //Actions if user enters a blank value
        else{
            string.innerText = "Your text is too small";
            stringTransformed.innerText = "";
        }
}

//Resetting the input field to accept new values.
function clear(){
    stringToBeTransformedField.value= "";
    string.innerText="";
    stringTransformed.innerText="";
}
button1.addEventListener('click',convert);
button2.addEventListener('click',clear);