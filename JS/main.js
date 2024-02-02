//Acessando Documentação do HTML
const mario = document.querySelector('.MARIO');//class mario
const pipe = document.querySelector('.pipe');//class pipe

const botao = document.querySelector('.botao');//função de jumper com click
const cloud = document.querySelector('.cloud ');//class nuvem
const cloud2 = document.querySelector('.cloud2 ');//class nuvem
const cloud3 = document.querySelector('.cloud3 ');//class nuvem
const cloud4 = document.querySelector('.cloud4 ');//class nuvem

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

        cloud.style.animation = 'none';
        cloud2.style.animation = 'none';
        cloud3.style.animation = 'none';
        cloud4.style.animation = 'none';

        mario.style.animation= 'none';
        mario.style.bottom = `${marioposition}px`; 

        mario.src = './imagens/game-over.png' ;
        mario.style.width = '75px';

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);
document.addEventListener('click', jump);