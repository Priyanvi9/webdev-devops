function addTodo(){
    const inputEl = document.querySelector("input");
    const value = inputEl.value;
    console.log(value);
}
    let ctr = 0;
    function callBack(){
       const el= document.querySelectorAll("h2")[1];
        el.innerHTML = ctr;
        ctr = ctr+1;
    }
    setInterval(callBack,1000);

function deleteTodo(index){
    const element = document.getElementById("todo-" + index);
    document.getElementById("todoparent").removeChild(element);
}
function deleteRandomTodo(){
    const element = document.querySelector("h2");
    // const parentElement = document.getElementById("todoparent");
    // const parentElement = element.parentNode;
    parentElement.removeChild(element)
}