let input =document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string="";
let arr= Array.from(buttons);
    arr.forEach(button => {
        button.addEventListener('click', (k) =>{
            if(k.target.innerHTML == '='){
                string = eval(string);
                input.value=(string);
            }
            else if(k.target.innerHTML== 'AC'){
           string= "";
          input.value = string;
            }
else if(k.target.innerHTML == 'DE'){
    string=string.substring(0, string.length -1);
    input.value=string;
}
            else{
                string +=k.target.innerHTML;
                input.value=string;
            }
        })
    })




    
    
        
