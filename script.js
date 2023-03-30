// filter projects by tags functionality
// const tags=document.querySelectorAll(".projects-filter-button")
// const projects=document.querySelectorAll(".project")
// const tagsContainers=document.querySelectorAll('.technologies')


// tags.forEach(tag=>{
//     tag.addEventListener('click',(event)=>{
//         const tag=event.target.value.toLowerCase()
//         if(tag==='all'){
//             projects.forEach(project=>{
//                 project.classList.remove('hidden')
//             })
//         }
//         else {
//             projects.forEach(project=>{
//                 project.classList.add('hidden')
//             })
//             tagsContainers.forEach(tagContainer=>{
//                 const skills=tagContainer.children
//                 for (let skill of skills){
//                     if(skill.textContent.slice(1).toLowerCase()===tag){
//                         skill.closest(".project").classList.remove('hidden')
//                     }
//                 }
//             })
//         }
//     })
// })


// filter projects by tags and add pagination using a json file :

// projects json file:
const projects = [
    {
      "image": "resources/recipe.jpg",
      "alt": "recipe-image",
      "technologies": ["#HTML", "#CSS", "#responsive", "#all"],
      "name": "Recipe Blog",
      "description": "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
      "buttons": ["Demo", "Code"]
    },
    {
      "image": "resources/recipe.jpg",
      "alt": "recipe-image",
      "technologies": ["#REACT", "#responsive", "#all"],
      "name": "Recipe Blog",
      "description": "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
      "buttons": ["Demo", "Code"]
    },
    {
      "image": "resources/recipe.jpg",
      "alt": "recipe-image",
      "technologies": ["#HTML", "#CSS", "#BOOTSTRAP", "#responsive", "#all"],
      "name": "Recipe Blog",
      "description": "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
      "buttons": ["Demo", "Code"]
    },
    {
    "image": "resources/recipe.jpg",
    "alt": "recipe-image",
    "technologies": ["#HTML", "#CSS", "#responsive", "#all"],
    "name": "Recipe Blog",
    "description": "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    "buttons": ["Demo", "Code"]
},
{
    "image": "resources/recipe.jpg",
    "alt": "recipe-image",
    "technologies": ["#REACT", "#responsive", "#all"],
    "name": "Recipe Blog",
    "description": "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    "buttons": ["Demo", "Code"]
},
{
    "image": "resources/recipe.jpg",
    "alt": "recipe-image",
    "technologies": ["#HTML", "#CSS", "#BOOTSTRAP", "#responsive", "#all"],
    "name": "Recipe Blog",
    "description": "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    "buttons": ["Demo", "Code"]
}
];

// selecting elements:
const projectListElement = document.querySelector('#project-list');
const projectsItems=document.querySelector('#project-list').children
const filterButtons=document.querySelectorAll('.projects-filter-button')

// project rendering function:
function renderProject (project){
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
  
    const imageElement = document.createElement('img');
    imageElement.src = project.image;
    imageElement.alt = project.alt;
    projectElement.appendChild(imageElement);

    const technologiesElement = document.createElement('div');
    technologiesElement.classList.add('technologies');
    project.technologies.forEach((technology) => {
      const technologyElement = document.createElement('p');
      technologyElement.textContent = technology;
      technologyElement.classList.add('technology');
      technologiesElement.appendChild(technologyElement);
    });
    technologiesElement.querySelector('.technology:last-child').style.display='none'
    projectElement.appendChild(technologiesElement);

  
    const nameElement = document.createElement('h1');
    nameElement.classList.add('project-name');
    nameElement.textContent = project.name;
    projectElement.appendChild(nameElement);
  
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = project.description;
    projectElement.appendChild(descriptionElement);

    const buttonsElement = document.createElement('div');
    buttonsElement.classList.add('buttons');
    project.buttons.forEach((button) => {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = button;
        buttonsElement.appendChild(buttonElement);
    });
    projectElement.appendChild(buttonsElement);

    projectListElement.appendChild(projectElement);

}

// projects cleaner function:
function cleanProjects (){
    for (let project of projectsItems){
        project.style.display='none' 
    }
}

//   rendering first three projects on first page load function:
function defaultRender(){
    for(let i=0; i<3; i++){
        renderProject(projects[i])
    }
}


//   add filter by tag functionality:
function renderProjectsByTag(){
    filterButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const selectedTag=event.target.value.toLowerCase()
            cleanProjects()
            projects.forEach(project => {
                project.technologies.forEach(technology => {
                    if(technology.slice(1).toLowerCase()===selectedTag)
                        renderProject(project)
                })
            })
        })
    })
}
    
defaultRender()
renderProjectsByTag()
  