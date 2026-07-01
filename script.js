window.onload = function(){
    document.querySelector("#age-prompt").classList.add("visible");
}

function checkage(){
    let age = parseInt(document.querySelector("#input-age").value);
    if(age >= 18){
         document.querySelector("#age-prompt").classList.remove("visible");
         document.querySelector("#calculator").classList.add("visible");
    }else{
        document.querySelector("#age-prompt").classList.remove("visible");
        document.querySelector("#apol").classList.add("visible");
    }
}

document.querySelector("#btn").addEventListener("click",checkage);


let display= document.querySelector("#display");

function appendtodisplay(value){
display.value += value;
}

function cleardisplay(){
    display.value='';
}

function deletelast(){
    display.value= display.value.slice(0,-1);
}
 
function calculate(){
    display.value=eval(display.value)
}
