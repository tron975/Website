const announcement = document.querySelector(".announcement")
const chess = "document.getElementById('chess')"
const home = "document.getElementById('home')"

home.addEventListener("click", border)
chess.addEventListener("click", border)


function announce() { {
    announcement.style.display = "block";
    announcement.style.animation = "fadeIn 1.5s";
    };
}

home.onclick = function border() {
    document.style.borderBottom = "5px solid var(--light-blue)";

}