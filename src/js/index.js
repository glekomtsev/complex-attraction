// Галерея и лайтбоксы от Fancybox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {
  buttons: [
    "zoom",
    "share",
    "slideShow",
    "fullScreen",
    "download",
    "thumbs",
    "close",
  ],
});

// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();

//swiper
import swiper from "./modules/swiper.js";
swiper();

//Inputmask
import Inputmask from "inputmask";

document.addEventListener("DOMContentLoaded", function() {
  //Header
  const header = document.getElementById("header");
  const stickyOffset = 100;

  function handleScroll() {
    if (window.scrollY > stickyOffset) {
      header.classList.add("header-fixed");
      header.classList.remove("header");
    } else {
      header.classList.add("header");
      header.classList.remove("header-fixed");
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  //Title main
  const title = document.querySelector(".main__title");
  title.innerHTML = title.textContent
    .split("")
    .map((letter) => `<span>${letter}</span>`)
    .join("");

  //gallery
  const buttons = document.querySelectorAll(".gallery__btn");
  const swipers = document.querySelectorAll(".gallery__swiper");

  buttons.forEach((button) => {
    button.addEventListener("click", function() {
      // Удаляем активные классы у всех кнопок и свиперов
      buttons.forEach((btn) => btn.classList.remove("gallery__btn--active"));
      swipers.forEach((swiper) =>
        swiper.classList.remove("gallery__swiper--active")
      );

      // Добавляем активные классы только к нажатой кнопке и соответствующему свиперу
      const targetId = button.id.replace("gallery__btn-", "gallery__swiper-");
      document
        .getElementById(targetId)
        .classList.add("gallery__swiper--active");
      button.classList.add("gallery__btn--active");
    });
  });

  //map
  const buttonsMap = document.querySelectorAll(".place__btn");
  const maps = document.querySelectorAll(".place__map");

  buttonsMap.forEach((button) => {
    button.addEventListener("click", function() {
      // Удаляем активные классы у всех кнопок и свиперов
      buttonsMap.forEach((btn) => btn.classList.remove("place__btn--active"));
      maps.forEach((maps) => maps.classList.remove("place__map--active"));

      // Добавляем активные классы только к нажатой кнопке и соответствующему свиперу
      const targetId = button.id.replace("place__btn-", "place__map-");
      document.getElementById(targetId).classList.add("place__map--active");
      button.classList.add("place__btn--active");
    });
  });

  //purchase
  const phoneInput = document.getElementById("phone");

  // Создайте экземпляр Inputmask с нужным шаблоном
  const mask = new Inputmask("+7 (999) 99-99-999");

  // Примените маску к полю ввода
  mask.mask(phoneInput);

  const buttonsPur = document.querySelectorAll(".purchase__btn");
  const titles = document.querySelectorAll(".purchase__text-title");
  const desc = document.querySelectorAll(".purchase__text-desc");
  const img = document.querySelectorAll(".purchase__img");

  buttonsPur.forEach((button) => {
    button.addEventListener("click", function() {
      // Удаляем активные классы у всех кнопок и элементов
      buttonsPur.forEach((btn) =>
        btn.classList.remove("purchase__btn--active")
      );
      titles.forEach((title) =>
        title.classList.remove("purchase__text-title--active")
      );
      desc.forEach((description) =>
        description.classList.remove("purchase__text-desc--active")
      );
      img.forEach((description) =>
        description.classList.remove("purchase__img--active")
      );

      // Получаем ID для заголовка и описания
      const titleId = button.id.replace(
        "purchase__btn-",
        "purchase__text-title-"
      );
      const descId = button.id.replace(
        "purchase__btn-",
        "purchase__text-desc-"
      );
      const imgId = button.id.replace("purchase__btn-", "purchase__img-");

      // Добавляем активные классы к соответствующим элементам
      document
        .getElementById(titleId)
        .classList.add("purchase__text-title--active");
      document
        .getElementById(descId)
        .classList.add("purchase__text-desc--active");
      document.getElementById(imgId).classList.add("purchase__img--active");
      button.classList.add("purchase__btn--active");
    });
  });
}); // Закрывающая скобка для функции DOMContentLoaded

//plan
// Получите элементы модального окна и кнопок
const modal = document.querySelector(".build-plan");
const btns = document.querySelectorAll(".open-modal-plan");
const span = document.getElementsByClassName("close")[0];

// Пройтись по всем кнопкам и добавить событие клика
btns.forEach(function(btn) {
  btn.onclick = function() {
    modal.style.display = "block"; // Показать модальное окно
    setTimeout(() => {
      modal.classList.add("modal-show"); // Добавить класс для анимации
    }, 10); // Небольшая задержка для плавного показа
  };
});

// Закрыть модальное окно при нажатии на крестик
if (span) {
  span.onclick = function() {
    modal.classList.remove("modal-show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 400); // Время должно совпадать с переходом CSS
  };
}

// Закрыть модальное окно, если пользователь нажимает вне его содержимого
window.onclick = function(event) {
  if (event.target === modal) {
    modal.classList.remove("modal-show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 400); // Время должно совпадать с переходом CSS
  }
};

//скачивание файла
document.getElementById("downloadBtn").addEventListener("click", function() {
  var userConfirmed = confirm("Скачать файл?");

  if (userConfirmed) {
    alert("Файл загружается...");
  } else {
    console.log("Скачивание отменено.");
  }
});

//purchase modal
const callBackButton = document.getElementById("call-back-button");
const purchaseModal = document.getElementById("purchase-modal");
const closeModalButton = document.getElementById("purchase-close-modal");

callBackButton.addEventListener("click", () => {
  const phoneInput = document.getElementById("phone").value;

  // Проверка на заполненность поля номера телефона
  if (phoneInput.trim() === "") {
    alert("Пожалуйста, введите номер телефона.");
  } else {
    // Показать модальное окно
    purchaseModal.style.display = "block";
  }
});

closeModalButton.addEventListener("click", () => {
  // Закрыть модальное окно
  purchaseModal.style.display = "none";
});

// Закрытие модального окна при клике вне его области
window.addEventListener("click", (event) => {
  if (event.target === purchaseModal) {
    purchaseModal.style.display = "none";
  }
});
