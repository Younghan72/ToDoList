var data = [
    {
        id: 4,
        content: '할일1',
        do:true
    }
    ,
    {
        id: 6,
        content: '할일2',
        do: true
    }
    ,
    {
        id: 5,
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
    
    //배열의 DO 값이 True 면 Checked 클래스 주기
    if (target.do==1) {
        label.classList.add("checked")
        input.checked=true

    }

    
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
    console.log(event.target.parentNode.id)

//  es5  var index = data.findIndex(function(object){
//        return object.id == event.target.parentNode.id
//    })

    //es6
    var index = data.findIndex(object => object.id == event.target.parentNode.id)
    console.log(index)
    data.splice(index,1)
}
//checked==true data.do=true
function checkLine(event) {
    if (event.target.tagName == "LABEL") {
        return false
    }
    
    var index = data.findIndex(object => object.id == event.target.parentNode.parentNode.id)
    console.log(index)
    if (event.target.checked) {
        event.target.parentNode.classList.add("checked")
        data[index].do=true
    } else{
        event.target.parentNode.classList.remove('checked')
        data[index].do = false
    }
}