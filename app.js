if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}
 
function calculate() {
    const prvnicislo = Number(document.getElementById("prvni").value);
    const druhecislo = Number(document.getElementById("druhe").value);
    const operator = document.getElementById("operace").value;
    const vysledek = document.getElementById("vysledek");

    switch(operator) {
        case "scitani":
            vysledek.innerText = prvnicislo + druhecislo;
            break;
        case "odecitani":
            vysledek.innerText = prvnicislo - druhecislo;
            break;
        case "nasobeni":
            vysledek.innerText = prvnicislo * druhecislo;
            break;
        case "deleni":
            vysledek.innerText = prvnicislo / druhecislo;
            break;
        default:
            vysledek.innerText = "error";
    }

}
