function sum () {
    let totalSum = 0;
    let sumCell = document.getElementById('sum');
    let tableContent = document.querySelectorAll('table tbody tr td:nth-child(2)');

    sumCell.textContent = '';

    for (const td of tableContent) {
        totalSum += +td.textContent;
    }

    sumCell.textContent = totalSum.toString();
}