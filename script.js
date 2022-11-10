const addBtn = document.querySelector('.add-button');
const ul = document.querySelector('ul');
const upDown=document.querySelector('.sort')
let direction="";

addBtn.addEventListener('click', () =>{
  const li=document.createElement('li')
  li.className="todo-li";
  const input=document.createElement('input')
  input.className="input"
  const button=document.createElement('button');
  button.className="delete"

  button.addEventListener('click', ()=>{
    li.remove();
  })
  
  li.appendChild(input);
  li.appendChild(button);
  ul.appendChild(li);

})
 
upDown.addEventListener('click',()=>{
  toggleUpDown();
  const todos = ul.childNodes;
  const itemsArr = [];

  for (var i in todos) {
    if (todos[i].nodeType == 1) {
      itemsArr.push(todos[i]);
    }
  }

  itemsArr.sort((a, b) => compareFn(a, b, direction));
  for (i = 0; i < itemsArr.length; ++i) {
    ul.appendChild(itemsArr[i]);
  }

  
})
function toggleUpDown() {
  if (direction) upDown.classList.remove(direction);
  direction = direction === "asc" ? "desc" : "asc";
  upDown.classList.add(direction);
  upDown.classList.add("active");
}

  function compareFn(a, b, direction) {
    let aValue = a.children[0]?.value;
    let bValue = b.children[0]?.value;
  
    if (aValue > bValue) {
      return direction === "asc" ? 1 : -1;
    } else if (aValue < bValue) {
      return direction === "asc" ? -1 : 1;
    } else return 0;
  }