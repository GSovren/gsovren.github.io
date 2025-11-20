let navLink = document.querySelectorAll('ul a');
let section = document.querySelectorAll('section');

window.onscroll=()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset =sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top > offset && top < offset + height){
            navLink.forEach(links => {
                links.classList.remove('active')
                document.querySelector('ul a[href*='+id+']').classList.add('active')
            })
        }
    })
}

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const cvLinks = document.querySelectorAll('.cv-link a');

    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
        navLinks.forEach(link => link.classList.add('scrolled'));
        cvLinks.forEach(link => link.classList.add('scrolled'));
    } else {
        navbar.classList.remove('scrolled');
        navLinks.forEach(link => link.classList.remove('scrolled'));
        cvLinks.forEach(link => link.classList.remove('scrolled'));
    }
});


document.querySelectorAll('.scroll-left, .scroll-right').forEach(button => {
  button.addEventListener('click', () => {
    const targetSelector = button.getAttribute('data-target');
    const container = document.querySelector(targetSelector);
    const scrollAmount = 300; // adjust as needed

    if (button.classList.contains('scroll-left')) {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const graphicsCard = document.getElementById("graphics-card");
  const uiuxCard = document.getElementById("ui-ux-card");
  const uiMobileCard = document.getElementById("ui-mobile-card");

  const graphicContainer = document.getElementById("my-graphic-designs");
  const uiContainers = document.querySelectorAll(".my-ui-designs");
  const allContainers = document.querySelectorAll(".scroll-buttons, .my-ui-designs, .my-mobile-designs");

  function hideAllContainers() {
    allContainers.forEach(c => c.classList.remove('show'));
  }

  // Toggle Graphic Designs
  if (graphicsCard && graphicContainer) {
    graphicsCard.addEventListener("click", () => {
      const style = window.getComputedStyle(graphicContainer);
      const isVisible = style.maxHeight && style.maxHeight !== "0px";

      if (isVisible) {
        graphicContainer.classList.remove('show');
      } else {
        hideAllContainers();
        graphicContainer.classList.add('show');
      }
    });
  }

  // Toggle UI/UX Designs
  if (uiuxCard) {
    uiuxCard.addEventListener("click", () => {
      const anyVisible = Array.from(uiContainers).some(c => {
        const style = window.getComputedStyle(c);
        return style.maxHeight && style.maxHeight !== "0px";
      });

      if (anyVisible) {
        hideAllContainers();
      } else {
        hideAllContainers();
        uiContainers.forEach(c => c.classList.add('show'));
      }
    });
  }

  // Toggle Mobile UI Designs
  if (uiMobileCard) {
    const mobileDesignsContainer = document.querySelector(".scroll-buttons.my-mobile-designs");
    if (mobileDesignsContainer) {
      uiMobileCard.addEventListener("click", () => {
        const style = window.getComputedStyle(mobileDesignsContainer);
        const isVisible = style.maxHeight && style.maxHeight !== "0px";

        if (isVisible) {
          // If visible, hide it
          mobileDesignsContainer.classList.remove('show');
        } else {
          // If not visible, close others and show this
          hideAllContainers();
          mobileDesignsContainer.classList.add('show');
        }
      });
    }
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const overlay = card.querySelector('.img-overlay');

    card.addEventListener('click', () => {
      const isActive = overlay.classList.contains('active');

      // Remove active from all overlays
      document.querySelectorAll('.img-overlay').forEach(o => o.classList.remove('active'));

      // Toggle current overlay if it was not active
      if (!isActive) {
        overlay.classList.add('active');
      }
    });
  });
});