// let regex = /^[a-zA-Z]+$/;
let u = [];
let v = [];
let r;
let round = 0;
let reu = 0;
document.getElementById('score').innerHTML = `Your Final  Match Score  is = ${reu}`



document.querySelector('button').addEventListener('click', () => {


    document.getElementById('roundcount').innerText = `Total Round You Played = ${round + 1}`;

    // also we can use regex
    // if (regex.test(input1)) {
    //     // console.log("Match found");
    // } else {
    //     alert("Please Enter a Charcater Only Value S/W/G");
    // }


    let random = Math.floor(Math.random() * 100) + 1;
    let input1 = document.getElementById('datas').value;
    input1 = input1.toUpperCase();
    r = document.getElementById('datas').value;
    v.push(r);
    u.push(random);
    round += 1;


    //check value correct part S/W/G

    if (input1 === 'G' || input1 === 'S' || input1 === 'W') {

    }
    else {
        alert('Enter a Only S/W/G  Character');
        round -= 1;

        // document.getElementById('demo').style.display = 'none'


    }
    //check value correct part S/W/G End ....

    // random number convert to according to set S/W/G

    //.....................................................................

    if (random >= 41 && random <= 50 || random >= 51 && random <= 60 || random >= 81 && random <= 90 || random >= 1 && random <= 3) {
        //i will take this is snake 
        if (input1 === 'G') {
            document.getElementById('demo').innerHTML = `!! Won You Are selected a Gun And Gun Kill Snake....`
            document.getElementById('demo').style.color = 'Green'
            reu += 1

        }
        else if (input1 === 'W') {
            document.getElementById('demo').innerHTML = `!! Lose You Are selected a Water And Snake Drink Water....`
            document.getElementById('demo').style.color = 'red'
        }
        else if (input1 === "S") {
            document.getElementById('demo').innerHTML = `!! Ohh Match Is Draw you Both Select Snake....`
            document.getElementById('demo').style.color = 'Black'


        }
    }

    //.....................................................................

    else if (random >= 21 && random <= 30 || random >= 61 && random <= 70 || random >= 91 && random <= 100 || random >= 4 && random <= 6) {

        //i will take this is Water 
        if (input1 === 'S') {
            document.getElementById('demo').innerHTML = `!! Won You Are selected a Snake And Snake Drink Water....`
            document.getElementById('demo').style.color = 'Green'
            reu += 1


        }
        else if (input1 === 'G') {
            document.getElementById('demo').innerHTML = `!! Lose You Are selected a Gun And Water Taking  a Gun....`
            document.getElementById('demo').style.color = 'red'
        }
        else if (input1 === "W") {
            document.getElementById('demo').innerHTML = `!! Ohh Match Is Draw you Both Select Water....`
            document.getElementById('demo').style.color = 'Black'

        }

    }


    //.....................................................................


    else if (random >= 31 && random <= 40 || random >= 71 && random <= 80 || random >= 11 && random <= 20 || random >= 7 && random <= 10) {
        //i will take this is GUN
        if (input1 === 'W') {
            document.getElementById('demo').innerHTML = `!! Won You Are selected a Water And Water take a Gun....`
            document.getElementById('demo').style.color = 'Green'

            reu += 1

        }
        else if (input1 === 'S') {
            document.getElementById('demo').innerHTML = `!!  Lose You Are selected a Snake And Gun Killing  a Snake....`
            document.getElementById('demo').style.color = 'red'

        }
        else if (input1 === "G") {
            document.getElementById('demo').innerHTML = `!! Ohh Match Is Draw you Both Select Gun....`
            document.getElementById('demo').style.color = 'Black'

        }
    }

    //.....................................................................
    // OVER random number convert to according to set S/W/G

    document.getElementById('score').innerHTML = `Your Final  Match Score  is = ${reu}`


    if (round > 10) {
        alert('Ten Round Finish  , Start a New Game')
    }



    if (round == 10) {


        if (reu > 5) {
            document.getElementById('scorecard').innerHTML = `Your Won A  Final  Series Of  Score  Hold = ${reu}`
            document.getElementById('scorecard').style.color = 'green'


        }
        else if (reu == 5) {
            document.getElementById('scorecard').innerHTML = `Your Final Match Has Drawn Score Both Candidate Same (Score is both Have =  ${reu} ) `
            document.getElementById('scorecard').style.color = 'Hotpink'

        }

        else if (reu < 5) {
            document.getElementById('scorecard').innerHTML = `Your Lose A Final  Series , You Score Hold = ${reu}`
            document.getElementById('scorecard').style.color = 'Red'

        }
    }

    if (round < 0) {
        document.getElementById('roundcount').innerText = `Total Round You Played = 0`;


    }


});

//input space clear

document.getElementById('datas').addEventListener('click', () => {
    document.getElementById('datas').value = '';

});


//start a new game code
document.getElementById('reset').addEventListener('click', () => {

    window.location.reload();

})

