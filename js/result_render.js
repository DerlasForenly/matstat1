function render_result_t1(result) {
    clear_all.onclick()

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
    //clear_all.onclick()
}

function render_result_t3(result) {
    clear_all.onclick()

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
    label.textContent = "Central moment 3: " + result['central_moments'][0]
    result_div_t3.appendChild(label)

    label = document.createElement('label')
    label.textContent = "Central moment 4: " + result['central_moments'][1]
    result_div_t3.appendChild(label)

    label = document.createElement('label')
    label.textContent = "Asymmetry: " + result['asymmetry']
    if (result['asymmetry'] <= 0.5 && result['asymmetry'] >= -0.5) {
        
    }
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
    clear_all.onclick()

    let label = document.createElement('h3')
    label.textContent = "By the method of moments: "
    result_div_t4.appendChild(label)

    label = document.createElement('label')
    label.textContent = "Expected value: " + result['M1']
    result_div_t4.appendChild(label)

    label = document.createElement('label')
    label.textContent = "Variance: " + result['D1']
    result_div_t4.appendChild(label)

    label = document.createElement('label')
    label.textContent = "Standart derivation: " + result['sig1']
    result_div_t4.appendChild(label)

    label = document.createElement('h3')
    label.textContent = "By the method of largest similarity: "
    result_div_t4.appendChild(label)

    label = document.createElement('label')
    label.textContent = "Expected value: " + result['M2']
    result_div_t4.appendChild(label)

    label = document.createElement('label')
    label.textContent = "Variance: " + result['D2']
    result_div_t4.appendChild(label)

    label = document.createElement('label')
    label.textContent = "Standart derivation: " + result['sig2']
    result_div_t4.appendChild(label)
}

function render_result_t5(result) {
    clear_all.onclick()

    let label = document.createElement('label')
    label.textContent = "Expected value: " + result['m']
    result_div_t5.appendChild(label)

    label = document.createElement('label')
    label.textContent = "Variance: " + result['d']
    result_div_t5.appendChild(label)

    label = document.createElement('label')
    label.textContent = "s " + result['s']
    result_div_t5.appendChild(label)

    label = document.createElement('label')
    label.textContent = "s2: " + result['s2']
    result_div_t5.appendChild(label)

    label = document.createElement('label')
    label.textContent = "t: " + result['t']
    result_div_t5.appendChild(label)
}