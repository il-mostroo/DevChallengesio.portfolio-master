import { projects } from "./DataSource.js"
export class Requester{
   
    getAllProjects(){
        return projects
    }
    getFilteredProjects(selectedTag){
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
