var list = document.getElementById('list')
var data
function getData() {
    document.getElementById('list').innerHTML=""
    fetch('http://127.0.0.1:3000/todos')
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
    fetch(`http://127.0.0.1:3000/todos?title=${text.value}`, {
        method: 'post'
    })
    .then(res =>{
        if(res.status==200){
            //get Data 함수 다시 호출
            getData()
        } 
    })
    .catch(err =>{
        console.log(err)
    })
    //배열의 길이 가져오기(배열이름.length)
    //배열에 값 추가하기
    contents.value = ""
    
}

function remove(){
    fetch(`http://127.0.0.1:3000/todos?id=${event.target.parentNode.id}`, {
        method: 'delete'
    })
    .then(res =>{
        if(res.status==200){
            //get Data 함수 다시 호출
            getData()
        } 
    })
    .catch(err =>{
        console.log(err)
    })
}
//checked==true data.completed=true
function checkLine(event) {
    var check
    if (event.target.tagName == "LABEL") {
        return false
    }
    if (event.target.checked){
        check = 1
    } else {
        check = 0
    }
    fetch(`http://127.0.0.1:3000/todos?id=${event.target.parentNode.parentNode.id}&completed=${check}`, {
        method: 'put'
    })
    .then(res =>{
        if(res.status==200){
            //get Data 함수 다시 호출
            getData()
        } 
    })
    .catch(err =>{
        console.log(err)
    })
    // if (event.target.checked) {
    //     event.target.parentNode.classList.add("checked")
    // } else{
    //     event.target.parentNode.classList.remove('checked')
    // }
}