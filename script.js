const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");
});



const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach((button,index) => {

const saved = localStorage.getItem("like-" + index);

if(saved === "true"){
button.classList.add("active");
}

button.addEventListener("click", () => {

button.classList.toggle("active");

localStorage.setItem(
"like-" + index,
button.classList.contains("active")
);

});

});

const categoryButtons =
document.querySelectorAll(".category-btn");

const animeCards =
document.querySelectorAll(".anime-card");

categoryButtons.forEach(button => {

button.addEventListener("click", () => {

document
.querySelector(".category-btn.active")
.classList.remove("active");

button.classList.add("active");

const category = button.innerText;

animeCards.forEach(card => {

if(
category === "All" ||
card.dataset.category === category
){
card.style.display = "block";
}else{
card.style.display = "none";
}

});

});

});

const searchInput = document.getElementById("searchInput");
const autocompleteBox = document.getElementById("autocompleteBox");

searchInput.addEventListener("input", () => {

    const value = searchInput.value.trim().toLowerCase();

    autocompleteBox.innerHTML = "";

    if (value === "") return;

searchInput.addEventListener("input", () => {

    const value = searchInput.value.trim().toLowerCase();

    autocompleteBox.innerHTML = "";

    if (value === "") return;

    // Anime
    Object.entries(animeData).forEach(([id, anime]) => {

        if (anime.title.toLowerCase().includes(value)) {

            const div = document.createElement("div");
            div.className = "autocomplete-item";
            div.textContent = anime.title;

            div.addEventListener("click", () => {
                window.location.href = `anime.html?id=${id}`;
            });

            autocompleteBox.appendChild(div);
        }

    });

    // Manga
    Object.entries(mangaData).forEach(([id, manga]) => {

        if (manga.title.toLowerCase().includes(value)) {

            const div = document.createElement("div");
            div.className = "autocomplete-item";
            div.textContent = manga.title;

            div.addEventListener("click", () => {
                window.location.href = `manga.html?id=${id}`;
            });

            autocompleteBox.appendChild(div);
        }

    });

});

});

const modal =
document.getElementById("animeModal");
const closeModal = document.getElementById("closeModal");

const infoButtons = document.querySelectorAll(".info-btn");

infoButtons.forEach(button => {

    button.addEventListener("click", () => {

        const animeCard = button.closest(".anime-card");
        const mangaCard = button.closest(".manga-card");

        if (animeCard) {
            const id = animeCard.dataset.id;
            window.location.href = `anime.html?id=${id}`;
        }

        if (mangaCard) {
            const id = mangaCard.dataset.id;
            window.location.href = `manga.html?id=${id}`;
        }

    });

});

if (closeModal) {

    closeModal.addEventListener("click", () => {

        modal.style.display = "none";

    });

}

window.addEventListener("click", e => {

    if (modal && e.target === modal) {

        modal.style.display = "none";

    }

});



console.log("SCRIPT ISHLADI");