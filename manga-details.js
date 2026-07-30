const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const manga = mangaData[id];

const page = document.getElementById("mangaPage");

if (page) {

    if (manga) {

        page.innerHTML = `
            <div class="manga-details">

                <img src="${manga.image}" class="manga-image">

                <h1>${manga.title}</h1>

                <p>${manga.description}</p>

                <div class="stats">
                    <span>⭐ ${manga.rating}</span>
                    <span>🔥 ${manga.popularity}</span>
                    <span>❤ ${manga.likes}</span>
                </div>

                <a href="index.html" class="back-btn">⬅ Back</a>

            </div>
        `;

    } else {

        page.innerHTML = "<h1>Manga topilmadi.</h1>";

    }

}