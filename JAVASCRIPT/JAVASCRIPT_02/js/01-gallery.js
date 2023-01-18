import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
for (const item of galleryItems) {
    //creating link tag, adding class and attribute
    let photoLink = document.createElement("a");
    gallery.append(photoLink);
    photoLink.classList.add("gallery__link");
    photoLink.setAttribute("href", item.original)
    //creating img tag, adding class and attributes
    let imageTag = document.createElement("img");
    photoLink.append(imageTag);
    imageTag.classList.add("gallery__image");
    imageTag.setAttribute("src", item.preview);
    imageTag.setAttribute("data-source", item.original);
    imageTag.setAttribute("alt", item.description);
    //adding event listeners and lightbox

    photoLink.addEventListener("click", (e) => {
        e.preventDefault();
        let instance = basicLightbox.create(`<img src = ${e.target.dataset.source}>`);
        instance.show();
        photoLink.addEventListener("keydown", (e) => {
            e.preventDefault();
            if (e.keyCode === 27) {
                instance.close();
            }
        })
    })

}

