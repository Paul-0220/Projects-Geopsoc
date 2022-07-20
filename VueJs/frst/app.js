const buttonEl=document.querySelector('button')
const inputEl=document.querySelector('input')
const listEl=document.querySelector('ul')

function addGoal(){
    const getValue=inputEl.value
    const listItem=document.createElement('li')
    listItem.textContent=getValue
    listEl.append(listItem)
}

buttonEl.addEventListener('click',addGoal)