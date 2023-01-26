const form = document.querySelector('form');
const ul = document.querySelector('ul');
const input = document.querySelector('input');
const appBody = document.querySelector('.app-body');



// EventListeners
form.addEventListener("submit",(e) => {
    e.preventDefault();
    if(input.value.trim() != '') {
        appBody.classList.add('app-body-there');
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="value"><i class="fa-regular fa-circle-check circle"></i>${input.value.trim()}</span> <i class="fa-solid fa-trash del"></i>
        `;
        ul.append(li);
        input.value = '';
    }
});
appBody.addEventListener("click",(e) => {
    const element = e.target;
    if(element.classList.contains('circle') || element.classList.contains('done-circle')) {
        element.classList.toggle('circle');
        element.classList.toggle('done-circle');
        element.parentElement.classList.toggle('todo-done');
    }
    else if(element.classList.contains('del')) {
        element.parentElement.remove();
    }
    if(appBody.innerText == '') appBody.classList.remove('app-body-there');
});
