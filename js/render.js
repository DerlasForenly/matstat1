const A = "32 28 28 14 10 18 20 18 25 18 20 14 20 14 16 14 14 18 16 18 20 22 16 18 14 18 18 18 20 20 20 22 18 32 20 16 32 20 20 16 24 18 32 20 24 22 18 18 22 10 14 20 16 20 20"
const B = "2,71 -1,2 -0,99 0,88 4,27 -0,56 0,47 -0,37 1,54 4,26 1,47 -0,68 0,65 1,43 1,47 1,75 3,95 2,07 1,96 4,06 2,99 0,33 2,92 1,59 0,74 -0,1 0,96 0,54 0,99 1,54"

let result_div_t1 = document.getElementById('result_div_t1')
let result_div_t2 = document.getElementById('result_div_t2')
let result_div_t3 = document.getElementById('result_div_t3')
let result_div_t4 = document.getElementById('result_div_t4')
let result_div_t5 = document.getElementById('result_div_t5')

let a_input = document.getElementById('a')
let b_input = document.getElementById('b')
let amount_of_samples = document.getElementById('amount_of_samples')
let samples_div = document.getElementById('samples_div')
let samples = document.getElementsByClassName('sample_input')

amount_of_samples.onchange = () => {
    deleteChilds(samples_div)
    for (let i = 0; i < amount_of_samples.value; i++) {
        let div = document.createElement('div')
        div.setAttribute('class', "input_row")

        let label = document.createElement('label')
        label.textContent = `Sample ${i}:`

        let input = document.createElement('input')
        input.setAttribute('type', "text")
        input.setAttribute('class', 'sample_input')

        div.appendChild(label)
        div.appendChild(input)

        samples_div.appendChild(div)
    }
    samples = document.getElementsByClassName('sample_input')
}

function deleteChilds(element) {
    while (element.firstChild) element.removeChild(element.firstChild)
}

function start_render() {
    deleteChilds(samples_div)
    for (let i = 0; i < amount_of_samples.value; i++) {
        let div = document.createElement('div')
        div.setAttribute('class', "input_row")

        let label = document.createElement('label')
        label.textContent = `Sample:`

        let input = document.createElement('input')
        input.setAttribute('type', "text")
        input.setAttribute('class', 'sample_input')

        div.appendChild(label)
        div.appendChild(input)

        samples_div.appendChild(div)
    }
    samples = document.getElementsByClassName('sample_input')
    samples[0].value = A
    //samples[1].value = B
}

start_render()
