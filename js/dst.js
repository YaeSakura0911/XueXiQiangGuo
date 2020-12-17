// TODO: 点击tab添加active效果
let tab_link = document.querySelectorAll(".tab-link");
let sub_tab_item = document.querySelectorAll(".sub-tab-item");
let container = document.querySelector(".container");

for (let k = 0; k < sub_tab_item.length; k++) {
    sub_tab_item[k].style.display = "none";
}
sub_tab_item[0].style.display = "block";
container.style.marginTop = "9rem";

for (let i = 0; i < tab_link.length; i++) {
    tab_link[i].onclick = function () {
        for (let j = 0; j < tab_link.length; j++) {
            tab_link[j].className = "tab-link";
        }
        tab_link[i].className = "tab-link active";
        switch (i) {
            default:
                for (let k = 0; k < sub_tab_item.length; k++) {
                    sub_tab_item[k].style.display = "none";
                }
                container.style.marginTop = "6rem";
                break;
            case 0:
                for (let k = 0; k < sub_tab_item.length; k++) {
                    sub_tab_item[k].style.display = "none";
                }
                sub_tab_item[0].style.display = "block";
                container.style.marginTop = "9rem";
                break;
            case 1:
                for (let k = 0; k < sub_tab_item.length; k++) {
                    sub_tab_item[k].style.display = "none";
                }
                sub_tab_item[1].style.display = "block";
                container.style.marginTop = "9rem";
                break;
            case 4:
                for (let k = 0; k < sub_tab_item.length; k++) {
                    sub_tab_item[k].style.display = "none";
                }
                sub_tab_item[2].style.display = "block";
                container.style.marginTop = "9rem";
                break;
            case 5:
                for (let k = 0; k < sub_tab_item.length; k++) {
                    sub_tab_item[k].style.display = "none";
                }
                sub_tab_item[3].style.display = "block";
                container.style.marginTop = "9rem";
                break;
            case 6:
                for (let k = 0; k < sub_tab_item.length; k++) {
                    sub_tab_item[k].style.display = "none";
                }
                sub_tab_item[4].style.display = "block";
                container.style.marginTop = "9rem";
                break;
            case 7:
                for (let k = 0; k < sub_tab_item.length; k++) {
                    sub_tab_item[k].style.display = "none";
                }
                sub_tab_item[5].style.display = "block";
                container.style.marginTop = "9rem";
                break;
            case 8:
                for (let k = 0; k < sub_tab_item.length; k++) {
                    sub_tab_item[k].style.display = "none";
                }
                sub_tab_item[6].style.display = "block";
                container.style.marginTop = "9rem";
                break;
            case 9:
                for (let k = 0; k < sub_tab_item.length; k++) {
                    sub_tab_item[k].style.display = "none";
                }
                sub_tab_item[7].style.display = "block";
                container.style.marginTop = "9rem";
                break;
            case 10:
                for (let k = 0; k < sub_tab_item.length; k++) {
                    sub_tab_item[k].style.display = "none";
                }
                sub_tab_item[8].style.display = "block";
                container.style.marginTop = "9rem";
                break;
            case 11:
                for (let k = 0; k < sub_tab_item.length; k++) {
                    sub_tab_item[k].style.display = "none";
                }
                sub_tab_item[9].style.display = "block";
                container.style.marginTop = "9rem";
                break;
            case 12:
                for (let k = 0; k < sub_tab_item.length; k++) {
                    sub_tab_item[k].style.display = "none";
                }
                sub_tab_item[10].style.display = "block";
                container.style.marginTop = "9rem";
                break;
            case 13:
                for (let k = 0; k < sub_tab_item.length; k++) {
                    sub_tab_item[k].style.display = "none";
                }
                sub_tab_item[11].style.display = "block";
                container.style.marginTop = "9rem";
                break;
            case 14:
                for (let k = 0; k < sub_tab_item.length; k++) {
                    sub_tab_item[k].style.display = "none";
                }
                sub_tab_item[12].style.display = "block";
                container.style.marginTop = "9rem";
                break;
            case 15:
                for (let k = 0; k < sub_tab_item.length; k++) {
                    sub_tab_item[k].style.display = "none";
                }
                sub_tab_item[13].style.display = "block";
                container.style.marginTop = "9rem";
                break;
        }
    }
}

// TODO: 点击subtab添加active效果
let sub_tab_link = document.querySelectorAll(".sub-tab-link");
for (let i = 0; i < sub_tab_link.length; i++) {
    sub_tab_link[i].onclick = function () {
        for (let j = 0; j < sub_tab_link.length; j++) {
            sub_tab_link[j].classList.remove("active") ;
        }
        this.classList.add("active");
    }
}

// TODO: AJAX动态加载数据
let request = new XMLHttpRequest();
request.open("get", "json/dst.json", true);
request.send();
request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.responseText);
        let container = document.querySelector(".container");
        for (let item of data) {
            let div = document.createElement("div");
            if (item.image) {
                haveImage(item, div);
            }
            else {
                haveVideo(item, div);
            }
            container.appendChild(div);
        }
    }
}

function haveVideo(item, div) {
    div.className = "card";
    div.innerHTML = `
        <div class="card-body">
            <img class="card-image" src="${item.video}" alt="" style="width: 100%; margin-bottom: .5rem">
            <p class="w-100">${item.title}</p>
        </div>
        <p class="card-subtitle">${item.subtitle}</p>`;
    return div;
}

function haveImage(item, div) {
    div.className = "card";
    div.innerHTML = `
        <div class="card-body">
            <p class="card-title">${item.title}</p>
            <img class="card-image" src="${item.image}" alt="">
        </div>
        <p class="card-subtitle">${item.subtitle}</p>`;
    return div;
}