import { projects } from "./DataSource.js";
export class Requester{
    getProjects(currentPage, projectsPerPage, selectedTag){
        const startIndex = (currentPage - 1) * projectsPerPage;
        const endIndex = startIndex + projectsPerPage;
        const filteredProjects = this.getFilteredProjects(selectedTag)
        return filteredProjects.slice(startIndex, endIndex);
    }

    getFilteredProjects(selectedTag){
        const filteredProjects=[]
                projects.forEach(project => {
                    project.technologies.forEach(technology => {
                        if(technology.slice(1).toLowerCase()===selectedTag){
                            filteredProjects.push(project)
                        }
                    })
                    
                })
                return filteredProjects;
    }
}
