const navPages = document.querySelector(".nav__pages");
navPages.addEventListener("click", function (e) {
   const item = e.target;

   navPages
      .querySelector(".nav__pages__item-active")
      .classList.remove("nav__pages__item-active");

   item.closest(".nav__pages__item").classList.add("nav__pages__item-active");
});

// page loader
// setTimeout(() => {
//    document.querySelector(".loader").classList.add("loader-hidden");
// }, 1500);
