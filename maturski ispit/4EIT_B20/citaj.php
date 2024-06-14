<?php
// Učitavanje XML datoteke
$xml = simplexml_load_file('./Prilog/kurs.xml');

// Prikaz XML sadržaja
echo $xml->asXML();
?>
