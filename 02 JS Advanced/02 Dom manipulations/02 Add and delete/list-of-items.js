
function addItem () {
    const input = document.getElementById('newText');
    const ul = document.getElementById('items');
    const li = document.createElement('li');
    const del = (e) => {
        ul.removeChild(e.target.parentNode);
    }

    li.addEventListener('click', del);
    li.classList.add('offset-2', 'col-8', 'times');
    li.innerHTML = `${input.value} [ <a class="del"> delete </a> ]`;

    ul.appendChild(li);

    input.value = '';
    input.focus();
}

// function addItem() {
//     let text = document.getElementById('newText').value;
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(text + " "));
//     let span = document.createElement('span');
//     span.innerHTML = "<a href='#'>[Delete]</a>";
//     span.firstChild.addEventListener('click', deleteItem);
//     li.appendChild(span);
//     document.getElementById("items").appendChild(li);
//     document.getElementById('newText').value = '';
//     function deleteItem() {
//     let li = this.parentNode.parentNode;
//     let ul = li.parentNode;
//     ul.removeChild(li);
//     }
// }