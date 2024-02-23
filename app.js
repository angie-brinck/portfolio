// click event listener to scroll to element related to menu item
document.addEventListener("click", (event) => {
  if (event.target.hasAttribute('data-scroll-to')) {
    const scrollTo = event.target.getAttribute('data-scroll-to')
    const element = document.querySelector("section." + scrollTo);
    gsap.to(window, {
      duration: 1,
      scrollTo: element,
    })
  }
});


// mousemove event listener for projects hover animation
document.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains('project-img')) {
    const imgs = document.querySelectorAll('.project-img')
    imgs.forEach(img => img.style.opacity = 0.6)
    event.target.style.opacity = 1
  }
})

// ScrollTrigger to change highlighted menu item whenever section title visible
const items = document.querySelectorAll('.content > .title')
Array.from(items).forEach(item => {
  ScrollTrigger.create({
    trigger: item,
    start: "top bottom",
    end: "top top",
    onToggle: () => {
      const menuItems = document.querySelectorAll('.menu-item')
      Array.from(menuItems).forEach(item => item.classList.remove('highlight'))

      const menuItem = item.getAttribute('data-menu-item')
      const element = document.querySelector('.menu-item.' + menuItem)
      element.classList.add('highlight')
    }
  })
})


// on scroll function to switch header size, color
window.onscroll = function () {
  const items = document.querySelectorAll('.menu-item')

  const header = document.getElementsByClassName("header")[0];
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.height = "100px";
    header.style.background = "black";
    header.style.fontSize = "20px";
    header.style.paddingTop = "10px";
  } else {
    header.style.height = "130px";
    header.style.background = "transparent";
    header.style.fontSize = "26px";
    header.style.paddingTop = "30px";

    const menuItems = document.querySelectorAll('.menu-item')
    Array.from(menuItems).forEach(item => item.classList.remove('highlight'))
    items[0].classList.add('highlight')
  }
};


// observer to animate title when on screen
var observer = new IntersectionObserver(
  function (entries) {
    for (let i = 0; i < entries.length; i++) {
      const el = entries[i].target;
      if (entries[i].isIntersecting === true) {
        gsap.fromTo(el, { x: -200, opacity: 0 }, { x: 0, opacity: 1 });
      }
    }
  },
  { threshold: [0.1] }
);
const el = document.querySelectorAll(".content > .title");
if (el.length) {
  for (let i = 0; i < el.length; i++) {
    observer.observe(el[i]);
  }
}
