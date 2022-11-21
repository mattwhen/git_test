function add7(num) {
    return num + 7;
}

function multiply(a, b) {
    return a + b;
}

function capitalize(string) {

    const firstLetter = string.charAt(0).toUpperCase() + string.slice(1);
    return firstLetter;
}

console.log(capitalize("javascript").toLowerCase());

function lastLetter(word) {
    const letter = word.charAt(word.length - 1);
    return letter;
}
console.log(lastLetter("Brownies"));


//Practice using functions from MDN
const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here
function chooseName() {
    const randomSelection = names[Math.floor(Math.random() * names.length)];
    return randomSelection;
}

console.log(chooseName());