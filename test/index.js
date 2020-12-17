let CURRENT_TAB = 0;
let container = document.querySelector(".container");
let tab_item = document.querySelectorAll(".tab-item");
let tab_link = document.querySelectorAll(".tab-link");
let tab_view = document.querySelectorAll(".tab-view");
let refresh = document.querySelector(".refresh");
let sub_tab_item = document.querySelectorAll(".sub-tab-item");
let sub_tab = document.querySelector(".sub-tab");
let sub_tab_link = document.querySelectorAll(".sub-tab-link");



//TODO:滑动区域应该排除轮播图区域
onContainerStoke();
function onContainerStoke() {
    let startX = null;
    let startY = null;
    let endX = null;
    let endY = null;

    container.ontouchstart = function (e) {
        startX = e.targetTouches[0].pageX;
        startY = e.targetTouches[0].pageY;
    }

    container.ontouchend = function (e) {
        endX = e.changedTouches[0].pageX;
        endY = e.changedTouches[0].pageY;
        // 右划
        if(endX - startX >= 50) {
            // TODO：tab往左移
            // 标记-1
            if(CURRENT_TAB > 0)
                CURRENT_TAB--;
            changeTab();
        }
        // 左划
        else if(startX - endX >= 50) {
            // TODO：tab往右移
            // 标记+1
            if(CURRENT_TAB < tab_link.length - 1)
                CURRENT_TAB++;
            changeTab();
        }
        if(endY - startY >=50 && document.documentElement.scrollTop == 0) {
            refresh.style.height = "48px";
            refresh.style.display = "block";
            setTimeout(function () {
                refresh.style.height = 0 + "px" ;
                refresh.style.display = "none";
            },2000);
        }
    }

    function changeTab() {
        // 清除所有tab-link样式
        for(let i = 0; i < tab_link.length; i++) {
            tab_link[i].className = "tab-link";
        }
        // 给当前tab-link添加active
        tab_link[CURRENT_TAB].className = "tab-link active"
        // 清除所有tab-view样式
        for(let i = 0; i< tab_view.length; i++) {
            tab_view[i].className = "tab-view";
        }
        // 给当前tab-view添加show
        tab_view[CURRENT_TAB].className = "tab-view show"
    }
}

test();
function test() {
    console.log(sub_tab_link);
    for (let k = 0; k < sub_tab_item.length; k++) {
        sub_tab_item[k].onclick = function () {
            for (let i = 0; i < sub_tab_link.length; i++) {
                sub_tab_link[i].onclick = function () {
                    for (let j = 0; j < sub_tab_link.length; j++) {
                        sub_tab_link[j].className = "sub-tab-link";
                    }
                    sub_tab_link[i].className = "sub-tab-link active";
                }
            }
        }
    }

}