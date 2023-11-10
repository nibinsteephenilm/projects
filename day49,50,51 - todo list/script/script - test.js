const input = document.getElementById('head');
const solo = document.getElementById('solo');
const deletei = document.getElementById('delete');
const number = document.getElementById('number');
const create = document.getElementById('create');
const editsave = document.getElementById('editsave')
let items = [];

create.addEventListener('click', () => {
    if (input.value) {
        insert(input.value);
    } else {
        alert('Enter a valid task');
    }
});

deletei.addEventListener('click', () => {
    items = items.filter((item) => !item.completed);
    displayItems();
});

function insert(newItem) {
    items.push({ 
        text: newItem,
        completed: false
    });
    displayItems();
}

editsave.addEventListener("click", () => {
    const index =  editSave.getAttribute("data-index")
    console.log(+index);
    items[+index].text = editText.value;
    // console.log(index);
    createButton.style.display = "block";
    head.style.display = "block"
    editSave.style.display = "none";
    displayItems();
});


// function addEditListeners() {
//     const editButtons = document.querySelectorAll('.editButton');
//     editButtons.forEach((editButton, index) => {
//         editButton.addEventListener('click', () => {
//             editItem(index);
//         });
//     });
// }

function displayItems() {
    const itemHTML = items.map((item,index) => `
        <div class="container ${item.completed ? 'completed' : ''}">
            <span class="markclass"></span>
            <p>${item.text}</p>
            <button class="editButton" id=""edit${index}>Edit</button>
        </div>
    `).join('');
    console.log(itemHTML)
    solo.innerHTML = itemHTML;
    input.value = '';
    updateNumber();
    addClickListeners();
}



// function editItem(index) {
//     const newText = prompt('Edit the item:', items[index].text);
//     if (newText !== null) {
//         items[index].text = newText;
//         displayItems();
//     }
// }



function updateNumber() {
    number.innerHTML = `${items.length} item total`;
}

function addClickListeners() {
    const containers = document.querySelectorAll('.container');
    containers.forEach((container, index) => {
        const mark = container.querySelector('.markclass');
        const editButton = container.querySelector(`#edit${index}`);

        mark.addEventListener('click', () => {
            markItem(index);
        });
        editButton.addEventListener("click", () => {
            editSave.setAttribute("data-index",index)
            editItem(index);
        });
    });
}


function editItem(index) {
    console.log(index);
    editText.value = items[index].text;
    editText.style.display = "block";
    editSave.style.display = "block";
    // editSave.style.display = "none";
    createButton.style.display = "none";
}

function markItem(index) {
    items[index].completed = !items[index].completed;
    displayItems();
}

// displayItems()