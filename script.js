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
      "technologies": ["#HTML", "#CSS", "#responsive"],
      "name": "Recipe Blog",
      "description": "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
      "buttons": ["Demo", "Code"]
    },
    {
      "image": "resources/recipe.jpg",
      "alt": "recipe-image",
      "technologies": ["#REACT", "#responsive"],
      "name": "Recipe Blog",
      "description": "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
      "buttons": ["Demo", "Code"]
    },
    {
      "image": "resources/recipe.jpg",
      "alt": "recipe-image",
      "technologies": ["#HTML", "#CSS", "#BOOTSTRAP", "#responsive"],
      "name": "Recipe Blog",
      "description": "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
      "buttons": ["Demo", "Code"]
    },
    {
    "image": "resources/recipe.jpg",
    "alt": "recipe-image",
    "technologies": ["#HTML", "#CSS", "#responsive"],
    "name": "Recipe Blog",
    "description": "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    "buttons": ["Demo", "Code"]
    },
    {
    "image": "resources/recipe.jpg",
    "alt": "recipe-image",
    "technologies": ["#REACT", "#responsive"],
    "name": "Recipe Blog",
    "description": "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    "buttons": ["Demo", "Code"]
    },
    {
    "image": "resources/recipe.jpg",
    "alt": "recipe-image",
    "technologies": ["#HTML", "#CSS", "#BOOTSTRAP", "#responsive"],
    "name": "Recipe Blog",
    "description": "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    "buttons": ["Demo", "Code"]
    }
  ];

//   render all projects on page first load:

const projectListElement = document.querySelector('#project-list');
projects.forEach((project) => {
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
  });
  
  
  
  
  
  
  