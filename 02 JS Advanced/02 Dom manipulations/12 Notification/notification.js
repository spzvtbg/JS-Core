function notify(message) {
    let alert = document.getElementById('notification');

    alert.textContent = message;
    alert.style.display = 'block';

    setTimeout(() => alert.style.display = 'none', 2000);
  }