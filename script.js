const a = document.querySelectorAll(".nav-links a");

a.forEach((e) => {
    e.addEventListener('click', (event) => {
        a.forEach((anchor) => {
            anchor.classList.remove("active");
        });

        let an = event.target;
        an.classList.add("active");
    });
});

window.addEventListener("scroll", function() {
        const navbar = document.querySelector(".nav-bar");
    if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded" ,  () => {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach((link) => {
        link.addEventListener("click" , (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({behavior : "smooth"});
        })
    })
})
document.addEventListener("DOMContentLoaded" ,  () => {
    const navLinks = document.querySelectorAll(".nav-bar-toggle a");

    navLinks.forEach((link) => {
        link.addEventListener("click" , (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({behavior : "smooth"});
        })
    })
})
const darkModeButton = document.getElementById('dark-mode-button');
const logoLink = document.querySelector(".logo-link");
darkModeButton.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        logoLink.innerHTML = `<img class="logo-white" src="/images/logo-img-dark-mode.png" alt="logo">`
    }else{
        logoLink.innerHTML = `<img class="logo" src="/images/logo-img.png" alt="logo">`
    }
    if(darkModeButton.classList.contains("dark-modeBtn")){
        darkModeButton.innerHTML = `<i class="fa-solid fa-circle"></i>`
        darkModeButton.classList.remove("dark-modeBtn");
    }else{
        darkModeButton.innerHTML = "";
        darkModeButton.innerHTML = `<i class="fa-solid fa-moon"></i>`
        darkModeButton.classList.add("dark-modeBtn");
    }
}



const form = document.querySelector("form");
form.addEventListener('submit' , () => {
    alert("Thanks! for submitting the form, I will reach you soon....");
    document.querySelectorAll("input").forEach((e) => {
        e.value = "";
    })
    document.querySelector("textarea").value = '';
})

const prevProject = document.getElementById('angle-left');
const nextProject = document.getElementById('angle-right');
const containers = document.querySelectorAll('.container-1, .container-2, .container-3');
let projectNo = 0; // Start with the first project

prevProject.addEventListener('click', () => {
    viewProject(projectNo - 1);
    prevProject.style.color = "#FF621F";
    if(document.body.classList.contains("dark-mode")){
        nextProject.style.color = "#fff";
    }else{
        nextProject.style.color = "#000";
    }
    
});

nextProject.addEventListener('click', () => {
    viewProject(projectNo + 1);
    nextProject.style.color = "#FF621F";
    if(document.body.classList.contains("dark-mode")){
        prevProject.style.color = "#fff";
    }else{
        prevProject.style.color = "#000";
    }
    
});
containers[1].style.display = "none";
containers[2].style.display = "none";
function viewProject(newProjectNo) {
    let dots = document.querySelectorAll(".dot");
    // Hide the current project
    containers[projectNo].style.display = 'none';

    dots.forEach((dot) => {
        dot.classList.remove('activeDot');
    });
    // Ensure newProjectNo is within valid range
    if (newProjectNo < 0) {
        newProjectNo = containers.length - 1;
    } else if (newProjectNo >= containers.length) {
        newProjectNo = 0;
    }
    containers[newProjectNo].classList.remove('slide-out');
    containers[newProjectNo].classList.add('slide-in');
    // Show the new project
    containers[newProjectNo].style.display = 'flex';
    dots[newProjectNo].classList.add('activeDot');
    // Update projectNo
    projectNo = newProjectNo;
}

const hamburgerBtn = document.querySelector(".toggle-menu");
const hamburgerMenu = document.querySelector(".nav-bar-toggle");
const crossBtn = document.querySelector(".cross");
hamburgerBtn.addEventListener('click' , () => {
    
    if(hamburgerMenu.classList.contains("active-navBar")){
        hamburgerMenu.classList.remove("active-navBar");
        
    }else{
        hamburgerMenu.classList.add("active-navBar");
        document.body.style.overflow = "hidden";
    }
    
    // if(document.body.classList.contains("overFlowHidden")){
    //    document.body.classList.remove("overFlowHidden"); 
    // }
    // else{
    //     document.body.classList.add("overFlowHidden");
    // }/
    
})
crossBtn.addEventListener('click' , () => {
    hamburgerMenu.classList.remove("active-navBar");
    document.body.style.overflow = "visible";
})

const aHamburger = document.querySelectorAll(".nav-bar-toggle ul li a");

aHamburger.forEach((e) => {
    e.addEventListener('click', (event) => {
        
        aHamburger.forEach((anchor) => {
            anchor.classList.remove("active");
        });

        let an = event.target;
        an.classList.add("active");
        event.target.parentElement.parentElement.parentElement.classList.remove("active-navBar");
        document.body.style.overflow = "visible";
    });
});
