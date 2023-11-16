const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let likeBtnEl = document.getElementById("like-btn")
let postImageEl = document.getElementById("post-img")
let likeNumberEl = document.getElementById("likes")
let posterInfoEl = document.getElementById("user-info")
let posterDetailEl = document.getElementById("poster-info")
let posterUserNameEl = document.getElementById("user-full-name")
let posterLocationEl = document.getElementById("location-text")
let usernameEl = document.getElementById("username")
let userCommentEl = document.getElementById("user-comment")
let container = document.getElementById("container")


function render (posts){
    
    let baseHtml = `
    <div class="header">
        <img id="logo" src="images/logo.png">
        <img id="user-avatar" src="images/user-avatar.png" alt="Profile picture">
    </div>`
    for(let i = 0; i < posts.length; i++){
        let currentPost = posts[i]
        baseHtml += `
        <div class="post" id="post">
            <div id="user-info">
                <img class="post-avatar" src=${currentPost.avatar} alt="Profile picture of poster">
                <div id="poster-info">
                    <span id="user-full-name">${currentPost.name}</span>
                    <span id="location-text">${currentPost.location}</span>
                </div>
            </div>
            <div id="post-img">
                <img class="post-img" alt="Users posted image" src=${currentPost.post}>
            </div>
            <div class="post-body">
                <div id="icons">
                    <img id="like-btn" class="icon-button" alt="Like button" src="images/icon-heart.png">
                    <img class="icon-button" alt="Comment button" src="images/icon-comment.png">
                    <img class="icon-button" alt="Share button" src="images/icon-dm.png">
                </div>
                <span class="likes-bar"><span id="likes">${currentPost.likes}</span> likes</span>
                <span class="comment"><span id="username">${currentPost.username}</span><span id="user-comment">${currentPost.comment}</span>
            </div>
        </div>`
    }
    container.innerHTML = baseHtml
}

render(posts)

let number = Number(likeNumberEl.textContent)
likeBtnEl.addEventListener("click", function(){
    number += 1
    likeNumberEl.textContent = number
    
})

postImageEl.addEventListener("dblclick", function(){
    number += 1
    likeNumberEl.textContent = number
})


