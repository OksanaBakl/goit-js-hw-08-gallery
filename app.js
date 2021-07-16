const galleryItems = [
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
		description: "Hokkaido Flower",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
		description: "Container Haulage Freight",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
		description: "Aerial Beach View",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
		description: "Flower Blooms",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
		description: "Alpine Mountains",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
		description: "Mountain Lake Sailing",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
		description: "Alpine Spring Meadows",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
		description: "Nature Landscape",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
		description: "Lighthouse Coast Sea",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
		description: "Aerial Beach View",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
		description: "Flower Blooms",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
		description: "Alpine Mountains",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
		description: "Mountain Lake Sailing",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
		description: "Alpine Spring Meadows",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
		description: "Nature Landscape",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
		description: "Lighthouse Coast Sea",
	},
];

// ============ refs ============
const refs = {
	gallery: document.querySelector(".js-gallery"),
	lightbox: document.querySelector(".js-lightbox"),
	lightboxImage: document.querySelector(".lightbox__image"),
	overlay: document.querySelector(".lightbox__overlay"),
	lightboxCloseBtn: document.querySelector('[data-action="close-lightbox"]'),
};

function onGalleryListMarkupCreate(images) {
	return images
		.map(({ preview, original, description }) => {
			return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img loading="lazy"

      class="gallery__image"
   data-src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
		})
		.join("");
}
const markupGallery = onGalleryListMarkupCreate(galleryItems);

// ============ render ============
refs.gallery.insertAdjacentHTML("beforeend", markupGallery);

// ============ open lightbox ============
refs.gallery.addEventListener("click", onOpenLightbox);

function onOpenLightbox(e) {
	e.preventDefault();

	if (e.target.nodeName !== "IMG") {
		return;
	}
	refs.lightbox.classList.add("is-open");
	refs.lightboxImage.src = e.target.dataset.source;
	refs.lightboxImage.alt = e.target.alt;

	window.addEventListener("keydown", onEscCloseBtn);
	// window.addEventListener("keydown", onArrowBtnPress);
	window.addEventListener("keydown", onLeftScroll);
	window.addEventListener("keydown", onRightScroll);
}

// ============ close lightbox ============
refs.lightboxCloseBtn.addEventListener("click", onCloseLightbox);

function onCloseLightbox() {
	refs.lightbox.classList.remove("is-open");
	refs.lightboxImage.src = "";
	refs.lightboxImage.alt = "";

	window.removeEventListener("keydown", onEscCloseBtn);
	// window.removeEventListener("keydown", onArrowBtnPress);
	window.removeEventListener("keydown", onLeftScroll);
	window.removeEventListener("keydown", onRightScroll);
}

// ============ close on overlay ============
refs.overlay.addEventListener("click", onCloseLightbox);

// ============ close on Escape ============
function onEscCloseBtn(e) {
	if (e.code === "Escape") {
		onCloseLightbox();
	}
}

// ============ on Left Scroll ============
function onLeftScroll(e) {
	if (e.code !== "ArrowLeft") {
		return;
	}

	const images = galleryItems.map(({ original }) => original);
	let currentImageIndex = images.indexOf(refs.lightboxImage.src);
	if (currentImageIndex === 0) {
		currentImageIndex = images.length - 1;
	}
	refs.lightboxImage.src = images[currentImageIndex - 1];
}

// ============ on Right Scroll ============
function onRightScroll(e) {
	if (e.code !== "ArrowRight") {
		return;
	}

	const images = galleryItems.map(({ original }) => original);
	let currentImageIndex = images.indexOf(refs.lightboxImage.src);

	if (currentImageIndex === images.length - 1) {
		currentImageIndex = 0;
	}
	refs.lightboxImage.src = images[currentImageIndex + 1];
}

// function onArrowBtnPress(event) {
// 	if (event.code === "ArrowRight") {
// 		onImgThumb(1);
// 	}
// 	if (event.code === "ArrowLeft") {
// 		onImgThumb(-1);
// 	}
// }

// // копия массива изображений
// const arrayOfImg = refs.gallery.querySelectorAll(".gallery__image");
// const newArrayOfImg = [...arrayOfImg];
// // console.log(arrayOfImg);
// // console.log(newArrayOfImg);

// // lightboxImage.dataset.index = newArrayOfImg.indexOf(img);

// function onImgThumb(move) {
// 	const images = galleryItems.map(({ original }) => original);
// 	let currentImgIndex = images.indexOf(refs.lightboxImage.src);

// 	// console.log(currentImgIndex);
// 	let nextImgIndex = currentImgIndex + move;
// 	// console.log(nextImgIndex);
// 	if (nextImgIndex < 0) {
// 		nextImgIndex = newArrayOfImg.length - 1;
// 	}

// 	if (nextImgIndex > newArrayOfImg.length - 1) {
// 		nextImgIndex = 0;
// 	}

// 	newArrayOfImg.indexOf(image) = nextImgIndex;
// 	// console.log(lightboxImg.dataset.index);
// 	lightboxImage.src = newArrayOfImg[nextImgIndex].dataset.source;
// 	// console.log(lightboxImg.src);
// }

// ============ markUp ============
// const markupGallery = galleryItems.reduce(
// 	(acc, { preview, original, description }) => {
// 		return (
// 			acc +
// 			`<li class="gallery__item" >
// 			<a class="gallery__link" href = ${original} >
// 			<img class="gallery__image" src="${preview}"
// 			data-source="${original}"
// 			alt="${description}" />
// 			</a>
// 			</li>`
// 		);
// 	},
// 	""
// );
