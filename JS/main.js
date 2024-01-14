
const mario = document.querySelector('.MARIO');
const pipe = document.querySelector('.pipe');

const botao = document.querySelector('.botao');

const jump = ()=>{
    mario.classList.add('jump', 'botao');
    setTimeout(()=>{

        mario.classList.remove('jump', 'botao');

    }, 550);
}

const loop = setInterval(() => {
    const pipeposition = pipe.offsetLeft;
    const marioposition = +window.getComputedStyle(mario).bottom.replace('px', ' ');
    
    //console.log(pipeposition);
    console.log(marioposition);

    if(pipeposition<=138 && pipeposition > 0 && marioposition < 80){
        pipe.style.animation= 'none';
        pipe.style.left = `${pipeposition}px`; 

        mario.style.animation= 'none';
        mario.style.bottom = `${marioposition}px`; 

        mario.src = './imagens/game-over.png' ;
        mario.style.width = '75px';

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);
document.addEventListener('click', jump);