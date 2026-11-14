// =================================================================
//  AboWächter – EINSTELLUNGEN
//  Das ist die EINZIGE Datei, die du selbst bearbeiten musst.
//  Solange hier "HIER_EINFUEGEN" steht, läuft die App ohne Cloud
//  (Konten nur auf dem Gerät).
// =================================================================

// 1) Firebase-Daten
//    Firebase-Konsole > Zahnrad (Projekteinstellungen) > Allgemein >
//    ganz unten "Meine Apps" > Web-App > "Konfiguration".
//    Ersetze jede Zeile mit dem passenden Wert (Anführungszeichen bleiben).
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAuDHStPr6r2FE3EaBxyJgxpXEbsKdfZ3M",
  authDomain: "abbowaechter.firebaseapp.com",
  projectId: "abbowaechter",
  storageBucket: "abbowaechter.firebasestorage.app",
  messagingSenderId: "45413811797",
  appId: "1:45413811797:web:13e4db0ef5e51316aab6dc"
};

// 2) Support-Adresse (wird z. B. gesperrten Nutzern angezeigt)
window.SUPPORT_MAIL = "deine-support-adresse@gmail.com";

// 3) Impressum (Pflicht, wenn du die App öffentlich anbietest)
window.IMPRESSUM = "Vorname Nachname, Straße und Hausnummer, PLZ Ort, E-Mail: deine-support-adresse@gmail.com";
