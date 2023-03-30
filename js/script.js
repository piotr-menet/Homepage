
let button = document.querySelector(".js__button");
let body = document.querySelector(".js__body");

button.addEventListener("click", () => {
    body.classList.toggle("js__body--dark");

    if (body.classList.contains("js__bodyDark")) {
        button.innerText = "Wlacz jasny motyw";
    } else {
        button.innerText = "Wlacz ciemny motyw";
    }
});


