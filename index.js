var data = [
    {
        id:1,
        content: '할일1',
        do:true
    }
    ,
    {
        id: 2,
        content: '할일2',
        do: true
    }
    ,
    {
        id: 3,
        content: '할일3',
        do: false
    }
]
document.getElementById("add").addEventListener('click', addButtonClick)
var list = document.getElementById('list')
function addButtonClick() {
    var contents = document.getElementById("text")

    var div = document.createElement('div')
    var label = document.createElement('label')
    var input = document.createElement('input')
    var i = document.createElement('i')
    var value = document.createTextNode(contents.value)

    input.type = "checkbox"

    div.appendChild(label)
    label.appendChild(input)
    label.appendChild(value)
    div.appendChild(i)

    // label.classList.add("checked")
    i.classList.add("far","fa-trash-alt")

    list.appendChild(div)

    contents.value = ""
    i.addEventListener('click', remove)

    label.addEventListener('click', checkLine)
    
   
}
function remove(){
    list.removeChild(event.target.parentNode)
}
function checkLine(event) {
       if (event.target.checked) {
           event.target.parentNode.classList.add("checked")
       } else{
           event.target.parentNode.classList.remove('checked')
       }
}