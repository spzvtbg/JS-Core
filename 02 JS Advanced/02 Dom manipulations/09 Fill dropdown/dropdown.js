function addItem () {
    let itemText = document.getElementById('newItemText');
    let itemValue = document.getElementById('newItemValue');
    let select = document.getElementById('menu');
    let option = document.createElement('option');

    option.textContent = `${itemText.value}: ${itemValue.value}`;
    select.appendChild(option);

    itemText.value = '';
    itemValue.value = '';
}