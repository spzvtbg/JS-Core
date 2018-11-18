function addItem () {
    
    const input = document.getElementById('newItemText');
    const ul = document.getElementById('items');

    ul.innerHTML += `<li class="offset-4 col-4 times">${input.value}</li>`;
    input.value = '';
}