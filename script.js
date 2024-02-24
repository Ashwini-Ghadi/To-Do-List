const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li"); //li is tag name
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span") //span is tag name
        span.innerHTML="\u00d7"; //for cross/wrong sign
        li.appendChild(span);
    }
    inputBox.value=""; //to clear i/p box after adding text
    saveData();
    
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){ //if we click li it will toggle checked
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){ //if we click li it will remove list
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();