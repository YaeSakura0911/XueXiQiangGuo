// TODO: 点击tab添加active效果
let tab_link = document.querySelectorAll(".tab-link");
for (let i = 0; i < tab_link.length; i++) {
    tab_link[i].onclick = function () {
        for (let j = 0; j < tab_link.length; j++) {
            tab_link[j].className = "tab-link";
        }
        tab_link[i].className = "tab-link active";
    }
}

// TODO: AJAX动态加载内容
let request = new XMLHttpRequest();
request.open("get", "json/dt.json", true);
request.send();
request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.responseText);
        let container = document.querySelector(".container");
        for (let item of data) {
            let div = document.createElement("div");
            div.className="card";
            div.innerHTML = `
                <p class="card-title">${item.title}</p>
                <p class="card-subtitle">${item.subtitle}</p>`;
            container.appendChild(div);
        }
    }
}