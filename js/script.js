document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menuIcon");
  const closeIcon = document.getElementById("closeIcon");
  const menuList = document.querySelector("ul");

  menuIcon.addEventListener("click", function () {
    menuList.classList.add("left-0");
    menuList.classList.remove("left-[-100%]");
    menuIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  });

  closeIcon.addEventListener("click", function () {
    menuList.classList.remove("left-0");
    menuList.classList.add("left-[-100%]");
    closeIcon.classList.add("hidden");
    menuIcon.classList.remove("hidden");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + "</span>";
      },
    },
  });

  // Custom navigation button event listeners
  document
    .querySelector(".custom-swiper-button-prev")
    .addEventListener("click", function () {
      swiper.slidePrev();
    });

  document
    .querySelector(".custom-swiper-button-next")
    .addEventListener("click", function () {
      swiper.slideNext();
    });
});
