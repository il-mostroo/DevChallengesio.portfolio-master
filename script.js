import { ProjectsController } from './projectsController.js';

const projectsContainer=document.querySelector('#projects-container')

const projectsController=new ProjectsController (projectsContainer)
projectsController.initialise()

// animate progress bars using animation library:
import animationLibrary from './progressBarsAnimationLib.js';
const progressBars=document.querySelectorAll('.progress-bar')
progressBars.forEach(progressBar=>{
    animationLibrary.animateProgressBar(progressBar)
})

