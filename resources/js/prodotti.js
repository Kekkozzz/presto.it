let contenitoreNav = document.querySelector('#contenitore-navbar')
let navbar = document.querySelector('#navbar-js')

window.addEventListener('scroll', () => {

    let scrolled = window.scrollY

    if (scrolled > 0) {
        contenitoreNav.classList.add('sticky-top', 'container-fluid', 'bg-white', 'px-0',)
    } else {
        contenitoreNav.classList.remove('sticky-top', 'container-fluid')
    }

    if (window.scrollY === 0) {
        contenitoreNav.classList.add('bounce');
        setTimeout(() => {
            contenitoreNav.classList.remove('bounce');
        }, 800);
    }

})

// INIZIALIZZAZIONE JSON
fetch('../resources/prodotti.json')
    .then(response => response.json())
    .then(data => {
        //console.log(data);

        //COMPARSA SEARCH BAR DA SMARTPHONE
        let searchBtnSmartphoneNav = document.querySelector('#searchBtnSmartphoneNav');
        let searchBarSmartphone = document.querySelector('#searchBarSmartphone');

        searchBtnSmartphoneNav.addEventListener('click', ()=>{
            searchBarSmartphone.classList.toggle('d-none');
        })


        
        let radioWrapper = document.querySelector("#radioWrapper");
        let cardsWrapper = document.querySelector("#cardsWrapper");

        // FUNZIONE CHE CREA LE CATEGORIE PER IL FILTRO NELL'ACCORDION
        function filtraCategoria () {
            let categorie = [];

            data.forEach(prodotto => {
                if(!categorie.includes(prodotto.categoria)){
                    categorie.push(prodotto.categoria);
                }
            });

            categorie.forEach(categoria => {
                
                let div = document.createElement("div");
                div.classList.add("form-check");
                div.innerHTML = `
                                <input class="form-check-input accordion-filter-function" type="radio" name="flexRadioDefault"
                                id="${categoria}">
                                <label class="form-check-label" for="${categoria}">
                                    ${categoria}
                                </label>
                `
                radioWrapper.appendChild(div);
            })

            // console.log(categorie);
            
        }

        filtraCategoria();



        //FUNZIONE CHE CREA LE CARD DEI PRODOTTI

        function creaCarte(array) {

            cardsWrapper.innerHTML = '';

            if (array.length == 0){
                cardsWrapper.innerHTML = ''
                let h5 = document.createElement('h5');
                h5.classList.add('text-center', 'fs-2', 'pt-5', 'text-black');
                h5.innerHTML = "Nessun Prodotto Disponibile"

                let p = document.createElement('p');
                p.classList.add('text-center', 'fs-5', 'text-black');
                p.innerHTML = `<a href="./prodotti.html" class="link-prodotti">Sfoglia Tutti i Prodotti</a>`

                cardsWrapper.appendChild(h5)
                cardsWrapper.appendChild(p)

            }else{
            
                array.forEach(prodotto => {

                    let div = document.createElement("div")
                    div.classList.add("col-12", "col-md-3", "p-2","px-md-4", "mt-4")
    
                    if (prodotto.categoria == "computer") {
    
                        div.innerHTML = `<div class="card alt-card" style="width: 100%;">
                                        <img src="../media/images/macbook_bg_black.png" class="card-img-top" alt="img-card">
                                        <div class="card-body">
                                        <p class="card-text mb-1">${prodotto.brand}</p>
                                        <h5 class="card-title">${prodotto.nome}</h5>
                                            <p class="card-text">${prodotto.descrizione}</p>
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
    
                    } else if (prodotto.categoria == "smartwatch") {
    
                        div.innerHTML = `
                                    <div class="card alt-card" style="width: 100%;">
                                        <img src="../media/images/appleWatch_horizontal_bg_black.png" class="card-img-top" alt="img-card">
                                        <div class="card-body">
                                        <p class="card-text mb-1">${prodotto.brand}</p>
                                        <h5 class="card-title">${prodotto.nome}</h5>
                                            <p class="card-text">${prodotto.descrizione}</p>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item font-prezzi">€ ${prodotto.prezzo}</li>
                                        </ul>
                                        <div class="card-body d-flex flex-column justify-content-center">
                                            <a class="btn btn-acquista-ora" role="button">Acquista ora</a>
                                            <a class="btn btn-aggiungi-al-carrello" id="addToCartSmartwatch" role="button">Aggiungi al carrello</a>
                                        </div>
                                    </div>
                    `
    
                    } else if (prodotto.categoria == "smartphone") {
    
                        div.innerHTML = `
                                    <div class="card alt-card" style="width: 100%;">
                                        <img src="../media/images/iphone_bg_black.png" class="card-img-top" alt="img-card">
                                        <div class="card-body">
                                        <p class="card-text mb-1">${prodotto.brand}</p>
                                        <h5 class="card-title">${prodotto.nome}</h5>
                                            <p class="card-text">${prodotto.descrizione}</p>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item font-prezzi">€ ${prodotto.prezzo}</li>
                                        </ul>
                                        <div class="card-body d-flex flex-column justify-content-center">
                                            <a class="btn btn-acquista-ora" role="button">Acquista ora</a>
                                            <a class="btn btn-aggiungi-al-carrello" id="addToCartSmartphone" role="button">Aggiungi al carrello</a>
                                        </div>
                                    </div>
                    `
    
                    } else if (prodotto.categoria == "console") {
    
                        div.innerHTML = `
                                    <div class="card alt-card" style="width: 100%;">
                                        <img src="../media/images/PS5_bg_black.png" class="card-img-top" alt="img-card">
                                        <div class="card-body">
                                        <p class="card-text mb-1">${prodotto.brand}</p>
                                        <h5 class="card-title">${prodotto.nome}</h5>
                                            <p class="card-text">${prodotto.descrizione}</p>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item font-prezzi">€ ${prodotto.prezzo}</li>
                                        </ul>
                                        <div class="card-body d-flex flex-column justify-content-center">
                                            <a class="btn btn-acquista-ora" role="button">Acquista ora</a>
                                            <a class="btn btn-aggiungi-al-carrello" id="addToCartConsole" role="button">Aggiungi al carrello</a>
                                        </div>
                                    </div>
                    `
    
                    }
    
                    cardsWrapper.appendChild(div)
                })
    

            }
                    }
        creaCarte(data);



        // FUNZIONE CHE FILTRA I PRODOTTI IN BASE ALLA CATEGORIA DEL FILTRO 
        let radioCategories = document.querySelectorAll(".form-check-input")
        let radioBtnCategoria = document.querySelectorAll(".accordion-filter-function");
        let All = document.querySelector("#All");


        function filtroCategoria (category) {
            
            let categoryNodelist = Array.from(radioCategories);
            let checkedCategory = categoryNodelist.find(btn => btn.checked);
            let categoria = checkedCategory.id
            
            if (categoria == "All") {

                return category
                
            } else {
                
                return category.filter(prodotti => prodotti.categoria==categoria);
            }
            
        }




        //FUNZIONE CHE IMPOSTA IL MASSIMO ED IL MINIMO VALORE DI PREZZO
        let inputMin = document.querySelector('#inputMin')
        let inputMax = document.querySelector('#inputMax')
        let btnFilterPrice = document.querySelector('#btn-prova')


        function setInputPrice(){

            let prices = data.map( (prodotto)=> Number(prodotto.prezzo) )

            let minPrice = Math.ceil(Math.min(...prices));
            let maxPrice = Math.ceil(Math.max(...prices));


            inputMin.value = minPrice;
            inputMax.value = maxPrice;
            
        }

        setInputPrice();



        //FUNZIONE CHE FILTRA I PRODOTTI IN BASE AD UN RANGE DI PREZZO
        function filterByInputPrice(array){

            let filtered = array.filter((el) => el.prezzo >= +inputMin.value && el.prezzo <= +inputMax.value)

            return filtered

        }


        //FUNZIONE CHE FILTRA I PRODOTTI IN BASE AL NOME
        let ricercaPerParola = document.querySelector("#ricercaPerParola")

        function filterByInputName(array) {
            //console.log(ricercaPerParola.forEach( el => el.value.toLowerCase()));
            
            
            let filtered = array.filter(prodotto => prodotto.nome.toLowerCase().includes(ricercaPerParola.value.toLowerCase()));
                return filtered


        }

        

        // FILTRO GLOBALE (CATEGORIA, PREZZO, NOME)
        function globalFilter() {
            let filteredCategory = filtroCategoria(data);
            let filteredPrice = filterByInputPrice(filteredCategory); 
            let filteredName = filterByInputName(filteredPrice);

            creaCarte(filteredName)
        }



        radioCategories.forEach(btn => {
            btn.addEventListener("click", ()=> globalFilter());
        })

        btnFilterPrice.addEventListener("click", ()=>{

            if(+inputMin.value > +inputMax.value){
                cardsWrapper.innerHTML = ''
                let h5 = document.createElement('h5');
                h5.classList.add('text-center', 'fs-2', 'pt-5', 'text-black');
                h5.innerHTML = "Errore, il valore minimo non deve essere superiore del valore massimo"

                let p = document.createElement('p');
                p.classList.add('text-center', 'fs-5', 'text-black');
                p.innerHTML = `<a href="./prodotti.html" class="link-prodotti">Sfoglia Tutti i Prodotti</a>`

                cardsWrapper.appendChild(h5)
                cardsWrapper.appendChild(p)

            } else {

                console.log("ciao");
                
                globalFilter();
            }

        } )

        ricercaPerParola.addEventListener("input", () => 
            setTimeout(()=>{
                globalFilter();
            }, 1000));


        //RESET FILTRI 
        let resetFilterBtn = document.querySelector('#resetFilterBtn');

            resetFilterBtn.addEventListener('click', ()=>{
            ricercaPerParola.value = '';

            setInputPrice();

            All.checked=true;

            globalFilter();
        })

        

        // FUNZIONE CHE METTE PRODOTTI NEL CARRELLO (SOLO NUMERO INCREMENTALE)
        let addToCart = document.querySelectorAll('.btn-aggiungi-al-carrello');

        let cartCount = 0;
        

        function addCart (btnCategory) {


            btnCategory.forEach(btn => {
                btn.addEventListener('click', ()=>{
                    cartCount++;
                    document.querySelectorAll('.carrello-nav').forEach( el => el.setAttribute("cart-count", cartCount));
                })
            })
            
        }


        addCart(addToCart);









    })