const url = "https://imiki.pl/projekt/md13";
const plujka = document.getElementById("wyp");
var aktualnieWidocznyFormularz = null;

var aktualnieWidocznyFormularz = null;

    function pokazFormularz(idFormularza) {
      var formularz = document.getElementById(idFormularza);
      
      if (idFormularza === aktualnieWidocznyFormularz) {
        formularz.style.display = 'none';
        aktualnieWidocznyFormularz = null;
      } else {
        if (aktualnieWidocznyFormularz !== null) {
          document.getElementById(aktualnieWidocznyFormularz).style.display = 'none';
        }
        formularz.style.display = "block";
        aktualnieWidocznyFormularz = idFormularza;
      }
    }

window.onload = function () {
    document.getElementById("daneucznia").style.display = "none";
    document.getElementById("daneksiazka").style.display = "none";
};

function zapiszDane() {
    var imie = document.getElementById('imie').value;
    var nazwisko = document.getElementById('nazwisko').value;
    var klasa = document.getElementById('klasa').value;

    if (!validateForm()) {
        return;
    }

    wyslij(imie, nazwisko, klasa);
}

function wyslij(imie, nazwisko, klasa) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://imiki.pl/projekt/md13/users");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Utwórz dane POST
    const dane = `imie=${imie}&nazwisko=${nazwisko}&klasa=${klasa}`;

    // Wyślij dane
    xhr.send(dane);

    // Przechwyć odpowiedź
    xhr.onload = function () {
        if (xhr.status === 200) {
            pokazKomunikat("Dane zostały pomyślnie wysłane.");
        } else {
            pokazKomunikat("Wystąpił błąd podczas wysyłania danych. Spróbuj ponownie później.");
        }
    };
}

function pokazKomunikat(komunikat) {
    const komunikatElement = document.getElementById("komunikat");
    komunikatElement.innerText = komunikat;

    setTimeout(function () {
        komunikatElement.innerText = "";
    }, 3000);
}

function validateForm() {
    const textRegex = /^[a-zA-Z]+$/;
    const txtnumRegex = /^[a-zA-Z0-9]+$/;

    return validateField("imie", textRegex) && validateField("nazwisko", textRegex) && validateField("klasa", txtnumRegex);
}

function validateField(fieldName, regex) {
    const field = document.getElementById(fieldName);
    const fieldValue = field.value.trim();

    if (!regex.test(fieldValue)) {
        alert("Błąd walidacji: " + fieldName);
        return false;
    }

    return true;
}
