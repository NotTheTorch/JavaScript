const button1 = document.querySelector('.add-button-first');
let array = [];


button1.addEventListener('click',()=>{
    const value = document.querySelector('.input-taker-first').value;
    array.push(value);
    console.log(array);
});

const button2 = document.querySelector('.add-button-second');
let array2 = [];

button2.addEventListener('click',()=>{
    const value = document.querySelector('.input-taker-second').value;
    const extend = document.querySelector('.empty-container');
    array2.push(value);
    let emptyString = '';
    for(let i=0; i< array2.length; i++)
    {
        emptyString += array2[i] + '<br>';
    }

    extend.innerHTML = emptyString;

});

const button3 = document.querySelector('.add-button-final');
const extend = document.querySelector('.empty-container-final');
let array3 = [];

button3.addEventListener('click', () => {
    const value = document.querySelector('.input-taker-final').value;
    const date = document.querySelector('.date-taker-final').value;
    
    array3.push({ name: value, date: date });
    renderTodoList();
});

function renderTodoList() {
    let html = '';

    array3.forEach((item, index) => {
        html += `
            <div class='content'>
                <div style="width: 200px;">${item.name}</div>
                <div style="width: 150px;">${item.date}</div>
                <div><button class='delete-button' onclick='deleteItem(${index})'>Delete</button></div>
            </div>
        `;
    });

    extend.innerHTML = html;
}

function deleteItem(index) {
    array3.splice(index, 1);
    renderTodoList();
}
