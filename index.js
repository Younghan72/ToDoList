var list = document.getElementById('list')
var data
function getData() {
    fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
        .then(res =>{
            if(res.status==200){
                return res.json()
            } else {
                console.log(res.statusText)
            }
        })
        .then(jsonData =>{
            data = jsonData
            for (let i = 0; i < jsonData.length; i++) {
                makingList(jsonData[i])
                
            }
        })
        .catch(err =>{
            console.log(err)
        })
}
getData()
function makingList(target) {
    // console.log(target)
    var div = document.createElement('div')
    var label = document.createElement('label')
    var input = document.createElement('input')
    var i = document.createElement('i')
    var value = document.createTextNode(target.title)

    input.type = "checkbox"
    div.id = target.id
    div.appendChild(label)
    label.appendChild(input)
    label.appendChild(value)
    div.appendChild(i)
    
    //배열의 DO 값이 True 면 Checked 클래스 주기
    if (target.completed==1) {
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
            title: contents.value ,
            completed: false
        }
    )
    makingList(data[data.length-1])
    contents.value = ""
}

function remove(){
    list.removeChild(event.target.parentNode)
}
//checked==true data.completed=true
function checkLine(event) {
    if (event.target.tagName == "LABEL") {
        return false
    }
    
    if (event.target.checked) {
        event.target.parentNode.classList.add("checked")
    } else{
        event.target.parentNode.classList.remove('checked')
    }
}