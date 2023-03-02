import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const makeGalleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join('');

galleryRef.insertAdjacentHTML('beforeend', makeGalleryMarkup);
galleryRef.addEventListener('click', onImageOpenModal);

function onImageOpenModal(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const currentImg = e.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${currentImg}">
`);
  instance.show();

  window.addEventListener('keydown', onEscapeKeyboard);

  function onEscapeKeyboard(e) {
    if (e.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onEscapeKeyboard);
    }
  }
}

console.log(galleryItems);
