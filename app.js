(function() {

    const buttons = document.querySelectorAll('.menu-btn')
    const projectImages = document.querySelectorAll('.portfolio-project')

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const filter = e.target.dataset.filter


            projectImages.forEach((project) => {
                if (filter === 'all'){
                    project.style.display = 'block'
                } else{
                    if(project.classList.contains(filter)) {
                        project.style.display = 'block'
                    }
                    else{
                        project.style.display = 'none'
                    }
                }
            })
        })
    })

})();