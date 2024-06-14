<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>TV Program</title>
    <style>
        /* Ovde možete dodati svoje CSS stilove ako je potrebno */
    </style>
</head>
<body>
    <div class="kontejner">
        <nav>
            <ul>
                <li><a href="index.php">Zadatak 7</a></li>
                <li><a id="mica" href="index.php">Red Voznje</a></li>
            </ul>
        </nav>
    </div>

    <!-- Container for the dropdowns -->
    <div id="dropdownContainer">
        Linija
        <select id="fileDropdown" onchange="populateDirectionDropdown()">
            <?php
            $folderPath = './Prilog/'; // Putanja do direktorijuma sa datotekama
            $fileNames = array_diff(scandir($folderPath), array('.', '..'));
            foreach ($fileNames as $fileName) {
                // Ukloni .txt ekstenziju
                $fileNameWithoutExt = pathinfo($fileName, PATHINFO_FILENAME);
                echo "<option value='./Prilog/{$fileName}'>$fileNameWithoutExt</option>";
            }
            ?>
        </select>
        Smer
        <select id="typeDropdown"></select> <!-- Dropdown for types -->
        <button id="searchButton">Pronađi</button>
    </div>
    <hr>

    <!-- Table to display TV program -->
    <table id="tvProgramTable">
        <thead>
            <tr>
                <th>Rbr</th>
                <th>Polazak</th>
            </tr>
        </thead>
        <tbody id="tvProgramBody"></tbody>
    </table>

    <div class="dole">
        <p class="elektro">Elektro saobracajna skola Nikola Tesla Nis<p>
        <a href="index.php" class="active">Program</a>
        <a href="./html/kontakt.html">Kontakt</a>
        <a href="./html/uputstvo.html">Korisnicko uputstvo</a>
    </div>

    <script src="./js/scripta.js"></script> <!-- Include the JavaScript file -->
</body>
</html>
