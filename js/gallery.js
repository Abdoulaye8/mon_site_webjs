// ici pour les variables et dom aussi
const imageForm = document.getElementById("imageForm");
const imageUrl = document.getElementById("imageUrl");
const imageDesc = document.getElementById("imageDesc");
const gallery = document.getElementById("gallery");
const pubImage = document.getElementById("pubImage");

// faison une fonction avec paramètre
// là faire fonction réutilisable pour ajouter une image
function addImage(url, desc = "") {
  const img = document.createElement("img");
  img.src = url;
  img.alt = desc;
  gallery.appendChild(img);
}

// ici boucle et tableau
// ici  galerie avec une boucle for...of
const initialImages = [
  { url: "https://placehold.co/300x200?text=Image+A", desc: "Image A" },
  { url: "https://placehold.co/300x200?text=Image+B", desc: "Image B" },
  { url: "https://placehold.co/300x200?text=Image+C", desc: "Image C" },
];
for (const item of initialImages) {
  addImage(item.url, item.desc);
}

// on a un evenement submit
imageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = imageUrl.value.trim();
  const desc = imageDesc.value.trim();
  if (url) {
    addImage(url, desc);
    imageUrl.value = "";
    imageDesc.value = "";
  }
});

// voyons l'objet
// ici la gestion de la pub avec un objet
const pubConfig = {
  images: [
    "https://placehold.co/300x200/FF0000/FFF?text=Pub+1",
    "https://placehold.co/300x200/00FF00/FFF?text=Pub+2",
    "https://placehold.co/300x200/0000FF/FFF?text=Pub+3",
  ],
  index: 0,
  next() {
    this.index = (this.index + 1) % this.images.length;
  },
};

// là on a une fonction de mise à jour de la pub
function updatePub() {
  pubImage.src = pubConfig.images[pubConfig.index];
  pubConfig.next();
}
setInterval(updatePub, 3000);
updatePub();
