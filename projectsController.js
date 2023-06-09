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
        this.projectsTitle = this.container.querySelector('#projects-title')
    }

    onPageLoad() {
        this.manageDefaultSelectedTag()
        const selectedTag = this.getSelectedTag()
        const projectsData = this.requester.getProjectsByCriteria(this.currentPage, this.projectsPerPage, selectedTag)
        const totalProjects = projectsData.count
        const projectsToRender = projectsData.filteredProjects
        this.displayTotalProjects(totalProjects)
        this.renderProjects(projectsToRender)
        this.renderPagination(totalProjects)
        this.attachPaginationEvents()
        this.styleActivePaginationBtn()
    }

    renderProjects(projectsToRender) {
        projectsToRender.forEach(project => {
            const projectElement = this.projectView.createProjectElement(project)
            this.projectListElement.appendChild(projectElement)
        })
    }

    displayTotalProjects(count) {
        this.projectsTitle.innerText = `Projects (${count})`
    }

    cleanProjects() {
        this.projectListElement.innerHTML = ""
    }
    
    cleanPagination() {
        this.paginationContainer.innerHTML = ""
    }
    
    manageDefaultSelectedTag() {
        const allTag = this.filterButtons[0]
        allTag.classList.add('active-tag')
    }

    getSelectedTag() {
        let selectedTag
        this.filterButtons.forEach(filterButton => {
            if (filterButton.classList.contains('active-tag')) {
                selectedTag = filterButton.value.toLowerCase()
            }
        })
        return selectedTag
    }
    

    renderPagination(count) {
        const totalPages = Math.ceil(count / this.projectsPerPage)
        
        for (let i = 1 ;i <= totalPages ;i++) {
            const paginationButton = document.createElement("button")
            paginationButton.classList.add('pagination-button')
            paginationButton.innerText = i
            this.paginationContainer.appendChild(paginationButton)
        }
    }

    attachPaginationEvents() {
        const paginationButtons = this.container.querySelectorAll('.pagination-button')
        let selectedTag
        paginationButtons.forEach(button => {
            button.addEventListener("click", () => {
                console.log('button clicked')
                this.filterButtons.forEach(button => { 
                    if(button.classList.contains('active-tag')){
                        selectedTag = button.value.toLowerCase()
                    }      
                });
                const projectsToRender = this.requester.getProjectsByCriteria(Number(button.innerText), this.projectsPerPage, selectedTag).filteredProjects
                this.cleanProjects()
                this.renderProjects(projectsToRender)
            });
        })
    }

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
    
    attachFilterEvents() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click',(event) => {
                this.filterButtons.forEach(button=>{
                    if(button.classList.contains('active-tag')){
                        button.classList.remove('active-tag')
                    }
                })
                button.classList.add('active-tag')
                const selectedTag = event.target.value.toLowerCase()
                const projectsData = this.requester.getProjectsByCriteria(this.currentPage, this.projectsPerPage, selectedTag)
                const totalProjects = projectsData.count
                const projectsToRender = projectsData.filteredProjects
                this.cleanProjects()
                this.cleanPagination()
                this.displayTotalProjects(totalProjects)
                this.renderProjects(projectsToRender)
                this.renderPagination(totalProjects)
                this.attachPaginationEvents()
                this.styleActivePaginationBtn()
            })
        })
    }
    
    
}







