let taskinput= document.getElementById('input-task');
let tasklist = document.getElementById('task-list');
let btn = document.querySelector('.btn');



function Addtask(){
    Taskvalue = taskinput.value;
    if(!Taskvalue){
        alert('you moust add a value')
    }else{
        let li = document.createElement('li');
        let span =document.createElement('span');

        li.innerHTML =Taskvalue;
        tasklist.appendChild(li);

        span.innerHTML="&times";
        li.appendChild(span);
   
    taskinput.value= " "

    savetask()
     }
}

 tasklist.addEventListener("click",function(e){

    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
savetask()

    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        savetask()
    }

 })


  taskinput.addEventListener("keydown",function(e){
     if(e.key==="Enter"){
        Addtask();
     }
 })

btn.addEventListener("click",Addtask);


// local storage LIST
function savetask(){
localStorage.setItem("lists",tasklist.innerHTML)
}
// loccal storage saved

function loudtask(){
    tasklist.innerHTML=localStorage.getItem("lists");
}
 loudtask()