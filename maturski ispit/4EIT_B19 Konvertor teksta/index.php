
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Konvertor teksta</title>
    <link rel="stylesheet" href="./css/stiling.css">
</head>
<body>
<div class="kontejner">
   
    <nav>
        <ul>
            <li><a href="index.php">Zadatak 9</a></li>
            <li><a id="mica" href="index.php">Konvertor teksta</a></li>
        </ul>
    </nav>
</div>

<form>
  <textarea width="100%" height="100%" name="latin_text" wrap="logical" rows="10" cols="40"></textarea>
  
  <br/>
  <br/>
  
  <font face="Verdana">
    <input type="button" value="Пребаци у ћирилицу" onclick="jsvucko()">
  </font>&nbsp;
  
  <div style="position:absolute; right:0; top:10px;">
  <textarea width="100%" height="100%" name="cyrillic_text" wrap="logical" rows="10" cols="40"></textarea>
  
  <br/>
  <br/>
  <font face="Verdana">
    <input type="button" value="Пребаци у латиницу" onclick="jscirulat()">
  </font>&nbsp;
  <br/>

  </div>
  <p>
    <input type="button" value="Обриши текст у оба прозора" onclick="clear_text()">
  </p>
</form>
    <div class="dole">
    <p class="elektro">Elektro saobracajna skola Nikola Tesla Nis<p>
  <a href="index.php" class="active">Program</a>
  <a href="./html/o autoru.html">O autoru</a>
  <a href="./html/uputstvo.html">Korisnicko uputstvo</a>
</div>
    <script src="./js/skripta.js">


    </script>
</body>
</html>
