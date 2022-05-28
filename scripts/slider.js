"use strict";

const reviewsImages = [
  `./img/reviews/Jackman.jpg`,
  `./img/reviews/Stalone.jpg`,
  `./img/reviews/ChrisEvans.jpg`,
  `./img/reviews/HarryPotter.jpg`,
  `./img/reviews/Arnold.jpg`,
  `./img/reviews/Emma.jpg`,
  `./img/reviews/Johny-depp.jpg`,
  `./img/reviews/Leo.jpg`,
  `./img/reviews/SmileBoy.jpg`,
];
const reviewsNames = [
  "Hugh Jackman",
  "Sylvester Stallone",
  "Christian Evans",
  "Daniel Redclife",
  "Anrold Schwarzenegger",
  "Emma Watson",
  "Leonardo Dicabrio",
  "Djim Keri",
];
const reviewsWorks = [
  "Actor - was Wolverine",
  "Actor - body-builder",
  "Actor - Capitan America",
  "Actor - was Harry Potter",
  "Actor, was terminator",
  "Actor - was Germiona",
  "Actor - with Oskar",
  "The Best comedy actor",
];

const reviewCitation = [
  "This a real good website for using, real helped me a lot in motivation",
  "when i opened one of my businesses, people grom this company helped me a lot",
  "Amazing, Captain America is happy with this site",
  "There is something magical about this site",
  "Here they helped me buy new parts of the robot",
  "As Harry would say there is some kind of magic here",
  "This site is the reason I got my Oskar",
  "Real funny and amazing webisite",
];

const reviewsList = document.querySelector(".reviews__celebrity-list");

const showItems = (indxOfAppr, indxOfDissp, classOfDissp, classOfAppr) => {
  for (let j = indxOfAppr; j < indxOfAppr + 2; j++) {
    document
      .querySelectorAll(".reviews__celebrity-item")
      [j].classList.add(classOfDissp);
    setTimeout(() => {
      document
        .querySelectorAll(".reviews__celebrity-item")
        [j].setAttribute("hidden", true);
      document
        .querySelectorAll(".reviews__celebrity-item")
        [j].classList.remove(classOfDissp);
      for (let j = indxOfDissp; j < indxOfDissp + 2; j++) {
        document
          .querySelectorAll(".reviews__celebrity-item")
          [j].removeAttribute("hidden");
        document
          .querySelectorAll(".reviews__celebrity-item")
          [j].classList.add(classOfAppr);
        setTimeout(() => {
          document
            .querySelectorAll(".reviews__celebrity-item")
            [j].classList.remove(classOfAppr);
        }, 500);
      }
    }, 500);
  }
};
const moveOnElemsNext = (indx) => {
  document.querySelectorAll(".reviews__celebrity-item").forEach((elem) => {
    elem.classList.remove("active");
  });
  indx++;
  document
    .querySelectorAll(".reviews__celebrity-item")
    [indx].classList.add("active");
  let itemImg = document.querySelectorAll(".reviews__celebrity-item")[indx]
    .children[0].src;

  document.querySelector(".reviews__celebrity_photo").src = itemImg;
  document.querySelector(".reviews__star_name").textContent =
    reviewsNames[indx];
  document.querySelector(".reviews__star_job").textContent = reviewsWorks[indx];
  document.querySelector(".reviews__citation").textContent =
    reviewCitation[indx];
};
const moveOnElemsPrev = (indx) => {
  document.querySelectorAll(".reviews__celebrity-item").forEach((elem) => {
    elem.classList.remove("active");
  });
  indx--;
  document
    .querySelectorAll(".reviews__celebrity-item")
    [indx].classList.add("active");
  let itemImg = document.querySelectorAll(".reviews__celebrity-item")[indx]
    .children[0].src;

  document.querySelector(".reviews__celebrity_photo").src = itemImg;
  document.querySelector(".reviews__star_name").textContent =
    reviewsNames[indx];
  document.querySelector(".reviews__star_job").textContent = reviewsWorks[indx];
  document.querySelector(".reviews__citation").textContent =
    reviewCitation[indx];
};

reviewsList.addEventListener("click", (event) => {
  if (!event.target.closest(".reviews__celebrity-item")) return;

  let target = event.target.closest(".reviews__celebrity-item");
  let i;
  document.querySelectorAll(".reviews__celebrity-item").forEach((elem) => {
    elem.classList.remove("active");
  });
  target.classList.add("active");
  document
    .querySelectorAll(".reviews__celebrity-item")
    .forEach((elem, indx) => {
      if (elem.classList.contains("active")) {
        i = indx;
      }
    });

  let itemImg = target.children[0].src;

  document.querySelector(".reviews__celebrity_photo").src = itemImg;

  document.querySelector(".reviews__star_name").textContent = reviewsNames[i];
  document.querySelector(".reviews__star_job").textContent = reviewsWorks[i];
  document.querySelector(".reviews__citation").textContent = reviewCitation[i];
});

const reviewsBtn = document.querySelectorAll(".reviews__button");
reviewsBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btn.classList.add("anim");
    setTimeout(() => {
      btn.classList.remove("anim");
    }, 500);

    let i;
    document
      .querySelectorAll(".reviews__celebrity-item")
      .forEach((elem, indx) => {
        if (elem.classList.contains("active")) {
          i = indx;
        }
      });

    if (index == 1) {
      if (i > 4) {
        if (
          !document
            .querySelectorAll(".reviews__celebrity-item")[6]
            .hasAttribute("hidden")
        ) {
          if (i > 6) {
            return;
          } else {
            moveOnElemsNext(i);
          }
        } else {
          showItems(2, 6, "disappear-left", "appear-right");
        }
      } else if (i > 2) {
        if (
          !document
            .querySelectorAll(".reviews__celebrity-item")[0]
            .hasAttribute("hidden")
        ) {
          if (
            !document
              .querySelectorAll(".reviews__celebrity-item")[4]
              .hasAttribute("hidden")
          ) {
            moveOnElemsNext(i);
          } else {
            showItems(0, 4, "disappear-left", "appear-right");
          }
        } else {
          moveOnElemsNext(i);
        }
      } else {
        moveOnElemsNext(i);
      }
    } else {
      if (i < 3) {
        if (
          !document
            .querySelectorAll(".reviews__celebrity-item")[0]
            .hasAttribute("hidden")
        ) {
          if (i < 1) {
            return;
          } else {
            moveOnElemsPrev(i);
          }
        } else {
          showItems(4, 0, "disappear-right", "appear-left");
        }
      } else if (i < 5) {
        if (
          !document
            .querySelectorAll(".reviews__celebrity-item")[6]
            .hasAttribute("hidden")
        ) {
          if (
            !document
              .querySelectorAll(".reviews__celebrity-item")[2]
              .hasAttribute("hidden")
          ) {
            moveOnElemsPrev(i);
          } else {
            showItems(6, 2, "disappear-right", "appear-left");
          }
        } else {
          moveOnElemsPrev(i);
        }
      } else {
        moveOnElemsPrev(i);
      }
    }
  });
});
