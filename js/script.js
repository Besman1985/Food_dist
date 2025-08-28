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






// // Получаем элементы, в которые будем выводить время
// const daysEl = document.getElementById('days');
// const hoursEl = document.getElementById('hours');
// const minutesEl = document.getElementById('minutes');
// const secondsEl = document.getElementById('seconds');
// const messageEl = document.getElementById('message');

// // Задаем дату, до которой ведем отсчёт.
// // В данном случае - до 1 января следующего года.
// const newYear = new Date(`January 1, ${new Date().getFullYear() + 1} 00:00:00`).getTime();

// function countdown() {
//     // Получаем текущее время
//     const now = new Date().getTime();

//     // Вычисляем разницу между целевой и текущей датой
//     const distance = newYear - now;

//     // Если таймер истёк, выводим сообщение
//     if (distance < 0) {
//         clearInterval(timer);
//         messageEl.textContent = 'С Новым годом!';
//         // Скрываем контейнер с таймером
//         document.querySelector('.countdown-container').style.display = 'none';
//         return;
//     }

//     // Рассчитываем дни, часы, минуты и секунды
//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Добавляем ведущий ноль, если число меньше 10
//     const formatTime = (time) => time < 10 ? `0${time}` : time;

//     // Обновляем HTML-элементы
//     daysEl.textContent = days;
//     hoursEl.textContent = formatTime(hours);
//     minutesEl.textContent = formatTime(minutes);
//     secondsEl.textContent = formatTime(seconds);
// }

// // Запускаем функцию countdown() каждую секунду
// const timer = setInterval(countdown, 1000);

// // Вызываем функцию один раз сразу, чтобы избежать задержки в 1 секунду
// countdown();





























































































});




