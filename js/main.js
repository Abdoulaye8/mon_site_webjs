const postsContainer = document.getElementById("posts");
const refreshBtn = document.getElementById("refreshBtn");
const postForm = document.getElementById("postForm");
const postContent = document.getElementById("postContent");
// fonction et param
function createPost(content) {
  const post = document.createElement("div");
  post.className = "post";
  post.textContent = content;
  postsContainer.appendChild(post);
}
// even
refreshBtn.addEventListener("click", () => {
  fetch("https://v2.jokeapi.dev/joke/Any?lang=fr&type=single")
    .then((res) => res.json())
    .then((data) => {
      createPost(data.joke);
    });
});

postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const content = postContent.value.trim();
  if (content) {
    createPost(content);
    postContent.value = "";
  }
});

// selection du dom par classe, balise
const postsByClass = document.getElementsByClassName("post");
const firstHeader = document.getElementsByTagName("header")[0];

// Exempl d'utilisation en affichant le nombre de posts dans le title du header
if (firstHeader) {
  firstHeader.title = `Nombre de posts: ${postsByClass.length}`;
}
