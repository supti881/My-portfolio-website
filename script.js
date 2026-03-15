const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card");


  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          const card = entry.target;
          const progress = card.querySelector(".progress-fill");
          const skillValue = card.getAttribute("data-skill");
          progress.style.width = skillValue + "%";
          card.style.opacity = 1;
          card.style.transform = "translateY(0)";
          observer.unobserve(card);
        }
      });
    },
    { threshold: 0.3 }
  );


  skillCards.forEach(card => observer.observe(card));
});
const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}
});
},{threshold:0.2});


sections.forEach(section=>{
section.style.opacity="0";
section.style.transform="translateY(50px)";
section.style.transition="1s";
observer.observe(section);
});

