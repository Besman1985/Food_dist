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

    // Timer
    const deadLine = "2025-09-5";



    //    функция высчитывает сколько осталось времени и 
    //    возвращает обьект с данными
    function getTimeRemaining(andtime) {
        const t = Date.parse(andtime) - new Date(),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / 1000) % 60);
        return {
            "total": t,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    };



    // функция добавления ноля к числам времени
    function getZerro(nam) {
        if (nam >= 0 && nam < 10) {
            return `0${nam}`;
        } else {
            return nam
        }
    };



    // функция получения элементов со страницы и обновления времени  
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds");
        timeInterval = setInterval(updateClock, 1000);
        updateClock();
        // функция обновлкния времени
        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZerro(t.days);
            hours.innerHTML = getZerro(t.hours);
            minutes.innerHTML = getZerro(t.minutes);
            seconds.innerHTML = getZerro(t.seconds);

            // отключение таймера
            if (t.total <= 0) {
                clearInterval(timeInterval);
            };
        };


    };


    setClock(".timer", deadLine);



    // Создание конструктора карточек

    class Card {
        constructor(src, title, descr, price, currency, ...clases) {
            this.src = src
            this.title = title
            this.descr = descr
            this.price = price
            this.currency = currency
            this.clases = clases
        }
        pushCard(celector) {
            const wrapper = document.querySelector(celector);
            const div = document.createElement("div");

            if (this.clases.length === 0) {
                this.clases = "menu__item";
                div.classList.add(this.clases);
                
            } else {
                this.clases.forEach((clases) => {
                    div.classList.add(clases);
                });
            };
            div.innerHTML = `
                <div>
                    <img src="${this.src}" alt="vegy">
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> ${this.currency}/день</div>
                    </div>
                </div>`;
            wrapper.append(div);
        }

    };


    new Card(
        "img/tabs/vegy.jpg",
        "Меню 'Фитнес'",
        "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
        5000,
        "руб",
        "menu__item"
    ).pushCard(".menu .container");


    new Card("img/tabs/elite.jpg",
        "Меню “Премиум”",
        "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
        5250,
        "руб",
        "menu__item"
    ).pushCard(".menu .container");


    new Card('img/tabs/post.jpg',
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        4330,
        'руб',
        "menu__item"
    ).pushCard(".menu .container");


    // Модальное окно

    const modal = document.querySelector(".modal");
    const modalBtn = document.querySelectorAll(".btn");
    const btnClose = document.querySelector(".modal__close");




    function showModal() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        clearTimeout(setTime);

    };

    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };


    modalBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            showModal();
        });

    });

    btnClose.addEventListener("click", () => {
        closeModal();
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });


    let setTime = setTimeout(showModal, 10000);



 document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.style.display === "block") {
            closeModal();
        };

    });


    function modalShowScrol () {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            showModal();
            window.removeEventListener ("scroll",modalShowScrol);
        };
    }

    window.addEventListener("scroll",modalShowScrol);
































































});




