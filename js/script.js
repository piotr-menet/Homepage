
{
function getElements() {
    const button = document.querySelector(".js__button");
    const body = document.querySelector(".js__body");
    return { button, body };
  }
  
  function toggleDarkMode(body) {
    body.classList.toggle("js__body--dark");
  }
  
  function updateButtonText(body, button) {
    button.innerText = body.classList.contains("js__body--dark")
      ? "Wlacz jasny motyw"
      : "Wlacz ciemny motyw";
  }
  
  
  function addButtonEventListener(button, body) {
    button.addEventListener("click", () => {
      toggleDarkMode(body);
      updateButtonText(body, button);
    });
  }
  
  function init() {
    const { button, body } = getElements();
    addButtonEventListener(button, body);
  }
  
  init();
}