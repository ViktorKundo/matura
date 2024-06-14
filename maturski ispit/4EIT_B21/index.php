
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sortiranje tabele</title>
    <link rel="stylesheet" href="./css/stiling.css">
</head>
<body>
<div class="kontejner">
   
    <nav>
        <ul>
            <li><a href="index.php">Zadatak 21</a></li>
            <li><a id="mica" href="index.php">Sortiranje tabele</a></li>
        </ul>
    </nav>
</div>

<h1>Сортирање табеле</h1>
    <table id="Tabela">
        <tr>
            <th class="sort" onclick="sortTable(0)">Rbr</th>
            <th class="sort" onclick="sortTable(1)">Ime</th>
            <th class="sort" onclick="sortTable(2)">Prezime</th>
        </tr>
        <tr>
            <td>1.</td>
            <td>Pera</td>
            <td>Mikic</td>
        </tr>
        <tr>
            <td>2.</td>
            <td>Mika</td>
            <td>Zikic</td>
        </tr>
        <tr>
            <td>3.</td>
            <td>Zika</td>
            <td>Peric</td>
        </tr>
    </table>
    <div class="dole">
    <p class="elektro">Elektro saobracajna skola Nikola Tesla Nis<p>
  <a href="index.php" class="active">Program</a>
  <a href="./html/o autoru.html">O autoru</a>
  <a href="./html/uputstvo.html">Korisnicko uputstvo</a>
</div>
    <script src="./js/script.js">


    </script>
</body>
</html>
