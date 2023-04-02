import { projects } from "./DataSource.js";
export class Requester{
   
    // applies pagination on projects that are filtered by getFilteredProjects() function:
    // getProjectsByCriteria(currentPage, projectsPerPage, selectedTag){
    //     const startIndex = (currentPage - 1) * projectsPerPage;
    //     const endIndex = startIndex + projectsPerPage;
    //     const filteredProjects = this.getFilteredProjects(selectedTag)
    //     return filteredProjects.slice(startIndex, endIndex);
    // }
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

// i actually need two functions in the requester:
// 1 - function to get all projects for page load:
// 2 - function to get filtered projects based on a filter criteria:
// and i need this function in the controller:
// 3 - function that takes an array of projects as an argument and render them for both 
//     page load and filter tags: