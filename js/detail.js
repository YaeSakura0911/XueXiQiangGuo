// TODO: 往下滚动页面时，top-nav从透明变成白色
let top_nav = document.querySelectorAll(".top-nav");
window.onscroll = function () {
    if (document.documentElement.scrollTop >= 36) {
        top_nav[0].className = "top-nav show"
    }
    else {
        top_nav[0].className = "top-nav";
    }
}



let request = new XMLHttpRequest();
request.open("get", "json/detail.json", true);
request.send();

request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.responseText);
        let recommend_data = data["recommend"];
        let comment_data = data["comment"];
        console.log(recommend_data);
        console.log(comment_data);
        //  TODO: 动态加载推荐
        for (let item of recommend_data) {

            let recommend = document.querySelector(".recommend");
            let recommend_card = document.createElement("div");
            recommend_card.className = "recommend-card";
            recommend_card.innerHTML = `
                <div class="recommend-card-body">
                    <p class="recommend-card-title">${item.title}</p>
                    <p class="recommend-card-subtitle">${item.subtitle}</p>
                </div>
                <img class="recommend-card-image" src="${item.image}" alt="">`;
            recommend.appendChild(recommend_card);
        }
        // TODO: 动态加载评论
        for (let item of comment_data) {
            let comment = document.querySelector(".comment");
            let comment_card = document.createElement("div");
            comment_card.className = "comment-card";
            comment_card.innerHTML = `
                <img class="comment-card-image" src="${item.image}" alt="">
                <div class="comment-card-body">
                    <p class="comment-card-user" style="">${item.user}</p>
                    <p class="comment-card-content">${item.content}</p>
                    <p class="comment-card-release">${item.time}</p>
                </div>
                <div class="comment-card-like">
                    <p>${item.like} </p>
                    <i class="far fa-thumbs-up"></i>
                </div>`;
            comment.appendChild(comment_card);
        }
    }

}



