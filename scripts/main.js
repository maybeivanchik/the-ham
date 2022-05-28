"use strict";

const serviceBtn = document.querySelectorAll(".services__button");
const serviceDesc = document.querySelectorAll(".services__item-desc");
serviceBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    serviceBtn.forEach((elem) => {
      elem.classList.remove("active");
    });
    btn.classList.add("active");

    serviceDesc.forEach((desc) => {
      desc.classList.remove("active");
    });
    serviceDesc[index].classList.add("active");
  });
});

const amazingImages = document.querySelector(".amazing-works__image-list");
const amazingWorksCollection = [
  ["randomCollection"],
  [
    "./img/amazing-work/graphic-design/graphic-design1.jpg",
    "./img/amazing-work/graphic-design/graphic-design2.jpg",
    "./img/amazing-work/graphic-design/graphic-design3.jpg",
    "./img/amazing-work/graphic-design/graphic-design4.jpg",
    "./img/amazing-work/graphic-design/graphic-design5.jpg",
    "./img/amazing-work/graphic-design/graphic-design6.jpg",
    "./img/amazing-work/graphic-design/graphic-design7.jpg",
    "./img/amazing-work/graphic-design/graphic-design8.jpg",
    "./img/amazing-work/graphic-design/graphic-design9.jpg",
    "./img/amazing-work/graphic-design/graphic-design10.jpg",
    "./img/amazing-work/graphic-design/graphic-design11.jpg",
    "./img/amazing-work/graphic-design/graphic-design12.jpg",
  ],
  [
    "./img/amazing-work/landing-pages/landing-page1.jpg",
    "./img/amazing-work/landing-pages/landing-page2.jpg",
    "./img/amazing-work/landing-pages/landing-page3.jpg",
    "./img/amazing-work/landing-pages/landing-page4.jpg",
    "./img/amazing-work/landing-pages/landing-page5.jpg",
    "./img/amazing-work/landing-pages/landing-page6.jpg",
    "./img/amazing-work/landing-pages/landing-page7.jpg",
    "./img/amazing-work/landing-pages/landing-page8.jpg",
    "./img/amazing-work/landing-pages/landing-page9.jpg",
    "./img/amazing-work/landing-pages/landing-page10.jpg",
    "./img/amazing-work/landing-pages/landing-page11.jpg",
    "./img/amazing-work/landing-pages/landing-page12.jpg",
  ],
  [
    "./img/amazing-work/web-design/web-design1.jpg",
    "./img/amazing-work/web-design/web-design2.jpg",
    "./img/amazing-work/web-design/web-design3.jpg",
    "./img/amazing-work/web-design/web-design4.jpg",
    "./img/amazing-work/web-design/web-design5.jpg",
    "./img/amazing-work/web-design/web-design6.jpg",
    "./img/amazing-work/web-design/web-design7.jpg",
    "./img/amazing-work/web-design/web-design8.jpg",
    "./img/amazing-work/web-design/web-design9.jpg",
    "./img/amazing-work/web-design/web-design10.jpg",
    "./img/amazing-work/web-design/web-design11.jpg",
    "./img/amazing-work/web-design/web-design11.jpg",
  ],
  [
    "./img/amazing-work/wordpress/wordpress1.jpg",
    "./img/amazing-work/wordpress/wordpress2.jpg",
    "./img/amazing-work/wordpress/wordpress3.jpg",
    "./img/amazing-work/wordpress/wordpress4.jpg",
    "./img/amazing-work/wordpress/wordpress5.jpg",
    "./img/amazing-work/wordpress/wordpress6.jpg",
    "./img/amazing-work/wordpress/wordpress7.jpg",
    "./img/amazing-work/wordpress/wordpress8.jpg",
    "./img/amazing-work/wordpress/wordpress9.jpg",
    "./img/amazing-work/wordpress/wordpress10.jpg",
    "./img/amazing-work/wordpress/wordpress11.jpg",
    "./img/amazing-work/wordpress/wordpress12.jpg",
  ],
];
const amazingNameCattegories = [
  "randomCollection",
  "Graphic design",
  "Web design",
  "Landing page",
  "Wordpress",
];

