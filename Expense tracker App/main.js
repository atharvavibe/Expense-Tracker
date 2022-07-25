var itemList = document.getElementById('items');
document.getElementById('addExpenseBtn').addEventListener('click', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Edit event
itemList.addEventListener('click', editItem);


function addItem(e){
    e.preventDefault();
//creating a new element 
var obj ={
 descriptionBox : document.getElementById('descriptionBox').value,
  expenseAmount : document.getElementById('expenseAmount').value,
 category : document.getElementById('category').value
}
var li = document.createElement('li');
li.className = 'list';

// Adding text node with input value
li.appendChild(document.createTextNode(`${expenseAmount.value} - ${descriptionBox.value} - ${category.value}`));

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

axios.post("https://crudcrud.com/api/4991432a81c643bd861ffceeb2977152/", obj)
.then((response)=>{
  console.log(response);
}
);
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
