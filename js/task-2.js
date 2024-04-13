const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  }
];

const gallery = document.querySelector(".gallery");
const imgItem = images.map((item) => {
  const galleryItems = document.createElement("li");
  galleryItems.classList.add("gallery-item");
  const images = document.createElement("img");
  images.src = item.url;
  images.alt = item.alt;
  images.width = 360;
  images.height = 300;
  galleryItems.append(images);
  return galleryItems;
});

gallery.append(...imgItem);
