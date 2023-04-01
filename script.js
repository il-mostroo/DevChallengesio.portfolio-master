import { Requester } from './requester.js';
import { ProjectView } from './projectView.js';
const requester = new Requester()
const projectView = new ProjectView()

// selecting elements and creating variables:
const projectListElement = document.querySelector('#project-list');
const projectsItems=document.querySelector('#project-list').children
const filterButtons=document.querySelectorAll('.projects-filter-button')
const projectsPerPage = 3;
let currentPage = 1;

// function to render a project:


// function to empty projects container:
function cleanProjects (){
    projectListElement.innerHTML = "";
}

// function to get filtered projects by selected tag:


// function to render an array of projects using pagination:
function renderProjects(currentPage, projectsPerPage, selectedTag) {
    const projectsToRender = requester.getProjects(currentPage, projectsPerPage,selectedTag)
    projectsToRender.forEach(project => {
        const projectElement = projectView.createProjectElement(project)
        projectListElement.appendChild(projectElement)
    });
}   

// function to create pagination buttons:
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

// function to style active pagination button:
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
// function to render pagination buttons and add event listeners to them:
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
        const selectedTag=event.target.value.toLowerCase()
        const filteredProjects=[...requester.getProjects(currentPage, projectsPerPage, selectedTag)];
        cleanProjects()
        renderProjects(filteredProjects);
        renderPagination(filteredProjects)
    })
})


// default projects rendering on page load:
renderProjects(currentPage, projectsPerPage, "all")
// renderPagination(projects)

// animate progress bars using animation library:
import animationLibrary from './progressBarsAnimationLib.js';
const progressBars=document.querySelectorAll('.progress-bar')
progressBars.forEach(progressBar=>{
    animationLibrary.animateProgressBar(progressBar)
})

