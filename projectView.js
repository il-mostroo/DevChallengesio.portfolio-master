export class ProjectView {
     createProjectElement (project){
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
    
        return projectElement;
    
    }
}