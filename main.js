import {
    getRandomScores,
    getStudentJSON,
    runTitle
} from './lib.js';

import {Student} from './Student.js';

warmup1();
warmup2();
warmup3();
warmup4();
warmup5();

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
    document.getElementById(`button-2a`).addEventListener(`click`, (e) => {
        console.log(`ok`);

        const scores = getRandomScores(10);
        let html = `<ul>`;
        document.querySelector(`#content-2`).innerHTML = html;

        scores.forEach(function (score){
            console.log(scores);
            console.log(score);
            html += `<li>${score}</li>`;
        });

        html += `</ul>`;
        document.querySelector(`#content-2`).innerHTML = html;
    });

    document.getElementById(`button-2b`).addEventListener(`click`, (e) => {
        console.log(`hi`);
        const scores = getRandomScores(10);
        scores.sort(function (a, b) {
            if (a > b) {
                return 1;
            } else {
                return -1;
            }
        });
    });
    console.log("Exercise week 2");
}

function warmup3() {
    let student = getStudentJSON();
    document.getElementById(`button-3a`).addEventListener(`click`, function (){
        const student = JSON.parse(getStudentJSON());
        console.log(student);
    });
    document.getElementById(`button-3b`).addEventListener(`click`, function (){
        const studentObject = JSON.parse(student);
        console.log(studentObject);
        document.querySelector(`#content-3`).innerHTML = `<h2>${studentObject.firstname} ${studentObject.name} ${studentObject.age}</h2>`;
    });
}

function warmup4() {
    let min, max, avg;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=Brussels&APPID=d7b955c4c268fe54649d6f0d702b39d1&units=metric`
    document.getElementById(`button-4a`).addEventListener(`click`, function(){
        console.log(`Start Fetching...`);
        fetch(URL).then(function(response){
            console.log(`First part of response received.`);
            console.log(response);
            return response.json();
        }).then(function(data) {
            avg = data.main.temp;
            min = data.main.temp_min;
            max = data.main.temp_max;
        });
    });

    document.getElementById(`button-4b`).addEventListener(`click`, function(){
        function renderTemps(averageTemp, minTemp, maxTemp) {
            document.querySelector(`#content-4`).innerHTML =`
                <h2>Average: ${averageTemp}°C</h2>
                <h2>Minimum: ${minTemp}°C</h2>
                <h2>Maximum: ${maxTemp}°C</h2>
            `
        }
        renderTemps(avg, min, max);
    })
}

function warmup5() {
    document.getElementById(`button-5a`).addEventListener(`click`, function(){
        const razvan = new Student('Razvan', 19, 10);
        console.log(razvan);
    })

    document.getElementById(`button-5b`).addEventListener(`click`, function(){
        let name, score;
        const razvan = new Student('Razvan', 19, 10);
        (function(razvan) {
            name = razvan.main.name;
            score = razvan.main.score;
        });
            
        })
        function razvanProfile(name, age, score) {
            document.querySelector(`#content-5`).innerHTML =`
                <h2>Name: ${name}</h2>
                <h2>Age: ${age}</h2>
                <h2>Score: ${score}</h2>
            `
        };
        razvanProfile(name, age, score);
    }