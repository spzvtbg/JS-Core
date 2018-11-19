function create(sentences) {
    let content = document.getElementById('content');
    sentences.forEach(section => {
        let div = document.createElement('div');
        let p = document.createElement('p');

        p.style.display = 'none';
        p.textContent = section;

        div.addEventListener('click', () => {
            p.style.display = 'block';
        });

        div.appendChild(p);
        content.appendChild(div);
    });
  }