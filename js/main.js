
let allMoles = document.querySelectorAll('.hole-container');
let activeMoles = [];

const spawnBebe = () => {

    let randomHole = Math.floor(Math.random() * allMoles.length);

    if (activeMoles.includes(randomHole)) {
        return ;
    }

    activeMoles.push(randomHole);

    const moleImage = document.createElement('img');
    moleImage.src= "./assets/hungry.png"
    moleImage.classList.add("mole");
    allMoles[randomHole].appendChild(moleImage);
    
    setTimeout(() => {
        moleImage.src = "./assets/sad.png";
    }, 1200);

    setTimeout(() => {
        moleImage.src = "./assets/leaving.png";
    }, 1400);

    setTimeout(() => {
        activeMoles = activeMoles.filter((n) =>  n != randomHole);
        moleImage.remove();
    }, 1600);

}





setInterval(spawnBebe, 1000);


