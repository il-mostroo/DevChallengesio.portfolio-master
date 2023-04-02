import { Requester } from './requester.js'
import { ProjectView } from './projectView.js'
import { projects } from './DataSource.js'

export class ProjectsController 
{
    projectsPerPage = 3
    currentPage = 1
    
    constructor(container) {
        this.container=container
    }
    
    initialise() {
        this.projectView = new ProjectView()
        this.requester = new Requester()
        this.selectHtmlElements()
        this.onPageLoad()
        this.attachFilterEvents()
    }

    selectHtmlElements() {
        this.projectListElement =this.container.querySelector('#project-list')
        this.projectsItems=this.container.querySelector('#project-list').children
        this.filterButtons=this.container.querySelectorAll('.projects-filter-button')
        this.paginationContainer = this.container.querySelector("#pagination-container")

    }

    onPageLoad() {
        const totalProjects = this.requester.getAllProjects()        
        this.renderProjectsInPages(totalProjects)
        this.renderPagination(totalProjects)
        this.styleActivePaginationBtn()
    }

    cleanProjects() {
        this.projectListElement.innerHTML = ""
    }

    renderProjectsInPages(projects) {
        const totalPages = Math.ceil(projects.length / this.projectsPerPage)
        for (let i = 0 ;i < totalPages ;i++) {
          const StartIndex = i * this.projectsPerPage
          const EndIndex = StartIndex + this.projectsPerPage
          const pageProjects = projects.slice(StartIndex, EndIndex)
          const projectsPage = document.createElement("div")
          projectsPage.classList.add("page")
          projectsPage.dataset.pageNumber = i + 1
          pageProjects.forEach((pageProject) => {
            const projectElement = this.projectView.createProjectElement(pageProject)
            projectsPage.appendChild(projectElement)
          })
          if (i === 0) {
            projectsPage.style.display = "flex"
          } else {
            projectsPage.style.display = "none"
          }
          this.projectListElement.appendChild(projectsPage)
        }
        const allPages = document.querySelectorAll(".page")
        allPages.forEach((page) => {
          const pageNumber = parseInt(page.dataset.pageNumber)
        
          if (pageNumber === 1) {
            page.style.display = "flex"
          } else {
            page.style.display = "none"
          }
        })
      }
      
      renderPagination(projects) {
         // Create pagination links
         const totalPages = Math.ceil(projects.length / this.projectsPerPage)
         const paginationContainer = this.paginationContainer
         paginationContainer.classList.add("pagination")
         
         for (let i = 1 ;i <= totalPages ;i++) {
           const paginationButton = document.createElement("button")
           paginationButton.classList.add('pagination-button')
           paginationButton.innerText = i
           paginationButton.addEventListener("click", (event) => {
             const allPages = document.querySelectorAll(".page")
             allPages.forEach((page) => {
               if (page.dataset.pageNumber === event.target.innerText) {
                 page.style.display = "flex"
               } else {
                 page.style.display = "none"
               }
             })
           })
         
           paginationContainer.appendChild(paginationButton)
         }
         
         this.container.appendChild(paginationContainer)
      }

    renderProjects(projectsToRender) {
        projectsToRender.forEach(project => {
            const projectElement = this.projectView.createProjectElement(project)
            this.projectListElement.appendChild(projectElement)
        })
    }

    attachFilterEvents() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click',(event) => {
                const selectedTag=event.target.value.toLowerCase()
                console.log(selectedTag)
                const filteredProjects=[...this.requester.getFilteredProjects(selectedTag)]
                this.cleanProjects()
                this.renderProjectsInPages(filteredProjects)
                this.paginationContainer.innerHTML=""
                this.renderPagination(filteredProjects)
                this.styleActivePaginationBtn()
            })
        })
    }

    // createPaginationButtons(totalPages, arrayItems){
    //     for (let i = 1 ;i <= totalPages ;i++) {
    //         const button = document.createElement("button")
    //         button.classList.add('pagination-button')
    //         button.innerText = i
    //         button.addEventListener("click", (event) => {
    //             currentPage = i
    //             this.cleanProjects()
    //             this.renderProjectsWithPagination(arrayItems)
    //           })
    //           this.paginationContainer.appendChild(button)
    //       }
    // }

    styleActivePaginationBtn(){
        const buttons=this.container.querySelectorAll('.pagination-button')
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
}











