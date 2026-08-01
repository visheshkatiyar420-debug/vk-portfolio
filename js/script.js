/* =========================================
        MOBILE MENU
========================================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.innerHTML = 
    navLinks.classList.contains("active")
    ?
    '<i class="ri-close-line"></i>'
    :
    '<i class="ri-menu-3-line"></i>';
});

        // CLOSE MENU AFTER CLICK

const navItems = document.querySelectorAll(".nav-links a");
navItems.forEach(item => {
    item.addEventListener("click",()=>{
        navLinks.classList.remove("active");
        menuBtn.innerHTML =
        '<i class="ri-menu-3-line"></i>';
    });
});

        // NAVBAR ACTIVE LINK

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";
    sections.forEach(section=>{
        const sectionTop = section.offsetTop - 150;
        if(scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });
    links.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });
});



    //    SMOOTH SCROLL


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{
anchor.addEventListener("click",function(e){
    const target = document.querySelector(
        this.getAttribute("href")
    );
    if(target){
        e.preventDefault();
           target.scrollIntoView({
            behavior:"smooth"
        });
    }
});
});

        // SCROLL PROGRESS BAR



const progressBar = document.querySelector("#progress-bar");
window.addEventListener("scroll",()=>{
    let scrollTop = document.documentElement.scrollTop;
    let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
    let progress =
    (scrollTop / height) * 100;
    progressBar.style.width = progress + "%";
});


        // CONTACT FORM



const form = document.querySelector(".contact-form");
if(form){
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const inputs =
    form.querySelectorAll("input, textarea");
    let empty = false;
    inputs.forEach(input=>{
        if(input.value.trim()===""){
            empty=true;
        }
    });
    if(empty){
        alert("Please fill all fields");
    }
    else{
        alert("Message sent successfully 🚀");
        form.reset();
    }
});
}

//    FOOTER YEAR

const year = document.querySelector(".footer-bottom p");
if(year){
    year.innerHTML =
    `© ${new Date().getFullYear()} Vishesh Katiyar. All Rights Reserved.`;
}

        // IMAGE TILT EFFECT

const cards =
document.querySelectorAll(".skill-card,.service-card");
cards.forEach(card=>{
card.addEventListener("mousemove",(e)=>{
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = (y - rect.height/2)/15;
    const rotateY = (rect.width/2 - x)/15;
     card.style.transform =
    `
    perspective(800px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    translateY(-8px)
    `;
});
card.addEventListener("mouseleave",()=>{
    card.style.transform="";
});
});

const cursor=document.querySelector(".cursor");
const dot=document.querySelector(".cursor-dot");

window.addEventListener("mousemove",(e)=>{

  gsap.to(cursor,{
    left:e.clientX,
    top:e.clientY,
    xPercent:-50,
    yPercent:-50,
    duration:1,
    ease:"power2.out"
  });

  gsap.set(dot,{
    left:e.clientX,
    top:e.clientY,
    xPercent:-50,
    yPercent:-50
  });

});

document.querySelectorAll("a,button").forEach(el=>{
  el.addEventListener("mouseenter",()=>{
    cursor.classList.add("active");
  });
  el.addEventListener("mouseleave",()=>{
    cursor.classList.remove("active");
  });
});

// hire and resume button js 
function openContact(){
    document.querySelector("#contact-section").scrollIntoView({
        behavior:"smooth"
    });
}

function openResume(){
    window.open("../resume/Vishesh_BCA_2YR.pdf", "_blank");
}
// projects and contact button
function openProjects(){
    document.querySelector("#workspace").scrollIntoView({
        behavior:"smooth"
    });
}

function openContact(){
    document.querySelector("#contact-section").scrollIntoView({
        behavior:"smooth"
    });
}

// workspace working
const projects = [
    {
        tag: "Featured Project",
        title: "TutorHub",
        image: "assets/images/tutorhub.png",
        description: "A modern tutoring platform where students can easily discover tutors, browse profiles, and connect with the right mentor.",
        tech: ["React", "Node", "MongoDB", "GSAP", "Tailwind"],
        live: "#",
        github: "https://github.com/yash3556/TutorHub"
    },
    {
        tag: "Personal Project",
        title: "VK Portfolio",
        image: "assets/images/myportfolio.png",
        description: "A modern portfolio website built with HTML, CSS, JavaScript and GSAP.",
        tech: ["HTML", "CSS", "JavaScript", "GSAP"],
        live: "#",
        github: "#"
    },
    {
        tag: "UI Project",
        title: "Martin",
        image: "assets/images/martin.png",
        description: "Creative software landing page with smooth animations and bold UI.",
        tech: ["HTML", "CSS", "JavaScript"],
        live: "https://martin-eight.vercel.app/",
        github: "https://github.com/visheshkatiyar420-debug/martin"
    },
    {
        tag: "Upcoming",
        title: "Coming Soon",
        image: "https://i.pinimg.com/736x/58/cf/f4/58cff420183ad4836f4e2892f1e566e9.jpg",
        description: "More exciting projects are on the way.",
        tech: ["Coming Soon"],
        live: "#",
        github: "#"
    }
];

const folders = document.querySelectorAll(".folder");

const tag = document.querySelector(".project-tag");
const title = document.querySelector(".project-title");
const description = document.querySelector(".project-description");
const image = document.querySelector(".browser-screen img");
const techStack = document.querySelector(".tech-stack");
const liveBtn = document.querySelector(".live-btn");
const githubBtn = document.querySelector(".github-btn");

folders.forEach(folder => {

    folder.addEventListener("click", () => {

        const index = folder.dataset.index;
        const project = projects[index];

        // Active Folder
        folders.forEach(btn => {
            btn.classList.remove("active");
            btn.querySelector("i").className = "fa-solid fa-folder";
        });

        folder.classList.add("active");
        folder.querySelector("i").className = "fa-solid fa-folder-open";

        // Update Content
        tag.textContent = project.tag;
        title.textContent = project.title;
        description.textContent = project.description;
        image.src = project.image;

        techStack.innerHTML = "";

        project.tech.forEach(item => {
            const span = document.createElement("span");
            span.textContent = item;
            techStack.appendChild(span);
        });

        liveBtn.href = project.live;
        githubBtn.href = project.github;

    });

});

