var itemList = document.getElementById('items');
document.getElementById('addExpenseBtn').addEventListener('click', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Edit event
itemList.addEventListener('click', editItem);


function addItem(e){
    e.preventDefault();
//creating a new element 
var newItem2 = document.getElementById('descriptionBox').value;
var newItem1 = document.getElementById('expenseAmount').value;
var newItem3 = document.getElementById('category').value;
var li = document.createElement('li');
li.className = 'list';

// Adding text node with input value
li.appendChild(document.createTextNode(`${newItem1} - ${newItem2} - ${newItem3}`));

//Add delete button
var deleteBtn = document.createElement('button');
deleteBtn.className = 'delete button';
deleteBtn.appendChild(document.createTextNode('Delete expense'));
li.appendChild(deleteBtn);
//Add edit button
var editBtn = document.createElement('button');
editBtn.className = 'edit button';
editBtn.appendChild(document.createTextNode('Edit expense'));
li.appendChild(editBtn);
itemList.appendChild(li);
}


function removeItem(e){
  if(e.target.classList.contains('delete')){
   var li = e.target.parentElement;
   itemList.removeChild(li);
  }
  

}


function editItem(e){
    const button = e.target;
    const li = button.parentElement;

    if(button.textContext === 'edit'){
        const firstLi = li.firstElementChild;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = firstLi.textContext;
    li.insertBefore(input, firstLi);
    li.removeChild(firstLi);
    button.textContext = 'save'; 
        
      
    }

    else if(button.textContext === 'save'){
        const input = li.firstElementChild;
        const span = document.createElement('span');
        span.textContent = input.value;
        li.insertBefore(span, input);
        li.removeChild(input);
        button.textContent = 'edit';
    }
}