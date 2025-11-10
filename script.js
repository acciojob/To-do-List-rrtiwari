function validate(data){
	if(data==="")
		  return false;
     else
		  return true;
}
document.getElementById("addTodoBtn").addEventListener("click",(e)=>{
	e.preventDefault();
    let data=document.getElementById("newTodoInput").value;
	if(validate(data)){
	let li=document.createElement("li");
	li.innerHTML=data;
	let ol=document.getElementById("todoList");
	ol.appendChild(li);
	document.getElementById("newTodoInput").value="";
   }
})
