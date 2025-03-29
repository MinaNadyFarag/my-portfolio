document.addEventListener("DOMContentLoaded", function () {
  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);

  // Fade-in animations for sections
  gsap.utils.toArray(".fade-in").forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  // Hero text animation
  gsap.from("#hero h1", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    delay: 0.5,
  });

  gsap.from("#hero p", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    delay: 1,
  });

  gsap.from("#hero .btn", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    delay: 1.5,
  });

  // Skill icons animation
  gsap.from(".skill", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#skills",
      start: "top 80%",
    },
  });

  // Project cards animation
  gsap.from(".project-card", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#projects",
      start: "top 80%",
    },
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Check if the video can play
  const video = document.getElementById("video-background");
  const particles = document.getElementById("particles-js");

  video.play().then(() => {
    // Video is playing, hide particles
    particles.style.display = "none";
  }).catch(() => {
    // Video cannot play, show particles
    particles.style.display = "block";
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#d4af37", // Gold color for particles
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5,
          random: false,
        },
        size: {
          value: 5,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#d4af37", // Gold color for connecting lines
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
      },
    });
  });

  // Theme Toggle Functionality
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
    updateButtonIcon();
  }

 
});

particlesJS.load("particles-js", "particles.json", function () {
  console.log("Particles loaded!");
});

// ------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const certificatesContainer = document.querySelector(".certificates-slider");
  const certificates = document.querySelectorAll(".certificate");

  let certWidth = certificates[0].offsetWidth; // عرض كل شهادة
  let gap = 20; // المسافة بين الشهادات
  let visibleCerts = 4; // عدد الشهادات المعروضة في كل مرة
  let moveDistance = (certWidth + gap) * visibleCerts; // المسافة التي سيتحركها العنصر

  let animationSpeed = 5; // سرعة التحريك (كلما زاد الرقم كانت الحركة أبطأ)
  
  function startAnimation() {
      gsap.to(certificatesContainer, {
          x: -moveDistance,
          duration: animationSpeed,
          ease: "linear",
          onComplete: function () {
              gsap.set(certificatesContainer, { x: 0 }); // إعادة الشهادات للبداية
              startAnimation(); // إعادة الحركة
          }
      });
  }

  gsap.set(certificatesContainer, { x: 0 }); // تأكد من أن الشهادات تبدأ من الأول
  startAnimation();
});

// ----------------------------------------------------------------------------
document.querySelectorAll('.certificate').forEach(cert => {
  cert.addEventListener('click', () => {
    const link = cert.getAttribute('data-link');
    window.open(link, '_blank');
  });
});