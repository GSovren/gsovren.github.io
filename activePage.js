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


