let user_card_star_group = document.querySelector(".user-card-star-group");
for (let j = 1; j < 10; j++) {
    let i = document.createElement("li");
    if (j === 1 || j === 2) {
        i.className = "fas fa-star user-card-star active";
    }
    else {
        i.className = "fas fa-star user-card-star";
    }
    user_card_star_group.appendChild(i);
}