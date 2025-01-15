// SCRIPT SLIDE SWIPER
var swiper4 = new Swiper(".mySwiper", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [180, 0, 0],
        },
        next: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [-180, 0, 0],
        },
    },
});



// SCRIPT SLIDE ULTIMI ARRIVI (NON FUNZIONANO BREAKPOINTS, PROBABILE ERRORE LIVE SERVER)
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,

    breakpoints: {
            640: {
                slidesPerView: 10,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
    },
});

// FAKE LOADER
let contenuto = document.querySelector("#contenuto")
let loadingScreen = document.querySelector("#loadingScreen")

    setTimeout(()=>{
        contenuto.classList.remove('d-none');
        loadingScreen.classList.add('d-none');
        contenuto.classList.add('fadeIn')
    }, 4)

// FIXED NAVBAR && RIMBALZO

let contenitoreNav = document.querySelector('#contenitore-navbar')
let navbar = document.querySelector('#navbar-js')

window.addEventListener('scroll', ()=>{

    let scrolled = window.scrollY
    
    if (scrolled > 0){
        contenitoreNav.classList.add('sticky-top', 'container-fluid', 'bg-white', 'px-0', )
    } else{
        contenitoreNav.classList.remove('sticky-top', 'container-fluid')
    }

    if (window.scrollY === 0) {    
        contenitoreNav.classList.add('bounce');
        setTimeout(() => {
            contenitoreNav.classList.remove('bounce');
        }, 800);
    }

})


//COMPARSA SEARCH BAR DA SMARTPHONE
let searchBtnSmartphoneNav = document.querySelector('#searchBtnSmartphoneNav');
let searchBarSmartphone = document.querySelector('#searchBarSmartphone');

searchBtnSmartphoneNav.addEventListener('click', ()=>{
    searchBarSmartphone.classList.toggle('d-none');
})


// FUNZIONE CONTA NUMERI

let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');
let thirdNumber = document.querySelector('#thirdNumber');
let fourthNumber = document.querySelector('#fourthNumber');
let observed = document.querySelector('#observed');

function numberCounter(number, limit, time) {

    let counter = 0;

    let interval = setInterval(() => {

        if (counter < limit) {
            counter++;
            number.innerHTML = counter;
        } else {
            clearInterval(interval);  //quando la variabile raggiunge l'else l'intervallo viene interrotto
        }

    }, time)
}


let isChecked = false;


// FUNZIONE OBSERVER NUMERI
let observer = new IntersectionObserver((entries) => {
    // INIZIALIZZAZIONE AOS PER EFFETTI FIKI DEI NUMERI INCREMENTALI
    AOS.init();
    entries.forEach(entry => {
        if (entry.isIntersecting && isChecked == false) {
            numberCounter(firstNumber, 250, 30);
            numberCounter(secondNumber, 2000, 1);
            numberCounter(thirdNumber, 1500, 2);
            numberCounter(fourthNumber, 30, 160);
            isChecked = true;
        } 
    })
})

observer.observe(fourthNumber);

// CARD ULTIMI ARRIVI

fetch('../resources/prodotti.json')
.then(response => response.json())
.then(data => {   

    let wrapperUltimiArrivi = document.querySelector('#wrapperUltimiArrivi')

    function creaCardSlide (array){


        wrapperUltimiArrivi.innerHTML= ''

        array.forEach((prodotto, index) => {

            if(index >= array.length - 10){
                let div = document.createElement('div');
                div.classList.add('swiper-slide');
                div.innerHTML = `
                                <div style="min-height: 500px; width: 80%;">
                                    <img src="../media/images/macbook_bg_black.png" class="card-img-top" alt="img-card">
                                    <div class="card-body">
                                    <p class="card-text text-brand-slide mb-1">${prodotto.brand}</p>
                                    <h5 class="card-title text-nome-slide">${prodotto.nome}</h5>
                                        <p class="card-text text-descrizione-slide">${prodotto.descrizione}</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item font-prezzi">€ ${prodotto.prezzo}</li>
                                    </ul>
                                    <div class="card-body d-flex flex-column justify-content-center">
                                        <a class="btn btn-acquista-ora" role="button">Acquista ora</a>
                                        <a class="btn btn-aggiungi-al-carrello" id="addToCartComputer" role="button">Aggiungi al carrello</a>
                                    </div>
                                </div>
                `

                wrapperUltimiArrivi.appendChild(div);
            }
        })
    }

    creaCardSlide(data);



    // FUNZIONE CHE METTE PRODOTTI NEL CARRELLO (SOLO NUMERO INCREMENTALE)
    let addToCart = document.querySelectorAll('.btn-aggiungi-al-carrello');
    //let carrelloNav = document.querySelector('#carrelloNav');

    let cartCount = 0;
    

    function addCart (btnProduct) {


        btnProduct.forEach(btn => {
            btn.addEventListener('click', ()=>{
                //carrelloNav.classList.add('carrello-nav');
                cartCount++;
                document.querySelectorAll('.carrello-nav').forEach( el => el.setAttribute("cart-count", cartCount));
            })
        })
        
    }

    addCart(addToCart);













})
