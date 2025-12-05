function showsidebar()
{
    const  sidebar=document.querySelector(".sidebar")
    sidebar.style.display='flex';
}
function hidesidebar()
{
    const  sidebar=document.querySelector(".sidebar")
    sidebar.style.display='none';
}
//   const sentence = "And I'm a Full Stack Developer!";
//   let index = 0;
//   const typingSpeed = 100; // in milliseconds

//   function typeText() {
//     if (index < sentence.length) {
//       document.getElementById("typed-text").innerHTML += sentence.charAt(index);
//       index++;
//       setTimeout(typeText, typingSpeed);
//     }
//   }

//   typeText(); // start typing

//for sliding effects
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  const slideElements = document.querySelectorAll('.slide-in-left, .slide-in-right');
  slideElements.forEach(el => observer.observe(el));

  //Skills cards
 const skills = [
      { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", details: "Building structured, semantic, and accessible web pages." },
      { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", details: "Creating responsive, visually appealing designs." },
      { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", details: "Adding interactivity and dynamic behavior to websites." },
      { name: "ReactJS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", details: "Building reusable UI components and SPAs." },
      { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", details: "Developing robust, object-oriented applications." },
      { name: "Spring Boot", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", details: "Creating powerful backend services with REST APIs." },
      { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg", details: "Designing and managing relational databases." }
    ];

    const skillsRow = document.getElementById("skillsRow");

    // Create skill cards dynamically
    skills.forEach(skill => {
      const col = document.createElement("div");
      col.className = "col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 mb-4";

      col.innerHTML = `
        <div class="skill-card">
          <div class="flip-inner">
            <div class="flip-front">
              <img src="${skill.img}" alt="${skill.name}">
            </div>
            <div class="flip-back">
              <div>
           <!--     <h5>${skill.name}</h5>-->
                <p>${skill.details}</p>
              </div>
            </div>
          </div>
        </div>
      `;

      skillsRow.appendChild(col);
    });

    const cards = document.querySelectorAll(".skill-card");

    // Observer to trigger animation and flip once
    const observer1 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("show");

              // Auto flip once for mobile & desktop when entering view
              const flipInner = card.querySelector(".flip-inner");
              setTimeout(() => {
                flipInner.classList.add("flipped");
                setTimeout(() => {
                  flipInner.classList.remove("flipped");
                }, 2500); // flip back after 1.5s
              }, 400);
            }, index * 200); // delay each card
          });

          observer1.disconnect(); // run only once
        }
      });
    }, { threshold: 0.3 });

    observer1.observe(document.querySelector("#skills"));

    // projects

      const projects = [
    {
      title: "Jewellery E-Commerce Store",
      description: "Full-stack e-commerce app with product filtering, wishlist, and payment integration.",
      image:  "images/jewel_banner.webp",
      link: "https://customised-jewels.netlify.app/"
    },
    {
      title: "Hollie-A Word Guessing Game",
      description: "An Interactive word guessing game with user-friendly UI using HTML/CSS,JavaScript.Implemented dynamic clue and letter display for better interactivity",
      image:"images/hollie_banner.jpeg",
      link: "https://gamehollie.netlify.app/"
    },
    {
      title: "Online Doctor Consultation Scheduling System",
      description: " A responsive doctor appointment system with booking validation, department/slot selection,and more features with interactive UI",
      image:"images/appointment-banner.jpeg",
      link: "https://doc-clinic-app.netlify.app/"
    },
     {
      title: "Smart Shopping List Manager ",
      description: "A React-based list manager with multiple lists, item CRUD operations, filters for purchased/pending items, and localStorage support with clean UI and smooth user interactions.",
      image:"images/list-banner.jpeg",
      link: "https://list-mate.netlify.app/"
    }
  ];

  const row = document.getElementById("projectsRow");
  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  projects.forEach(proj => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    col.innerHTML = `
      <div class="project-card" data-state="${isTouch ? 'peek' : ''}">
        <img src="${proj.image}" alt="${proj.title}" />
        <div class="overlay">
          <div class="details">
            <h3>${proj.title}</h3>
            <p>${proj.description}</p>
           <a href="${proj.link}" class="btn" target="_blank">View Project</a>
          </div>
        </div>
      </div>
    `;
    row.appendChild(col);
  });

  // Mobile click toggle
  if(isTouch){
    document.querySelectorAll('.project-card').forEach(card=>{
      card.addEventListener('click', function(){
        const state = card.getAttribute('data-state');
        card.setAttribute('data-state', state === 'open' ? 'peek' : 'open');
      });
    });
  }
  //form

    const form = document.getElementById("contact-form");
  const status = document.getElementById("status");

  form.addEventListener("submit", async function(event) {
    event.preventDefault(); // 🚫 stop normal submit/redirect
    const data = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        status.textContent = "✅ Message sent successfully!";
        status.style.color = "green";
        form.reset();
      } else {
        status.textContent = "❌ Oops! Something went wrong.";
        status.style.color = "red";
      }
    }).catch(() => {
      status.textContent = "❌ Failed to send. Please try again later.";
      status.style.color = "red";
    });
  });
