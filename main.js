import {
    getRandomScores,
    getStudentJSON,
    runTitle
} from './lib.js';

warmup1();

runTitle();

function warmup1() {
    let i = 0
    document.getElementById('button-1a').addEventListener('click', (e) => {
        const nameText = document.getElementById('content-1');
        nameText.innerHTML = '<p>Tanase Razvan</p>';
        i = 0;
    });

    document.getElementById('button-1b').addEventListener('click', (e) => {
        const background1 = document.getElementById('section-1');
        background1.style.backgroundColor = '#3333cc';
    });

    document.getElementById('button-1c').addEventListener('click', (e) => {
        if(i == 0) {
            const readyText = document.createElement('h1');
            readyText.className = 'ready-1';
            readyText.id = 'r-1';
            readyText.innerHTML = '<h1>Ik ben er klaar voor.<h1>';
            document.querySelector('#content-1').appendChild(readyText);
            i++
        }
    });
    console.log("Exercise week 1");
}

function warmup2() {
    console.log("Exercise week 2");
    const scores = getRandomScores(10);
}

function warmup3() {
    let student = getStudentJSON();
}

function warmup4() {
    let main, min, max;
}

function warmup5() {

}