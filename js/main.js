
let body = document.body;
let timer = document.querySelector(".timer");
let allMoles = document.querySelectorAll('.hole-container');
let worm = document.getElementById("worm");
let activeMoles = [];
let score = 0;
let startInterval;

const spawnBebe = () => {
    // console.log(score, worm.style.width);
    let birdState = "hungry";

    let randomHole = Math.floor(Math.random() * allMoles.length);

    if (activeMoles.includes(randomHole)) {
        return ;
    }

    activeMoles.push(randomHole);

    const moleImage = document.createElement('img');
    moleImage.src = "./assets/hungry.png"
    moleImage.classList.add("mole");
    allMoles[randomHole].appendChild(moleImage);

    moleImage.addEventListener("click", () => {
        if (birdState === "hungry") {
            moleImage.src = "./assets/fed.png";
            birdState = "fed";
            score += 5;
            worm.style.width = score + "%";
            if (score === 70) {
                console.log(score, worm.style.width);
                clearInterval(startInterval);
                alert("Game Over");
            }
        }
    })

    setTimeout(() => {
        if (birdState === "hungry") {
            moleImage.classList.remove('mole_hungry');
            moleImage.src = "./assets/sad.png";
        }
    }, 1200);

    setTimeout(() => {
        moleImage.src = "./assets/leaving.png";
    }, 1400);

    setTimeout(() => {
        activeMoles = activeMoles.filter((n) =>  n != randomHole);
        moleImage.remove();
    }, 1700);

}

const startGame = () => {
    timer.textContent = 3;
    const countDown = setInterval(()=>{
        --timer.textContent
        if (parseInt(timer.textContent) === 0 ) {
            clearInterval(countDown);
            timer.remove();
            startInterval = setInterval(spawnBebe, 1000);
        }
    }, 1000);
}

window.addEventListener("dblclick", startGame);
