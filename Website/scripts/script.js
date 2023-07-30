// Információk nyitása
function openInformaciok() {
    document.getElementById('open_egy').style.width = "50%";
    document.getElementById('open_egy').style.marginLeft = "40%";

    document.getElementById('open_ketto').style.width = "50%";
    document.getElementById('open_ketto').style.marginLeft = "100%";

    document.getElementById('open_harom').style.width = "50%";
    document.getElementById('open_harom').style.marginLeft = "100%";
};

function closeInformaciok() {
    document.getElementById('open_egy').style.width = "50%";
    document.getElementById('open_egy').style.marginLeft = "100%";
};

//Dokumentum-sémák nyitása 

function openDokumentumok() {
    document.getElementById('open_ketto').style.width = "50%";
    document.getElementById('open_ketto').style.marginLeft = "40%";

    document.getElementById('open_harom').style.width = "50%";
    document.getElementById('open_harom').style.marginLeft = "100%";

    document.getElementById('open_egy').style.width = "50%";
    document.getElementById('open_egy').style.marginLeft = "100%";
};

function closeDokumentumok() {
    document.getElementById('open_ketto').style.width = "50%";
    document.getElementById('open_ketto').style.marginLeft = "100%";
};

//Felhivások sémák nyitása

function openFelhivasok() {
    document.getElementById('open_harom').style.width = "50%";
    document.getElementById('open_harom').style.marginLeft = "40%";
    
    document.getElementById('open_egy').style.width = "50%";
    document.getElementById('open_egy').style.marginLeft = "100%";

    document.getElementById('open_ketto').style.width = "50%";
    document.getElementById('open_ketto').style.marginLeft = "100%";
};

function closeFelhivasok() {
    document.getElementById('open_harom').style.width = "50%";
    document.getElementById('open_harom').style.marginLeft = "100%";
};

let szabalyzatOpened = false;
function openerSzabalyzat() {
    if (!szabalyzatOpened) {
        document.getElementById('icon_opened_one').style.display = "flex";
        document.getElementById('icon_closed_one').style.display = "none";
        document.getElementById('szabalyzat').style.display = "grid";
        szabalyzatOpened = true;
    } else if (szabalyzatOpened) {
        document.getElementById('icon_closed_one').style.display = "flex";
        document.getElementById('icon_opened_one').style.display = "none";
        document.getElementById('szabalyzat').style.display = "none";
        szabalyzatOpened = false;
    }
}