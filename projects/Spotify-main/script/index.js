window.onload = () => {
  // Select all list elements in the nav and set the default time transition
  let listItems = document.querySelectorAll('nav li')
  let time = 0.05
  // Set the delay on each element of the list
  listItems.forEach(item => {
    item.style.transitionDelay = time+"s";;
    time += 0.05;
  });
  // onClick burger menu
  document.querySelector('#burger').onclick = function() {
    // Switch between classes on burger menu
    this.classList.toggle('burgerMenu-active')
    this.classList.toggle('burgerMenu')
    // 
    document.querySelector('nav').classList.toggle('opened')
  } 
}