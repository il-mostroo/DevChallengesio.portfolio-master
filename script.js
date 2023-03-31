// filter projects by tags and add pagination using a json file :

// projects json file:
const projects = [
    {
      "image": "resources/recipe.jpg",
      "alt": "recipe-image",
      "technologies": ["#HTML", "#CSS", "#responsive", "#all"],
      "name": "Recipe Blog1",
      "description": "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
      "buttons": ["Demo", "Code"]
    },
    {
      "image": "resources/recipe.jpg",
      "alt": "recipe-image",
      "technologies": ["#REACT", "#responsive", "#all"],
      "name": "Recipe Blog2",
      "description": "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
      "buttons": ["Demo", "Code"]
    },
    {
      "image": "resources/recipe.jpg",
      "alt": "recipe-image",
      "technologies": ["#HTML", "#CSS", "#BOOTSTRAP", "#responsive", "#all"],
      "name": "Recipe Blog3",
      "description": "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
      "buttons": ["Demo", "Code"]
    },
    {
    "image": "resources/recipe.jpg",
    "alt": "recipe-image",
    "technologies": ["#HTML", "#CSS", "#responsive", "#all"],
    "name": "Recipe Blog4",
    "description": "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    "buttons": ["Demo", "Code"]
},
{
    "image": "resources/recipe.jpg",
    "alt": "recipe-image",
    "technologies": ["#REACT", "#responsive", "#all"],
    "name": "Recipe Blog5",
    "description": "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    "buttons": ["Demo", "Code"]
},
{
    "image": "resources/recipe.jpg",
    "alt": "recipe-image",
    "technologies": ["#HTML", "#CSS", "#BOOTSTRAP", "#responsive", "#all"],
    "name": "Recipe Blog6",
    "description": "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    "buttons": ["Demo", "Code"]
}
];

// selecting elements:
const projectListElement = document.querySelector('#project-list');
const projectsItems=document.querySelector('#project-list').children
const filterButtons=document.querySelectorAll('.projects-filter-button')
const projectsPerPage = 3;
let currentPage = 1;

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
    projectListElement.innerHTML = "";
}

// get filtered projects by selected tag function:
function getFilteredProjects(event){
    const filteredProjects=[]
            const selectedTag=event.target.value.toLowerCase()
            projects.forEach(project => {
                project.technologies.forEach(technology => {
                    if(technology.slice(1).toLowerCase()===selectedTag){
                        filteredProjects.push(project)
                    }
                })
                
            })
            return filteredProjects;
}

// render projects using pagination function :
function renderProjects(projectsArray) {
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const projectsToRender = projectsArray.slice(startIndex, endIndex);
    projectsToRender.forEach(project => {
        renderProject(project);
    });
}   

// create pagination buttons:
function createPaginationButtons(containerElement, totalPages, arrayItems){
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.classList.add('pagination-button');
        button.innerText = i;
        button.addEventListener("click", (event) => {
            currentPage = i;
            cleanProjects()
            renderProjects(arrayItems);
          });
          containerElement.appendChild(button);
      }
}

// style active pagination button:
function styleActivePaginationBtn(){
    const buttons=document.querySelectorAll('.pagination-button')
        buttons.forEach(button => {
            button.addEventListener('click',(event)=>{
                buttons.forEach(button=>{
                    if(button.classList.contains('active-pagination-button')){
                        button.classList.remove('active-pagination-button')
                    }
                })
                event.target.classList.add('active-pagination-button')
            })
        })
}
// render pagination and add projects rendering event listeners to buttons function:
function renderPagination(projectsArray){
    const totalPages = Math.ceil(projectsArray.length / projectsPerPage);
    const paginationContainer = document.getElementById("pagination-container");
    paginationContainer.innerHTML = "";
    createPaginationButtons(paginationContainer, totalPages, projectsArray)
    styleActivePaginationBtn()    
}
// add event listeners on filter buttons, get filtered projects and render them:
filterButtons.forEach(button => {
    button.addEventListener('click',(event) => {
        const filteredProjects=[...getFilteredProjects(event)];
        cleanProjects()
        renderProjects(filteredProjects);
        renderPagination(filteredProjects)
    })
})


// default projects rendering on page load:
renderProjects(projects)
renderPagination(projects)