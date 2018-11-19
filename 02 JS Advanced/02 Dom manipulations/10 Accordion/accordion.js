function toggle () {
    let btn = document.getElementsByClassName('button')[0];
    let p = document.getElementById('extra');

    let toDo = btn.textContent;

    if (toDo === 'More') {
        btn.textContent = 'Less';
        p.style.display = 'block';
    } else if (toDo === 'Less') {
        btn.textContent = 'More';
        p.style.display = 'none';
    }
}