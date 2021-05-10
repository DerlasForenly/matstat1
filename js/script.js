calculate_t1.onclick = () => {
    render_result_t1(calculations_for_t1())
}

calculate_t2.onclick = () => {
    deleteChilds(result_div_t2)
    let result = calculations_for_t1()
    let data = []
    let labels = []
    let data2 = []

    for (let i = 0; i < result.length; i++) {
        labels.push(result[i][0])
        data.push(result[i][1])
        data2.push(parseFloat(result[i][4]))
    }

    let canvas = document.createElement('canvas')
    canvas.setAttribute('id', 'poligon')
    result_div_t2.appendChild(canvas)

    canvas = document.createElement('canvas')
    canvas.setAttribute('id', 'gistogram')
    result_div_t2.appendChild(canvas)

    let bar = new Chart(document.getElementById('gistogram').getContext('2d'), {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'radar',
                backgroundColor: 'rgb(37, 238, 245, 0.5)',
                borderColor: 'rgb(37, 238, 245)',
                data: data
            }]
        }
    })

    let poligon = new Chart(document.getElementById('poligon').getContext('2d'), {
        type: 'radar',
        data: {
            labels,
            datasets: [{
                label: 'radar',
                backgroundColor: 'rgb(37, 238, 245, 0.5)',
                borderColor: 'rgb(37, 238, 245)',
                data: data
            }]
        }
    })

    let label = document.createElement('label')
    label.setAttribute('class', 'bold_label')
    label.textContent = "Empirical distribution function:"
    result_div_t2.appendChild(label)


    let div = document.createElement('div')
    div.setAttribute('class', 'input_row')

    label = document.createElement('label')
    label.textContent = "F*(x) = "
    let table = document.createElement('table')
    

    for (let i = 0; i < labels.length; i++) {
        let tr = document.createElement('tr')

        let td = document.createElement('td')
        td.setAttribute('class', 'td_bnone')
        td.textContent = data2[i] + ","
        tr.appendChild(td)

        if (i === 0) {
            td = document.createElement('td')
            td.setAttribute('class', 'td_bnone')
            td.textContent = `x <= ${labels[i]}`
            tr.appendChild(td)
        }
        else if (i === labels.length - 1) {
            td = document.createElement('td')
            td.setAttribute('class', 'td_bnone')
            td.textContent = `x <= ${labels[i]}`
            tr.appendChild(td)
        }
        else {
            td = document.createElement('td')
            td.setAttribute('class', 'td_bnone')
            td.textContent = `${labels[i - 1]} < x <= ${labels[i]}`
            tr.appendChild(td)
        }

        table.appendChild(tr)
    }

    div.appendChild(label)
    div.appendChild(table)
    result_div_t2.appendChild(div)

    

    label = document.createElement('label')
    label.setAttribute('class', 'bold_label')
    label.textContent = "Graph of the empirical distribution function:"
    result_div_t2.appendChild(label)

    canvas = document.createElement('canvas')
    canvas.setAttribute('id', 'empirical_distribution_function')
    result_div_t2.appendChild(canvas)

    let empirical = new Chart(document.getElementById('empirical_distribution_function').getContext('2d'), {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Empirical distribution function',
                backgroundColor: 'rgb(37, 238, 245, 0.5)',
                borderColor: 'rgb(37, 238, 245)',
                data: data2
            }]
        }
    })
    
    render_result_t2(result)
}

calculate_t3.onclick = () => {
    let data = calculations_for_t1()

    let result = {
        median: 0,
        mode: 0,
        sample_mean: 0,
        sample_variance: 0,
        standart_derivation: 0,
        coefficient_of_variation: 0,
        central_moments: 0,
        asymmetry: 0,
        excess: 0,
        variance_fixed: 0,
        corrected_standard_deviation: 0
    }
    
    render_result_t3(result)
}

calculate_t4.onclick = () => {
    let result

    
    render_result_t4(result)
}

calculate_t5.onclick = () => {
    let result

    
    render_result_t5(result)
}

clear_all.onclick = () => {
    deleteChilds(result_div_t1)
    deleteChilds(result_div_t2)
    deleteChilds(result_div_t3)
    deleteChilds(result_div_t4)
    deleteChilds(result_div_t5)

    for (let i = 0; i < samples.length; i++) {
        samples[i].value = ""
    }
}

set_default.onclick = () => {
    clear_all.onclick()
    start_render()
}
