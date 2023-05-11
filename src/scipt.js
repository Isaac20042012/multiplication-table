const input = document.querySelector('input')
const ul = document.querySelector('ul')

function generateMultiplicationTables() {

    let one = 1
    let two = 2
    let tree = 3
    let four = 4
    let five = 5
    let six = 6
    let seven = 7
    let eight = 8
    let nine = 9
    let ten = 10

    if (input.value <= 0 || input.value > 99) {
        ul.innerHTML = `<li>Por favor coloque um número entre 1 e 99.</li>`
    }

    else if (input.value >= 1 || input.value <= 12) {
        ul.innerHTML = `
            <li>${input.value} x ${one} = ${input.value * one}</li>
            <li>${input.value} x ${two} = ${input.value * two}</li>
            <li>${input.value} x ${tree} = ${input.value * tree}</li>
            <li>${input.value} x ${four} = ${input.value * four}</li>
            <li>${input.value} x ${five} = ${input.value * five}</li>
            <li>${input.value} x ${six} = ${input.value * six}</li>
            <li>${input.value} x ${seven} = ${input.value * seven}</li>
            <li>${input.value} x ${eight} = ${input.value * eight}</li>
            <li>${input.value} x ${nine} = ${input.value * nine}</li>
            <li>${input.value} x ${ten} = ${input.value * ten}</li>
        `
    }
}