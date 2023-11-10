const input = document.getElementById("head");
const solo = document.getElementById("solo");
const deleteButton = document.getElementById("delete");
const number = document.getElementById("number");
const createButton = document.getElementById("create");
const editText = document.getElementById("head");
const editSave = document.getElementById("editSave");
let items = [];
function addNewItem() {
    if (input.value) {
        insert(input.value);
    } else {
        alert("Enter a valid task");
    }
}
editSave.addEventListener("click", () => {
    const index =  editSave.getAttribute("data-index")
    // console.log(index);
    items[index].text = editText.value;
    // console.log(index);
    createButton.style.display = "block";
    // head.style.display = "block"
    editSave.style.display = "none";
    displayItems();
});
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && getComputedStyle(editSave).display === "none") {
        event.preventDefault();
        addNewItem();
    }
});
createButton.addEventListener("click", addNewItem);
deleteButton.addEventListener("click", () => {
    const selectedItems = items.filter((item) => item.completed);
    if (selectedItems.length === 0) {
        alert("No items selected for deletion");
    } else {
        items = items.filter((item) => !item.completed);
        alert("Are you sure")
        displayItems();
    }
});
function insert(newItem) {
    items.push({ text: newItem, completed: false });
    displayItems();
}
function displayItems() {
    const itemHTML = items
        .map(
            (item, index) => `
            <div class="container ${item.completed ? "completed" : ""}">
                <span class="markclass"></span>
                <p>${item.text}</p>
                <button id="edit_${index}">Edit</button>
            </div>
        `
        )
        .join("");
    solo.innerHTML = itemHTML;
    input.value = "";
    console.log(items);
    updateNumber();
    addClickListeners();
}
function updateNumber() {
    number.innerHTML = `Total items: ${items.length}`;
}
function addClickListeners() {
    const containers = document.querySelectorAll(".container");
    containers.forEach((container, index) => {
        const mark = container.querySelector(".markclass");
        const editButton = container.querySelector(`#edit_${index}`);
        mark.addEventListener("click", () => {
            markItem(index);
        });
        editButton.addEventListener("click", () => {
            editSave.setAttribute("data-index",index)
            editItem(index);
        });
    });
}
function markItem(index) {
    items[index].completed = !items[index].completed;
    displayItems();
}
function editItem(index) {
    console.log(index);
    editText.value = items[index].text;
    // editText.style.display = "block";
    editSave.style.display = "block";
    // editSave.style.display = "none";
    createButton.style.display = "none";
}