const animationLibrary={}
animationLibrary.animateProgressBar=function(progressBar, maxWidth=0){
    const interval = setInterval(() => {
        if (maxWidth >= 100) {
            clearInterval(interval);
        } else {
        maxWidth++;
        progressBar.style.maxWidth = `${maxWidth}%`;
        }
    }, 10);
}
export default animationLibrary;
