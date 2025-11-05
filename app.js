(function() {

    const buttons = document.querySelectorAll('.menu-btn')
    const projectImages = document.querySelectorAll('.portfolio-project')
    const chatbotToggler = document.querySelector(".chatbot-toggler")
    const chatbotCloseBtn = document.querySelector(".chatbot-close")

    chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
    chatbotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));

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