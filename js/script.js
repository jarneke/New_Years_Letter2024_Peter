/**
 *
 * @param {int} imageArrayLength Lenth of the imageArray
 * @returns random int limited to array lenth
 */
const getRandom = (imageArrayLength) =>
  (randomIndex = Math.floor(Math.random() * imageArrayLength));
const vhInPixels = window.innerHeight || document.documentElement.clientHeight;
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { rootMargin: `-${vhInPixels / 3}px 0px` }
);

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const imageArray = [
  "../assets/Waves/blue-black_small_0.svg",
  "../assets/Waves/blue-black_small_1.svg",
  "../assets/Waves/blue-black_small_2.svg",
  "../assets/Waves/blue-black_small_3.svg",
  "../assets/Waves/blue-black_small_4.svg",
  "../assets/Waves/blue-black_small_5.svg",
];
const elements = document.getElementsByClassName("divider-small");
console.log(elements);
for (const element of elements) {
  // Get elements to fill parent element with
  const divT = document.createElement("div");
  const divB = document.createElement("div");
  const pElement = element.firstElementChild;

  //clear parent element
  while (element.firstChild != null) {
    element.removeChild(element.firstChild);
  }
  // append elements to parent element
  element.appendChild(divT);
  element.appendChild(pElement);
  element.appendChild(divB);

  //give random image to div
  divT.style.backgroundImage = `url(${
    imageArray[getRandom(imageArray.length)]
  })`;
  divB.style.backgroundImage = `url(${
    imageArray[getRandom(imageArray.length)]
  })`;
  //rotate top div image
  divT.classList = "rotated";
}
