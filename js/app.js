/* Dato un array di oggetti letterali con:
url dell’immagine
titolo
descrizione Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il 
container e inseriamo l’immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo 
aggiungervi titolo e testo.
Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la 
freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura 
se l’utente clicca la freccia verso sinistra.*/

//- Creo l'array di oggetti letterali
const imgs = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//- creare collegamento al DOM del container del carosello
const containerDomElement = document.querySelector('.slide-container');
console.log(imgs.length);
//- creare ciclo for per girare le images fin quando i è minore della lunghezza dell'array
for (let i = 0; i < imgs.length; i++) {
    let imgsPath = imgs[i]; //per prendere quell'image con quell'indice
    console.log(imgsPath);
    //  - template literal che sovrascrive contenuto html
    const htmlString = `<div class="image">
                        <img src="${imgsPath.image}">
                        <div class="description"><h1>${imgsPath.title}</h1>
                        <p>${imgsPath.text}</p></div>
                        </div>`;
    console.log(htmlString);
    // aggiungere contenuto all'innerHTML
    containerDomElement.innerHTML += htmlString;
}
// recuperare le imgs dal DOM usando la classe creata con il template literal
const imageDomElement = document.querySelectorAll('.image');
console.log(imageDomElement);
// assegnare variabile che definisce la prima img attiva
let activeImg = 0;
// aggiungere alla prima img, la 0, la classe active 
const firstImageDomElement = imageDomElement[activeImg];
firstImageDomElement.classList.add('active');
// recuperare l'icona dal DOM, assegnandogli la funzione click
const iconUpDomElement = document.querySelector('.icon-up');
iconUpDomElement.addEventListener('click', function() {
    console.log('click icon-up');
    // rimuovere la classe attiva dalla prima img
    imageDomElement[activeImg].classList.remove('active');
    activeImg++; // incrementare per selezionare l'img successiva
    // SE activeImg è identico alla lunghezza dell'array
    if (activeImg === imgs.length) {
        activeImg = 0; // ALLORA non si interrompe il ciclo ma torna a zero e ricomincia
    }
// aggiungere la classe attiva all'img successiva
    imageDomElement[activeImg].classList.add('active');
});
// recuperare l'icona dal DOM, assegnandogli la funzione click
const iconDownDomElement = document.querySelector('.icon-down');
iconDownDomElement.addEventListener('click', function() {
    console.log('click icon-down');
    // rimuovere la classe attiva dall'ultima img
    imageDomElement[activeImg].classList.remove('active');
    activeImg--; // decrementare per selezionare l'img precedente
    // SE activeImg è minore di 0 
    if(activeImg < 0) {
        activeImg = imgs.length - 1; //ALLORA activeImg tornerà all'ultima img, riaprendo il ciclo in senso contrario
    }
// aggiungere la classe attiva all'img successiva in senso contrario
    imageDomElement[activeImg].classList.add('active');
});
