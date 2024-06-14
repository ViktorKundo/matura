<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pregled kursa na dan</title>
</head>
<body>
    <h1>Pregled kursa na dan</h1>
    <label for="datum">Datum:</label>
    <input type="date" id="datum">
    <label for="valuta">Valuta:</label>
    <select id="valuta">
        <!-- Options will be populated via JavaScript from web service -->
    </select>
    <button onclick="procitajKurs()">Pročitaj kurs</button>
    <div id="rezultat"></div>
    
    <script src="./js/script.js"></script>
</body>
</html>
