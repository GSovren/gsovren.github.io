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



