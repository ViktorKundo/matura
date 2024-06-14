// Funkcija za popunjavanje padajućeg menija za datum
function popuniDatume() {
    var select = document.getElementById("datum");
    var today = new Date().toISOString().split('T')[0]; // Trenutni datum
    var options = '';
    for (var i = 0; i < 7; i++) { // Dodajemo opcije za poslednjih 7 dana
        var date = new Date();
        date.setDate(date.getDate() - i);
        var formattedDate = date.toISOString().split('T')[0];
        options += '<option value="' + formattedDate + '">' + formattedDate + '</option>';
    }
    select.innerHTML = options;
}

// Funkcija za popunjavanje padajućeg menija za valutu
function popuniValute(valute) {
    var select = document.getElementById("valuta");
    var options = '';
    for (var i = 0; i < valute.length; i++) {
        options += '<option value="' + valute[i] + '">' + valute[i] + '</option>';
    }
    select.innerHTML = options;
}

// Funkcija za čitanje kursa na dan
function procitajKurs() {
    var datum = document.getElementById("datum").value;
    var valuta = document.getElementById("valuta").value;
    
    // Simulacija AJAX poziva ka XML veb servisu
    var kurs = 100; // Ovde bi se zaista pozvao XML veb servis
    document.getElementById("rezultat").innerHTML = "Srednji kurs za " + datum + " je: " + kurs;
}

// Funkcija za ažuriranje kursne liste
function upisiKurs() {
    var datum = document.getElementById("datum").value;
    var valuta = document.getElementById("valuta").value;
    var kurs = document.getElementById("kurs").value;
    
    // Simulacija AJAX poziva ka XML veb servisu
    var success = true; // Ovde bi se zaista pozvao XML veb servis
    if (success) {
        alert("Kurs uspešno upisan!");
    } else {
        alert("Došlo je do greške prilikom upisa kursa.");
    }
}

// Pozivamo funkciju za popunjavanje datuma pri učitavanju stranice
popuniDatume();

// Simulacija AJAX poziva ka XML veb servisu za popunjavanje valuta
var valute = ["EUR", "USD", "GBP", "CHF"]; // Ovde bi se zaista pozvao XML veb servis
popuniValute(valute);
