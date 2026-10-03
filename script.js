function createPost() {
    const input = document.getElementById("postInput");
    const text = input.value.trim();

    if (text === "") {
        return;
    }

    const post = document.createElement("article");
    post.className = "post";

    post.innerHTML = `
        <h3>@You</h3>
        <p>${text}</p>
        <button onclick="likePost(this)">
            ❤️ <span>0</span>
        </button>
    `;

    const feed = document.getElementById("feed");
    feed.prepend(post);

    input.value = "";
}

function likePost(button) {
    const counter = button.querySelector("span");
    let likes = Number(counter.textContent);

    likes++;

    counter.textContent = likes;
}
