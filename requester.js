import { projects } from "./DataSource.js"
export class Requester{
   
    getProjectsByCriteria(currentPage, projectsPerPage, selectedTag) {
        const filteredProjects=this.getFilteredProjects(selectedTag)
        const count=filteredProjects.length
        const StartIndex = (currentPage - 1) * projectsPerPage
        const EndIndex = StartIndex + projectsPerPage
        const pageProjects = filteredProjects.slice(StartIndex, EndIndex)
        
        return {filteredProjects: pageProjects, count}
    }
    getFilteredProjects(selectedTag) {
        const filteredProjects=[]
                projects.forEach(project => {
                    project.technologies.forEach(technology => {
                        // remove first uneeded character "#" from tag:
                        if(technology.slice(1).toLowerCase()===selectedTag){
                            filteredProjects.push(project)
                        }
                    })
                    
                })
                return filteredProjects;
    }
}


// get projectsByCriteria that returns an object that contains total projects and list of projects.