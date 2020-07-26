var list = document.getElementById('list')

function todoapp(){
  var todo = document.getElementById('todo')
  var li = document.createElement('li')
  li.setAttribute("class" , "le")
  var liText = document.createTextNode(todo.value)
  li.appendChild(liText)
  

  var editBtn = document.createElement("button")
  var editText = document.createTextNode("EDIT")
  editBtn.setAttribute("class" , "btn3")
  editBtn.setAttribute("onclick" , "editItem(this)")
  editBtn.appendChild(editText)
  li.appendChild(editBtn)

  var delBtn = document.createElement("button")
  var delText = document.createTextNode("DELETE")
  delBtn.setAttribute("class" , "btn2")
  delBtn.setAttribute("onclick" , "deleteItem(this)")
  delBtn.appendChild(delText)
  li.appendChild(delBtn)


  list.appendChild(li)
  todo.value=""
}

function deleteItem(e){
  e.parentNode.remove()
}

function deleteAll(){
  list.innerHTML=""
}

function editItem(e){
  var val = prompt ("Enter Updated Task" , e.parentNode.firstChild.nodeValue);
  e.parentNode.firstChild.nodeValue=val
}