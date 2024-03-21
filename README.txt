HTML i CSS realizujemy za pomocą bootstramp

1. Tworzymy 2 formularze (19 stycznia)

pierwszy - dane ucznia (imie nazwisko klasa data urodzenia
drugi - dot. ksiazek (autor tytul ISBN, data wydania)
dodac do kazdego z formularzy id inicjały i nr z dziennika np - Bródka Mateusz nr 7 - bm7
strzelamy danymi za pomoca AJAX na adres url https://imiki.pl/projekt/md13 <- POST

2. wyswietlanie danych z JSON(26 stycznia)

pobieramy dane za pomoca json

https://imiki.pl/projekt/id/books
hhtps://imiki.pl/projekt/id/users
wyswietlacie dane za pomocą tabeli z ustawionym interwałem (co 10-20 sek dane beda sie automatycznie odswiezaly

3. Menu na stronie
- 1 dodaj ucznia
- 2 dodaj ksiązke
- 3 wyświetl uczniów
- 4 wyswietl ksiazki

Menu realizujemy za pomoca funckji JS z wykorzystaniem css hidden i show

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}