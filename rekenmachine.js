var resultaat = document.getElementById('resultaat');
var mijneerstewaarde = document.getElementById('invoer1');
var mijntweedewaarde = document.getElementById('invoer2');

function telOp() {
    resultaat.textContent = Number.parseFloat(mijneerstewaarde.value) + Number.parseFloat(mijntweedewaarde.value);
}

function minus() {
    resultaat.textContent = Number.parseFloat(mijneerstewaarde.value) - Number.parseFloat(mijntweedewaarde.value);
}

function vermenigvuldig() {
    resultaat.textContent = Number.parseFloat(mijneerstewaarde.value) * Number.parseFloat(mijntweedewaarde.value);
}

function delen() {
    resultaat.textContent = Number.parseFloat(mijneerstewaarde.value) / Number.parseFloat(mijntweedewaarde.value);
}