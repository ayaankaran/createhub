let myPostCount = 0;


function showPage(pageName) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.style.display = "none";
    });

    document.getElementById(pageName).style.display = "block";

    window.scrollTo(0, 0);
}


function createPost() {

    const input = document.getElementById("postInput");
    const text = input.value.trim();

    if (text === "") {
        return;
    }

    addPost(text);

    input.value = "";
}


function createFromPage() {

    const input = document.getElementById("createInput");
    const text = input.value.trim();

    if (text === "") {
        return;
    }

    addPost(text);

    input.value = "";

    showPage("home");
}


function addPost(text) {

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


    const myPosts = document.getElementById("myPosts");

    const profilePost = post.cloneNode(true);

    myPosts.prepend(profilePost);


    myPostCount++;

    document.getElementById("postCount").textContent = myPostCount;
}


function likePost(button) {

    const counter = button.querySelector("span");

    let likes = Number(counter.textContent);

    likes++;

    counter.textContent = likes;
}
