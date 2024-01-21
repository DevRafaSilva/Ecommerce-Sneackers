export default function menuMobile() {
  let menuMobileImg = document.querySelector(".menu-mobile");
  let linksMenuMobile = document.querySelector(".links-item");

  function menuMobileAparece() {
    linksMenuMobile.classList.toggle("ativo");
  }

  menuMobileImg.addEventListener("click", menuMobileAparece);
}
