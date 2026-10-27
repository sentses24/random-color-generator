const container= document.querySelector('.container');
for (let index = 0; index < 30; index++) {
    const colorContainerEl= document.createElement('div')
    colorContainerEl.classList.add('color-container');
    container.appendChild(colorContainerEl)
    
}
const colorContainerEls = document.querySelectorAll('.color-container');

function generateColors(){
   
    colorContainerEls.forEach((colorContainerEl)=>{
         let newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = '#' + newColorCode;
        colorContainerEl.innerHTML= "#" + newColorCode;
    })
    
}
generateColors()
function randomColor(){
    let chars= '0123456789abcdef';
    let colorNumLength= 6;
    let colorCode = '';
    for (let index = 0; index < colorNumLength; index++) {
        
        const randomNum= Math.floor(Math.random() * chars.length)
        colorCode += chars[randomNum];
    }
    return colorCode;
}

