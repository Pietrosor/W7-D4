const apiKey = "oBZxghw2vjs2l6Ha1GzaujgO5wOGj0QVhxmiBVQAX1i8QiE2LcQQmmYB"
const query = "food"
const query1 = "sport"
document.getElementById("loadImages").addEventListener("click", () => {
  loadImages(query)
})

document.getElementById("loadSecondaryImages").addEventListener("click", () => {
  loadImages(query1)
})

function loadImages(query) {
  fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=10`, {
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.photos)
      const gallery = document.getElementById("gallery")
      gallery.innerHTML = ""
      data.photos.forEach((photo) => {
        const col = document.createElement("div")
        col.className = "col-md-4"

        col.innerHTML = `
          <div class="card mb-4 shadow-sm">
            <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top" />
            <div class="card-body">
              <h5 class="card-title">${photo.photographer}</h5>
              <p class="card-text">Beautiful photo from Pexels.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">Pexels</small>
              </div>
            </div>
          </div>
        `

        gallery.appendChild(col)
      })
    })
    .catch((error) => console.error("Errore:", error))
}
