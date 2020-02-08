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
var list = document.getElementById('list')
for (let x = 0; x < data.length; x++) {
    makingList(data[x])
}
function makingList(target) {
    console.log(target)
        var div = document.createElement('div')
        var label = document.createElement('label')
        var input = document.createElement('input')
        var i = document.createElement('i')
        var value = document.createTextNode(target.content)

        input.type = "checkbox"
        div.id = target.id
        div.appendChild(label)
        label.appendChild(input)
        label.appendChild(value)
        div.appendChild(i)

        // label.classList.add("checked")
        i.classList.add("far", "fa-trash-alt")

        list.appendChild(div)


        i.addEventListener('click', remove)

        label.addEventListener('click', checkLine)
}

document.getElementById("add").addEventListener('click', addButtonClick)

function addButtonClick() {
    var contents = document.getElementById("text")

    //배열의 길이 가져오기(배열이름.length)
    //배열에 값 추가하기
    data.push(
        {
            id: data.length+1 ,
            content: contents.value ,
            do: false
        }
    )
    makingList(data[data.length-1])
    contents.value = ""
}
function remove(){
    list.removeChild(event.target.parentNode)
    data.splice(event.target.parentNode.id-1,1)
}
function checkLine(event) {
       if (event.target.checked) {
           event.target.parentNode.classList.add("checked")
       } else{
           event.target.parentNode.classList.remove('checked')
       }
}