// Function to fetch data and populate the table
function fetchDataAndPopulateTable() {
    const selectedFileName = document.getElementById('fileDropdown').value;

    // Fetch content of selected file
    fetch(selectedFileName)
    .then(response => response.text())
    .then(text => {
        // Populate the table with program data
        const lines = text.split('\n');
        const tableBody = document.getElementById('tvProgramBody');
        tableBody.innerHTML = ''; // Clear the table body
        lines.forEach(line => {
            const parts = line.split('|');
            if (parts.length >= 4) {
                const time = parts[0].trim();
                const name = parts[1].trim();
                const type = parts[2].trim();
                const image = parts[3].trim();
                const row = `<tr>
                                <td>${time}</td>
                                <td>${name}</td>
                                <td>${type}</td>
                                <td><img src="${image}" alt="${name}" width="50"></td>
                            </tr>`;
                tableBody.innerHTML += row;
            }
        });
        // Populate the type dropdown with unique types
        populateTypeDropdown();
    })
    .catch(error => console.error('Error fetching file:', error));
}

// Function to populate the type dropdown
function populateTypeDropdown() {
    const table = document.getElementById('tvProgramTable');
    const typeDropdown = document.getElementById('typeDropdown');
    const types = new Set();

    // Iterate over rows in table and collect unique types
    for (let i = 1; i < table.rows.length; i++) {
        const type = table.rows[i].cells[2].innerText;
        types.add(type);
    }

    // Populate the type dropdown
    typeDropdown.innerHTML = '';
    types.forEach(type => {
        const option = document.createElement('option');
        option.text = type;
        typeDropdown.add(option);
    });
}

// Function to filter table by selected type
function filterTableByType() {
    const selectedType = document.getElementById('typeDropdown').value;
    const table = document.getElementById('tvProgramTable');

    // Iterate over rows in table and show/hide based on selected type
    for (let i = 1; i < table.rows.length; i++) {
        const type = table.rows[i].cells[2].innerText;
        if (type === selectedType || selectedType === 'Svi') {
            table.rows[i].style.display = '';
        } else {
            table.rows[i].style.display = 'none';
        }
    }
}

// Call the function to populate the file dropdown when the page loads
document.addEventListener('DOMContentLoaded', fetchDataAndPopulateTable);
