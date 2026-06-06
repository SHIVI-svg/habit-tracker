let habits = []
function Save(){
    let name = document.getElementById('NameUser').value
    if (name == ""){
        return
    }
    habits.push(name)
    localStorage.setItem('привычка', JSON.stringify(habits))
    document.getElementById('NameUser').value = ''
    document.getElementById('List').innerHTML += '<li>' + name + '<button onclick="Delete(\'' + name + '\')">Удалить</button>' + '</li>'
}
window.onload = function (){
    let text = JSON.parse(localStorage.getItem('привычка'))
    if (text == null){
        return;
    }
    text.forEach(function(item){
        document.getElementById('List').innerHTML += '<li>' + item + '<button onclick="Delete(\'' + item + '\')">Удалить</button>' + '</li>'
        let name = document.getElementById('NameUser').value
        habits.push(item)
    })
} 
function Delete(name){
    let index = habits.indexOf(name)
    habits.splice(index, 1)
    localStorage.setItem('привычка', JSON.stringify(habits))
    let text = JSON.parse(localStorage.getItem('привычка'))
    text.forEach(function(item){
        document.getElementById('List').innerHTML = '<li>' + item + '<button onclick="Delete(\'' + item + '\')">Удалить</button>' + '</li>'
        let name = document.getElementById('NameUser').value
    })
}