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
  },
];

const parent = document.querySelector(".gallery");



for (const image of images) {
  let listed = document.createElement("li");
  parent.append(listed);
  let photos = document.createElement("img");
  listed.append(photos);
  photos.classList.add("box_photos");
  console.log(photos);
  photos.insertAdjacentHTML("beforeend", photos.src = image.url, photos.alt = image.alt);
}







// const parent = document.querySelector(".gallery");
// let listed = [];
//
// for (let i = 0; i < images.length; i++) {
//   listed = document.createElement("li");
//   parent.append(listed);
// }
// const parentChildren = parent.children;
// let myImages = [];
//
// for (let i = 0; i < parentChildren.length; i++) {
//   myImages = document.createElement("img");
//   parentChildren[i].append(myImages);
//   myImages.classList.add("my_image");
//
// }
// const imageClass = document.querySelector(".my_image");
//
//
// const firstImage = parentChildren[0].firstChild;
// firstImage.src = "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260";
// firstImage.alt = "White and Black Long Fur Cat";
// firstImage.setAttribute("width","200px");
//
//
// const secondImage = parentChildren[1].firstChild;
// secondImage.src = "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260";
// secondImage.alt = "Orange and White Koi Fish Near Yellow Koi Fish";
// secondImage.setAttribute("width","200px");
//
// const thirdImage = parentChildren[2].firstChild;
// thirdImage.src = "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260";
// thirdImage.alt = "Group of Horses Running";
// thirdImage.setAttribute("width","200px");
//
// parent.classList.add("box_view");