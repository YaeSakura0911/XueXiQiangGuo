// TODO：tag和subtag效果
let tab_link = document.querySelectorAll(".tab-link");
let sub_tab_item = document.querySelectorAll(".sub-tab-item");
let container = document.querySelector(".container");
let tab = new Swiper('.container', {
    autoHeight: true,
    on:{
        slideChange: function(){
            for (let i = 0; i < tab_link.length; i++) {
                tab_link[i].className = "tab-link";
            }
            tab_link[tab.activeIndex].className = "tab-link active";
            switch (tab.activeIndex) {
                default :
                    for (let i = 0; i < sub_tab_item.length; i++) {
                        sub_tab_item[i].style.display = "none";
                    }
                    container.style.marginTop = "6rem";
                    break;
                //    TODO 点击不显示
                case 2:
                    for (let i = 0; i < sub_tab_item.length; i++) {
                        sub_tab_item[i].style.display = "none";
                    }
                    sub_tab_item[0].style.display = "block";
                    container.style.marginTop = "9rem";
                    break;
                case 5:
                    for (let i = 0; i < sub_tab_item.length; i++) {
                        sub_tab_item[i].style.display = "none";
                    }
                    sub_tab_item[1].style.display = "block";
                    container.style.marginTop = "9rem";
                    break;
                case 6:
                    for (let i = 0; i < sub_tab_item.length; i++) {
                        sub_tab_item[i].style.display = "none";
                    }
                    sub_tab_item[2].style.display = "block";
                    container.style.marginTop = "9rem";
                    break;
                case 7:
                    for (let i = 0; i < sub_tab_item.length; i++) {
                        sub_tab_item[i].style.display = "none";
                    }
                    sub_tab_item[3].style.display = "block";
                    container.style.marginTop = "9rem";
                    break;
                case 8:
                    for (let i = 0; i < sub_tab_item.length; i++) {
                        sub_tab_item[i].style.display = "none";
                    }
                    sub_tab_item[4].style.display = "block";
                    container.style.marginTop = "9rem";
                    break;
            }
        },
    }
});
for (let i = 0; i < tab_link.length; i++) {
    tab_link[i].onclick = function () {
        tab.slideTo(i, 1000, false);//切换到第一个slide，速度为1秒
    }
}


// TODO：轮播图效果
let carousel = new Swiper('.carousel', {
    loop : true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    }
});

//TODO:ajax加载数据
let request = new XMLHttpRequest();
request.open("get", "data.json", true);
request.send();
request.onreadystatechange = function() {
    if(request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.responseText);
        let list = document.querySelectorAll(".list");
        let index = 0;
        for (let items in data) {
            for (let item of data[items]) {
                // console.log(item);
                let a = document.createElement("a");
                a.href = "./detail.html";
                if (item.image) {
                    // 如果有三张图
                    if (item.image.length === 3) {
                        haveMoreImages(item, a);
                    }
                    // 如果没有三张图
                    else {
                        haveImage(item, a);
                    }
                }
                // 如果有视频
                else if (item.video) {
                    haveVideo(item, a);
                }
                // 如果有直播
                else if (item.live) {
                    haveLive(item, a);
                }
                // 如果既没有图也没有视频
                else {
                    onlyText(item, a);
                }
                list[index].appendChild(a);
            }
            // 切换到下一页
            index++;
        }
    }
}

function haveImage(item, a) {
    a.innerHTML = `
        <div class="card">
            <div class="card-body">
                <p class="card-title mb-1">${item.title}</p>
                <img class="card-image" src="${item.image}" alt="">
            </div>
            <div class="card-footer">
                <span class="card-subtitle">${item.subtitle}</span>
                <div class="card-menu">
                    <svg class="icon card-menu-icon" aria-hidden="true">
                        <use xlink:href="#icon-bobao"></use>
                    </svg>
                    <span class="card-menu-text">播报</span>
                </div>
            </div>
        </div>`;
    return a;
}

function haveMoreImages(item, a) {
    a.innerHTML = `
        <div class="card">
            <div class="card-body">
                <p class="mb-1">${item.title}</p>
                <div class="card-image-group">
                    <img class="card-image" src="${item.image[0]}" alt="">
                    <img class="card-image" src="${item.image[1]}" alt="">
                    <img class="card-image" src="${item.image[2]}" alt="">
                </div>
            </div>
            <div class="card-footer">
                <span class="card-subtitle">${item.subtitle}</span>
                <div class="card-menu">
                    <svg class="icon card-menu-icon" aria-hidden="true">
                        <use xlink:href="#icon-bobao"></use>
                    </svg>
                    <span class="card-menu-text">播报</span>
                </div>
            </div>
        </div>`;
    return a;
}

function haveVideo(item, a) {
    a.innerHTML = `
        <div class="card">
            <div class="card-body">
                <p class="w-100 mb-1">${item.title}</p>
                <div class="position-relative">
                    <img class="card-video-image" src="${item.video}" alt="">
                    <span class="card-video-time">
                        <svg class="icon" aria-hidden="true" style="width: 15px; height: 15px; margin-right: .25rem">
                            <use xlink:href="#icon-bofang"></use>
                        </svg>
                        ${item.time}
                    </span>
                </div>
            </div>
            <div class="card-footer">
                <span class="card-subtitle">${item.subtitle}</span>
            </div>
        </div>`;
    return a;
}

function haveLive(item, a) {
    a.innerHTML = `
        <div class="card">
            <div class="card-body">
                <p class="w-100 mb-1">${item.title}</p>
                <div class="position-relative">
                    <img class="card-live-image" src="${item.live}" alt="">
                    <span class="card-live-state">直播中</span>
                </div>
            </div>
            <div class="card-footer">
                <span class="card-subtitle">${item.subtitle}</span>
            </div>
        </div>`;
    return a;
}

function onlyText(item, a) {
    a.innerHTML = `
        <div class="card">
            <div class="card-body">
                <p class="mb-1">${item.title}</p>
            </div>
            <div class="card-footer">
                <span class="card-subtitle">${item.subtitle}</span>
                <div class="card-menu">
                    <svg class="icon card-menu-icon" aria-hidden="true">
                        <use xlink:href="#icon-bobao"></use>
                    </svg>
                    <span class="card-menu-text">播报</span>
                </div>
            </div>
        </div>`;
    return a;
}