const postsContainer = document.getElementById("posts");
const refreshBtn = document.getElementById("refreshBtn");
const postForm = document.getElementById("postForm");
const postContent = document.getElementById("postContent");

function createPost(content) {
  const post = document.createElement("div");
  post.className = "post";
  post.textContent = content;
  postsContainer.appendChild(post);
}

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