const showAmazingLIstImages = (index) => {
  let cattegory = [];
  if (index === 0) {
    for (let i = 0; i < 12; i++) {
      cattegory.push(Math.floor(Math.random() * (5 - 1) + 1));
    }
  } else {
    for (let i = 0; i < 12; i++) {
      cattegory.push(index);
    }
  }
  for (let i = 0; i < 12; i++) {
    amazingImages.insertAdjacentHTML(
      "beforeend",
      `<li class="amazing-works__image-item">
    <div class="amazing-works__image-inner">
      <div class="amazing-works__image-front">
        <img
          src="${
            amazingWorksCollection[cattegory[i]][Math.floor(Math.random() * 12)]
          }"
          alt="img"
          width="285"
          height="206"
        />
      </div>
      <div class="amazing-works__image-back">
        <div class="amazing-works__image-back__img">
          <a href="#" class="amazing-works__image-back__box">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="amazing-works__image-back_link"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759142 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922615 9.8266 0.0883685 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z"
              />
            </svg>
          </a>
          <a href="#" class="amazing-works__image-back__box">
            <div class="amazing-works__image-back__block"></div>
          </a>
        </div>
        <p
          class="amazing-works__image-back__title accent-color-green"
        >
          Creative design
        </p>
        <p class="amazing-works__image-back__text">${
          amazingNameCattegories[cattegory[i]]
        }
          </p>
      </div>
    </div>
  </li>`
    );
  }
  let lastIndex =
    document.querySelectorAll(".amazing-works__image-item").length - 1;
  let firstIndex = lastIndex - 11;
  let giveClassForItems = setTimeout(function tick() {
    if (firstIndex > lastIndex) {
      clearTimeout(giveClassForItems);
    } else {
      document
        .querySelectorAll(".amazing-works__image-item")
        [firstIndex].classList.add("visible");
      firstIndex++;
    }
    giveClassForItems = setTimeout(tick, 40);
  }, 40);
};

window.addEventListener("load", () => {
  showAmazingLIstImages(0);
  new Masonry(document.querySelector(".gallery__list"), {
    itemSelector: ".gallery__item",
    gutter: 5,
  });
  new Masonry(document.querySelector(".gallery__item-list"), {
    gutter: 3,
  });
  new Masonry(document.querySelector(".gallery__mini-list"), {
    gutter: 3,
  });
});

const amazingBtnList = document.querySelectorAll(".amazing-works__button");
const loadMore = document.querySelectorAll(".section__load-more");
amazingBtnList.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    amazingBtnList.forEach((elem) => {
      elem.classList.remove("active");
    });
    btn.classList.add("active");
    document.querySelectorAll(".amazing-works__image-item").forEach((elem) => {
      elem.remove();
    });
    showAmazingLIstImages(index);
    loadMore[0].style.display = "block";
  });
});

const showGalleryItems = () => {
  document.querySelector(".gallery__list").insertAdjacentHTML(
    "beforeend",
    `<li class="gallery__item">
  <img
    src="./img/best-images/vanglo-house-1 1.jpg"
    alt="gallery img"
    class="gallery__img"
    width="378"
    height="263"
  />
  </li>
  <li class="gallery__item">
  <img
    src="./img/best-images/80493541_1281644acb_o 1.jpg"
    alt="gallery img"
    class="gallery__img"
    width="378"
    height="380"
  />
  </li>
  <li class="gallery__item">
  <img
    src="./img/best-images/p1_8 1.jpg"
    alt="gallery img"
    class="gallery__img"
    width="378"
    height="247"
  />
  </li>
  <li class="gallery__item">
  <img
    src="./img/best-images/ringve-museum-1 1.jpg"
    alt="gallery img"
    class="gallery__img"
    width="378"
    height="290"
  />
  </li>
  <li class="gallery__item">
  <img
    src="./img/best-images//vanglo-house-1 2.jpg"
    alt="gallery img"
    class="gallery__img"
    width="378"
    height="254"
  />
  </li>`
  );
};
const galleryOfMassonry = () => {
  new Masonry(document.querySelector(".gallery__list"), {
    itemSelector: ".gallery__item",
    gutter: 5,
  });
};

loadMore.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (index === 0) {
      amazingBtnList.forEach((btnn, indx) => {
        if (btnn.classList.contains("active")) {
          if (
            document.querySelector(".amazing-works__image-list").children
              .length !== 24
          ) {
            loadMore[index].classList.add("anim");
            setTimeout(() => {
              showAmazingLIstImages(indx);
              loadMore[index].classList.remove("anim");
            }, 1000);
          } else {
            loadMore[index].classList.add("anim");
            setTimeout(() => {
              showAmazingLIstImages(indx);
              loadMore[index].classList.remove("anim");
              loadMore[index].style.display = "none";
            }, 1000);
          }
        }
      });
    } else {
      if (document.querySelectorAll(".gallery__item").length !== 13) {
        loadMore[index].classList.add("anim");
        setTimeout(() => {
          showGalleryItems();
          galleryOfMassonry();
          loadMore[index].classList.remove("anim");
        }, 1000);
        console.log(document.querySelectorAll(".gallery__item").length);
      } else {
        loadMore[index].classList.add("anim");
        setTimeout(() => {
          showGalleryItems();
          galleryOfMassonry();
          loadMore[index].classList.remove("anim");
          loadMore[index].style.display = "none";
        }, 1000);
      }
    }
  });
});
