
function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "hegedusd@eszi,hu",
        Password : "hegedusE1!",
        To : 'hegedusd@eszi.hu',
        From : document.getElementById("alapito_email").value,
        Subject : "Kisiparosi vállalkozás alapítása",
        Body : "Alapító személy adatok <br>Alapító személy neve: " + document.getElementById('alapito_nev').value
                + "<br> Alapító személy születési dátuma: " + document.getElementById('alapito_szul').value
                + "<br> Alapító személy e-mail címe: " + document-getElementById('alapito_email').value 
                + "<br> Alapító személy telefonszáma: " + document-getElementById('alapito_tel').value 
                +  "<br> Alapító személy erkölcsi tanusítvány száma: " + document.getElementById('alapito_erkszam').value
                + "<br><br><br> Cég adatok <br> Vállalkozás név: "+document.getElementById('ceg_nev').value
                + "<br> Vállalkozás internetes elérhetősége: "+document.getElementById('ceg_email').value
                + "<br> Vállalkozás címe: "+document.getElementById('ceg_cim').value
                + "<br> Vállalkozás kezdetleges alkalmazottainak száma: " + document.getElementById('ceg_alkszam').value
                + "<br> A cég kezdetleges alkalmazottainak adatai: "+document.getElementById('ceg_alkinfo').value
                + "<br> A cég profilja: " + document.getElementById('ceg_profil').value
            }).then(
      message => alert("Dokumentum sikeresen elküldve!")
    );
}