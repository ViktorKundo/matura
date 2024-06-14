// Function to populate the direction dropdown based on the selected file
function populateDirectionDropdown() {
    const selectedFileName = document.getElementById('fileDropdown').value;

    // Fetch content of selected file
    fetch(selectedFileName)
    .then(response => response.text())
    .then(text => {
        const lines = text.split('\n');
        const typeDropdown = document.getElementById('typeDropdown');
        typeDropdown.innerHTML = ''; // Clear the dropdown
        let currentDirection = null;
        lines.forEach(line => {
            if (line.startsWith('SMER:')) {
                currentDirection = line.replace('SMER:', '').trim();
                const option = document.createElement('option');
                option.text = currentDirection;
                typeDropdown.add(option);
            }
        });
        // Populate the table initially with all data
        fetchDataAndPopulateTable();
    })
    .catch(error => console.error('Error fetching file:', error));
}

// Function to fetch data and populate the table based on selected file and direction
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
        let currentDirection = null;
        let counter = 0;
        lines.forEach(line => {
            if (line.startsWith('SMER:')) {
                currentDirection = line.replace('SMER:', '').trim();
                counter = 0; // Reset counter for each direction
            } else {
                const time = line.trim();
                const selectedDirection = document.getElementById('typeDropdown').value;
                if (currentDirection === selectedDirection || selectedDirection === 'Svi') {
                    counter++;
                    const row = `<tr data-direction="${currentDirection}">
                                    <td>${counter}</td>
                                    <td>${time}</td>
                                </tr>`;
                    tableBody.innerHTML += row;
                }
            }
        });
    })
    .catch(error => console.error('Error fetching file:', error));
}

// Call the function to populate the direction dropdown when the page loads
document.addEventListener('DOMContentLoaded', populateDirectionDropdown);