import { createArrayDescriptionPhoto } from './get-data.js';

const listPhotoFragment = document.createDocumentFragment();
const containerPhotoMiniature = document.querySelector('.pictures');

const similarPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarPhotos = createArrayDescriptionPhoto();

similarPhotos.forEach(({ url, likes, comments }) => {
  const photoElement = similarPhotoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  listPhotoFragment.appendChild(photoElement);
});

containerPhotoMiniature.appendChild(listPhotoFragment);

