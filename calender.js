const wrapper = document.querySelector('.wrapper');
const slideItem = document.querySelector('.slideItem');
const menuItems = document.querySelectorAll('.menuItem');

console.log(slideItem);


menuItems.forEach((btn, index) => {
  btn.addEventListener('click', () => {

    wrapper.style.transform = `translate(${-100 * index}vw)`
  })
})















// const slider = () => {

// }
// console.log(slider());















