// filter projects by tags functionality
const tags=document.querySelectorAll(".projects-filter-button")
const projects=document.querySelectorAll(".project")
const tagsContainers=document.querySelectorAll('.technologies')
tags.forEach(tag=>{
    tag.addEventListener('click',(event)=>{
        const tag=event.target.value.toLowerCase()
        if(tag==='all'){
            projects.forEach(project=>{
                project.classList.remove('hidden')
            })
        }
        else {
            projects.forEach(project=>{
                project.classList.add('hidden')
            })
            tagsContainers.forEach(tagContainer=>{
                const skills=tagContainer.children
                for (let skill of skills){
                    if(skill.textContent.slice(1).toLowerCase()===tag){
                        skill.closest(".project").classList.remove('hidden')
                    }
                }
            })
        }
    })
})