let InputTask = document.getElementById("inputTask") ; 
let BtnCreate = document.getElementById("btnCreate") ; 
let NoTasks = document.getElementById("NoTasks") ; 
let AllTasks = document.getElementById("AllTasks") ;  
let numberOfTasks = document.getElementById("numberOfTasks") ; 
let btnDeleteAll = document.getElementById("btnDeleteAll") ; 
let hNoTask = document.getElementById("hNoTask") ; 
//============================================================
let rand1 , rand2 , rand3 ; 
let GenerateColor = () =>
{
    rand1 = Math.floor(Math.random()*245) ;  
    rand2 = Math.floor(Math.random()*222) ;  
    rand3 = Math.floor(Math.random()*179) ;  
}
let CheckMessage = () =>
{
    if(AllTasks.childElementCount==0) 
    {
        NoTasks.classList.remove("none") ;
    }
    else
    {
        NoTasks.classList.add("none"); 
    }
}
let getNumOfTasks = () =>
{
    numberOfTasks.innerText = AllTasks.childElementCount ; 
}
let addTask = () =>
{
    GenerateColor() ; 
    NoTasks.classList.add("none") ;
    let TaskValue = InputTask.value ; 
    if(TaskValue == " ") 
    {
        hNoTask.classList.remove("none") ; 
    }
    else 
    {
    AllTasks.innerHTML += 
    `
    <div class="task alert alert-info text-center text-light fs-4" style="background:rgb(${rand1},${rand2},${rand3})">
      ${TaskValue}
      <i class="fa-solid fa-trash trash"></i>
    </div>
    `
    InputTask.value = " " ; 
    getNumOfTasks();
    NoInput()
}
}
BtnCreate.addEventListener("click" , addTask) ; 

document.addEventListener("click" ,function(event){
    if(event.target.classList.contains("trash")) 
    {
        event.target.parentElement.remove() ; 
    }
    CheckMessage() ;
    getNumOfTasks();  
})
document.addEventListener("click" ,function(event){
    if(event.target.classList.contains("task")) 
    {
        event.target.classList.add("checked") ; 
    } 
})
let DeleteAll = () =>
{
    if(confirm("Are You Sure , YoU Delete All "))
    {
        AllTasks.innerHTML = " " ; 
    }
}
btnDeleteAll.addEventListener("click" , DeleteAll) ; 

InputTask.addEventListener("keyup" , function(event) 
{
    if(event.key == "Enter") 
    {
        addTask() ; 
    }
})