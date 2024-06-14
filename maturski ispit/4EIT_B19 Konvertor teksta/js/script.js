function latinicaUCirilicu() {
    var latinicaText = document.getElementById("latinicaTextarea").value;
    var cirilicaText = latinicaToCirilica(latinicaText);
    document.getElementById("cirilicaTextarea").value = cirilicaText;
}

function cirilicaULatinicu() {
    var cirilicaText = document.getElementById("cirilicaTextarea").value;
    var latinicaText = cirilicaToLatinica(cirilicaText);
    document.getElementById("latinicaTextarea").value = latinicaText;
}

function latinicaToCirilica(text) {
    var map = {
        "a": "а",
        "b": "б",
        "c": "ц",
        "d": "д",
        "e": "е",
        "f": "ф",
        "g": "г",
        "h": "х",
        "i": "и",
        "j": "ј",
        "k": "к",
        "l": "л",
        "m": "м",
        "n": "н",
        "o": "о",
        "p": "п",
        "q": "љ",
        "r": "р",
        "s": "с",
        "t": "т",
        "u": "у",
        "v": "в",
        "w": "ш",
        "x": "џ",
        "y": "ѕ",
        "z": "з",
        "A": "А",
        "B": "Б",
        "C": "Ц",
        "D": "Д",
        "E": "Е",
        "F": "Ф",
        "G": "Г",
        "H": "Х",
        "I": "И",
        "J": "Ј",
        "K": "К",
        "L": "Л",
        "M": "М",
        "N": "Н",
        "O": "О",
        "P": "П",
        "Q": "Љ",
        "R": "Р",
        "S": "С",
        "T": "Т",
        "U": "У",
        "V": "В",
        "W": "Ш",
        "X": "Џ",
        "Y": "Ѕ",
        "Z": "З"
        "đ"
    };

    return text.replace(/[a-zA-Z]/g, function(match) {
        return map[match];
    });
}

function cirilicaToLatinica(text) {
    var map = {
        "а": "a",
        "б": "b",
        "ц": "c",
        "д": "d",
        "е": "e",
        "ф": "f",
        "г": "g",
        "х": "h",
        "и": "i",
        "ј": "j",
        "к": "k",
        "л": "l",
        "м": "m",
        "н": "n",
        "о": "o",
        "п": "p",
        "љ": "q",
        "р": "r",
        "с": "s",
        "т": "t",
        "у": "u",
        "в": "v",
        "ш": "w",
        "џ": "x",
        "ѕ": "y",
        "з": "z",
        "А": "A",
        "Б": "B",
        "Ц": "C",
        "Д": "D",
        "Е": "E",
        "Ф": "F",
        "Г": "G",
        "Х": "H",
        "И": "I",
        "Ј": "J",
        "К": "K",
        "Л": "L",
        "М": "M",
        "Н": "N",
        "О": "O",
        "П": "P",
        "Љ": "Q",
        "Р": "R",
        "С": "S",
        "Т": "T",
        "У": "U",
        "В": "V",
        "Ш": "W",
        "Џ": "X",
        "Ѕ": "Y",
        "З": "Z"
    };

    return text.replace(/[а-џЉ-ЏЅЗ]/g, function(match) {
        return map[match];
    });
}