let cell = [];
let cell_data = [];
let player_turn;

for (i = 0; i < 9; i++) {
    cell[i] = document.getElementById('c' + i);
    cell[i].addEventListener('click', function (event) {
        if (player_turn === 0) {
            this.innerHTML = 'X';
        }
        else {
            this.innerHTML = 'O';
        }
    });
}

function check() {
    if (cell_data[0] && cell_data[1] && cell_data[2] === 1) {
        document.getElementsByClassName("informations")[0].innerHTML = "Tu as gagné !"
    }

    if (player_turn === 0) {
        player_turn = 1;
    }
    else {
        player_turn = 0;
    }
}

function zero() {
    cell_data[0] = 1
    check();
}

function one() {
    cell_data[1] = 1
    check();
}

function two() {
    cell_data[2] = 1
    check();
}

function three() {
    cell_data[3] = 1
    check();
}

function four() {
    cell_data[4] = 1
    check();
}

function five() {
    cell_data[5] = 1
    check();
}

function six() {
    cell_data[6] = 1
    check();
}

function seven() {
    cell_data[7] = 1
    check();
}

function eight() {
    cell_data[8] = 1
    check();
}