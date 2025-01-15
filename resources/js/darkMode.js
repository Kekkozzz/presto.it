let darkModeTrigger = document.querySelector("#darkModeTrigger")

let isClicked = true;

darkModeTrigger.addEventListener("click", ()=>{
    if (isClicked){ //dark mode
        document.documentElement.style.setProperty("--main", "white")
        document.documentElement.style.setProperty("--lightMode", "#14213d")

        darkModeTrigger.innerHTML = '<i class="fa-solid fa-moon  text-sec"></i>';

        isClicked = false;

        //impostare una coppia chiave valore nel Local Storage
        localStorage.setItem('mode', 'dark');
    } else { // lightMode
        document.documentElement.style.setProperty("--main", "#14213d")
        document.documentElement.style.setProperty("--lightMode", "white")

        darkModeTrigger.innerHTML = '<i class="fa-regular fa-moon text-sec"></i>';

        isClicked = true;

        localStorage.setItem('mode', 'light');
    }

    
})

//leggere un valore salvato in una chiave del local storage
let mode = localStorage.getItem('mode');

if(mode == 'dark'){ //dark mode
    document.documentElement.style.setProperty("--main", "white")
        document.documentElement.style.setProperty("--lightMode", "#14213d")

    darkModeTrigger.innerHTML = '<i class="fa-solid fa-moon text-sec"></i>';

    isClicked = false;
} else { //light mode
    document.documentElement.style.setProperty("--main", "#14213d")
    document.documentElement.style.setProperty("--lightMode", "white")

    darkModeTrigger.innerHTML = '<i class="fa-regular fa-moon text-sec"></i>';

    isClicked = true;
}