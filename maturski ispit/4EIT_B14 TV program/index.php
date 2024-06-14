<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./css/stil.css">
<title>TV Program</title>
<style>

</style>
</head>
<body>

<div class="kontejner">
   
    <nav>
        <ul>
            <li><a href="index.php">Zadatak 14</a></li>
            <li><a id="mica" href="index.php">TV Program</a></li>
        </ul>
    </nav>
</div>


<!-- Container for the dropdowns -->
<div id="dropdownContainer">
    <select id="fileDropdown" onchange="fetchDataAndPopulateTable()">
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
    <select id="typeDropdown"></select> <!-- Dropdown for types -->
    <button onclick="filterTableByType()">Pronađi</button>
</div>
<hr>
<!-- Table to display TV program -->
<table id="tvProgramTable">
    <thead>
        <tr>
            <th>Vreme</th>
            <th>Naziv emisije</th>
            <th>Tip emisije</th>
            <th>Slika</th>
        </tr>
    </thead>
    <tbody id="tvProgramBody"></tbody>
</table>
<div class="dole">
  <a href="index.php" class="active">Program</a>
  <a href="./html/kontakt.html">Kontakt</a>
  <a href="./html/uputstvo.html">Korisnicko uputstvo</a>
</div>
<script src="./js/script.js"></script> <!-- Include the JavaScript file -->
</body>
</html>
