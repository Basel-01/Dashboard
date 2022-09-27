// SideBar Active
let lis = document.querySelectorAll("aside li a");

lis.forEach(li => {
  li.addEventListener("click", e => {
    lis.forEach(li => {
      li.classList.remove("active");
    })
    li.classList.add("active");
  })
})

// Theme Active
let themes = document.querySelectorAll(".theme-toggler span");

themes.forEach(theme => {
  theme.addEventListener("click", e => {
    themes.forEach(theme => {
      theme.classList.remove("active");
    })
    theme.classList.add("active");
    document.body.classList.toggle('dark-theme-variables');
  })
})

// Burger Toggler
let aside = document.querySelector(".container aside");
let burgerBtn = document.querySelector(".right-side .menue-btn");
let closeBtn = document.querySelector(".container aside .top .close");

burgerBtn.addEventListener("click", () => {
  aside.classList.add("active");
})
closeBtn.addEventListener("click", () => {
  aside.classList.remove("active");
})
