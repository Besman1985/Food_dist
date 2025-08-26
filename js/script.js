window.addEventListener("DOMContentLoaded", () => {

    let tabcontent = document.querySelectorAll(".tabcontent"),
        parentTab = document.querySelector(".tabheader__items"),
        tab = document.querySelectorAll(".tabheader__item");



    let hideContent = () => {
        tabcontent.forEach((item) => {
            item.classList.add("hide");
        });

        tab.forEach((item) => {
            item.classList.remove("tabheader__item_active")
        });
    };

    let showContent = (i = 0) => {
        tabcontent[i].classList.add("show");
        tabcontent[i].classList.remove("hide");
        tab[i].classList.add("tabheader__item_active");
    };



    parentTab.addEventListener("click", (event) => {
        const target = event.target;
        if (target && target.classList.contains("tabheader__item")) {
            tab.forEach((item, i) => {
                if (target == item) {
                    hideContent();
                    showContent(i)
                };
            });
        };
    });

    hideContent();
    showContent();

});




