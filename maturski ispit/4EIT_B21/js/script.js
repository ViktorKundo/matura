let sortOrder = 1; // 1 for ascending, -1 for descending
let sortedColumnIndex = null;

function sortTable(columnIndex) {
    const table = document.getElementById("Tabela");
    const rows = Array.from(table.getElementsByTagName("tr"));
    
    rows.shift(); // remove header row

    rows.sort((a, b) => {
        const aValue = a.getElementsByTagName("td")[columnIndex].innerText;
        const bValue = b.getElementsByTagName("td")[columnIndex].innerText;
        return aValue.localeCompare(bValue) * sortOrder;
    });

    if (sortedColumnIndex !== null && sortedColumnIndex !== columnIndex) {
        const prevSortedHeader = table.getElementsByTagName("th")[sortedColumnIndex];
        prevSortedHeader.classList.remove("sorted");
    }

    const currentHeader = table.getElementsByTagName("th")[columnIndex];
    currentHeader.classList.toggle("sorted");

    if (sortedColumnIndex === columnIndex) {
        sortOrder *= -1;
    } else {
        sortOrder = 1;
    }

    sortedColumnIndex = columnIndex;

    rows.forEach(row => table.appendChild(row));
}
