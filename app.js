const expansion = document.querySelector(".expansion");
const toggle = document.querySelector("#toggle");

console.log("hi")

toggle.addEventListener("click", () => {
    if (toggle.checked === true) {
        expansion.classList.add("active");
    }else {
        expansion.classList.remove("active");
    }
});