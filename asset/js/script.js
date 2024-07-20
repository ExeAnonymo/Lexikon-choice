// JavaScript code to enhance user experience (e.g., smooth scrolling)
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// script.js
// function toggleMenu() {
//     const navLinks = document.getElementById('navLinks');
//     if (navLinks.style.display === 'flex') {
//         navLinks.style.display = 'none';
//     } else {
//         navLinks.style.display = 'flex';
//     }
// }
function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
}


// navbar setup down////////////////////////////////////////////////

const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});


// navbar setup end////////////////////////////////////////////////

//nav hide//
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Scroll down
        document.querySelector("nav").classList.add("hidden");
    } else {
        // Scroll up
        document.querySelector("nav").classList.remove("hidden");
    }
    lastScrollTop = currentScroll;
});

//nav end//



// auto save

// Function to save content to localStorage
function saveContent() {
    var sections = document.querySelectorAll('textarea, input[type="text"]');
    sections.forEach(function(section) {
        var key = section.id;
        var content = section.value;
        localStorage.setItem(key, content);
    });
}

// Function to load content from localStorage on page load
function loadContent() {
    var sections = document.querySelectorAll('textarea, input[type="text"]');
    sections.forEach(function(section) {
        var key = section.id;
        var savedContent = localStorage.getItem(key);
        if (savedContent) {
            section.value = savedContent;
        }
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', loadContent);
document.addEventListener('input', saveContent);
