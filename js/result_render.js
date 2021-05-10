function render_result_t1(result) {
    deleteChilds(result_div_t1)

    let headers = [
        "Sample",
        "Frequence",
        "Accumulated frequence",
        "Relative frequence",
        "Cumulative relative frequence"
    ]

    let table = document.createElement('table')
    table.setAttribute("cellspacing", "0")

    let tr = document.createElement('tr')
    for (let row of headers) {
        let th = document.createElement('th')
        th.textContent = row
        tr.appendChild(th)
    }
    table.appendChild(tr)

    for (let i = 0; i < result.length; i++) {
        tr = document.createElement('tr')
        for (let j = 0; j < result[i].length; j++) {
            let td = document.createElement('td')
            td.textContent = result[i][j]
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }

    result_div_t1.appendChild(table)
}

function render_result_t2(result) {
    
}

function render_result_t3(result) {
    deleteChilds(result_div_t3)

    let label = document.createElement('label')
    label.textContent = "Sample mean: " + result['sample_mean']
    result_div_t3.appendChild(label)

    label = document.createElement('label')
    label.textContent = "Mode: "
    for (let e of result['mode']) {
        label.textContent += e['value'] + " "
    }
    result_div_t3.appendChild(label)

    label = document.createElement('label')
    label.textContent = "Median: " + result['median']
    result_div_t3.appendChild(label)

    label = document.createElement('label')
    label.textContent = "Sample variance: " + result['sample_variance']
    result_div_t3.appendChild(label)

    label = document.createElement('label')
    label.textContent = "Sample standart derivation: " + result['standart_derivation']
    result_div_t3.appendChild(label)

    label = document.createElement('label')
    label.textContent = "The coefficient of variation: " + result['coefficient_of_variation']
    result_div_t3.appendChild(label)

    label = document.createElement('label')
    label.textContent = "Central moments 3, 4: " + result['central_moments']
    result_div_t3.appendChild(label)

    label = document.createElement('label')
    label.textContent = "Asymmetry: " + result['asymmetry']
    result_div_t3.appendChild(label)

    label = document.createElement('label')
    label.textContent = "Excess: " + result['excess']
    result_div_t3.appendChild(label)

    label = document.createElement('label')
    label.textContent = "Variance fixed: " + result['variance_fixed']
    result_div_t3.appendChild(label)

    label = document.createElement('label')
    label.textContent = "Corrected standard deviation: " + result['corrected_standard_deviation']
    result_div_t3.appendChild(label)
}

function render_result_t4(result) {
    
}

function render_result_t5(result) {
    
}