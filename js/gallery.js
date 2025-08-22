const imageForm = document.getElementById("imageForm");
const imageUrl = document.getElementById("imageUrl");
const imageDesc = document.getElementById("imageDesc");
const gallery = document.getElementById("gallery");
const pubImage = document.getElementById("pubImage");

imageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = imageUrl.value.trim();
  const desc = imageDesc.value.trim();
  if (url) {
    const img = document.createElement("img");
    img.src = url;
    img.alt = desc;
    gallery.appendChild(img);
    imageUrl.value = "";
    imageDesc.value = "";
  }
});

const pubImages = [
  "https://placehold.co/300x200/FF0000/FFF?text=Pub+1",
  "https://placehold.co/300x200/00FF00/FFF?text=Pub+2",
  "https://placehold.co/300x200/0000FF/FFF?text=Pub+3",
];

let pubIndex = 0;
function updatePub() {
  pubImage.src = pubImages[pubIndex];
  pubIndex = (pubIndex + 1) % pubImages.length;
}
setInterval(updatePub, 3000);
updatePub();
