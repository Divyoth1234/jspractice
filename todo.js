const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskMessage= document.getElementById("taskMessage");
const taskList=document.getElementById('taskList');
const removeTaskButton=document.getElementById("removeTaskButton");


addTaskButton.addEventListener("click",function()
{
   const inputt = taskInput.value;

   if (inputt=='')
   {
    alert("enter a valid string");
    return;
   }

   const itemslist= document.createElement('li');
   itemslist.textContent=inputt

   taskList.appendChild(itemslist);

   taskInput.value='';

})

removeTaskButton.addEventListener("click",function()
{
    const inputtremove = taskInput.value;

    if(inputtremove=='')
    {
        alert("enter a valid task to be deleted");
    }

    const itemslist = taskList.getElementsByTagName('li');
    let itemfound =false;

    for (let i=0;i<itemslist.length;i++)
    {
        const itemsslist= itemslist[i];
       if(itemsslist.textContent.includes(inputtremove))
       {
        itemfound = true;
        taskList.removeChild(itemsslist);
        break;
       }
    }

})







