calculate_t1.onclick = () => {
    render_result_t1(calculations_for_t1())
}

calculate_t2.onclick = () => {
    clear_all.onclick()
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
        type: 'line',
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

    let mode = []
    let most = {
        value: data[0][0],
        popularity: data[0][1]
    }
    for (let i = 0 ; i < data.length; i++) {
        if (data[i][1] > most['popularity']) {
            most['value'] = data[i][0]
            most['popularity'] = data[i][1]
        }
    }
    mode.push(most)
    for (let i = 0 ; i < data.length; i++)
        if (data[i][1] == most['popularity'] && 
        most['value'] != data[i][0]) {
            mode.push({value: data[i][0], popularity: data[i][1]})
        }

    let sample = []
    for (let i = 0; i < samples.length; i++) {
        if (samples[i].value == "") continue 
        sample = sum(sample, samples[i].value.split(' '))
    }
    for (let i = 0; i < sample.length; i++) {
        sample[i] = sample[i].replace(',', '.')
        sample[i] = parseFloat(sample[i])
    }
    sample.sort((a, b) => a - b)

    let median
    if (sample.length % 2 === 1)
        median = sample[sample.length / 2 - 0.5]
    else if (sample.length % 2 === 0)
        median = (sample[sample.length / 2 - 1] + sample[sample.length / 2]) / 2.0
    
    let sample_mean = 0
    for (let e of sample) {
        sample_mean += e
    }
    sample_mean /= sample.length

    let D = 0
    for (let e of sample) {
        D += (e - sample_mean) ** 2
    }
    D /= sample.length - 1
    
    let cen3 = 0
    for (let e of sample) {
        cen3 += (e - sample_mean) ** 3
    }
    cen3 /= sample.length - 1

    let cen4 = 0
    for (let e of sample) {
        cen4 += (e - sample_mean) ** 4
    }
    cen4 /= sample.length - 1

    let asy = 0
    for (let e of mode) {
        asy += e['value']
    }
    asy /= mode.length
    asy = (sample_mean - asy) / Math.sqrt(D)

    let variance_fixed = 0
    for (let i = 0; i < sample.length; i++) { 
        variance_fixed += (sample[i] - sample_mean) ** 2
    }
    variance_fixed /= sample.length - 1

    let result = {
        median: 0,
        mode: 0,
        sample_mean: 0,
        sample_variance: 0,
        standart_derivation: 0,
        coefficient_of_variation: 0,
        central_moments: [0, 0],
        asymmetry: 0,
        excess: 0,
        variance_fixed: 0,
        corrected_standard_deviation: 0
    }
    result['mode'] = mode
    result['median'] = median
    result['sample_mean'] = sample_mean.toFixed(5)
    result['sample_variance'] = D.toFixed(5)
    result['standart_derivation'] = Math.sqrt(D).toFixed(5)
    result['coefficient_of_variation'] = (Math.sqrt(D) / sample_mean).toFixed(5)
    result['central_moments'][0] = cen3
    result['central_moments'][1] = cen4
    result['asymmetry'] = asy
    result['excess'] = (cen4 / (D * D)) - 3
    result['variance_fixed'] = variance_fixed
    result['corrected_standard_deviation'] = Math.sqrt(variance_fixed)
    
    render_result_t3(result)
}

calculate_t4.onclick = () => {
    let data = calculations_for_t1()

    let sample = []
    for (let i = 0; i < samples.length; i++) {
        if (samples[i].value == "") continue 
        sample = sum(sample, samples[i].value.split(' '))
    }
    for (let i = 0; i < sample.length; i++) {
        sample[i] = sample[i].replace(',', '.')
        sample[i] = parseFloat(sample[i])
    }
    sample.sort((a, b) => a - b)

    let m1 = 0
    for (let i = 0; i < data.length; i++) {
        m1 += data[i][0] * data[i][1]
    }
    m1 /= sample.length

    let d1 = 0
    for (let i = 0; i < data.length; i++) {
        d1 += data[i][0] * data[i][0] * data[i][1]
    }
    d1 /= sample.length
    d1 -= m1 ** 2


    let result = {
        M1: m1.toFixed(3),
        D1: d1.toFixed(3),
        sig1: Math.sqrt(d1).toFixed(3),
        M2: m1.toFixed(5),
        D2: d1.toFixed(5),
        sig2: Math.sqrt(d1).toFixed(5)
    }

    
    render_result_t4(result)
}

calculate_t5.onclick = () => {
    function normalcdf(mean, sigma, to) {
        var z = (to-mean)/Math.sqrt(2*sigma*sigma);
        var t = 1/(1+0.3275911*Math.abs(z));
        var a1 =  0.254829592;
        var a2 = -0.284496736;
        var a3 =  1.421413741;
        var a4 = -1.453152027;
        var a5 =  1.061405429;
        var erf = 1-(((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*Math.exp(-z*z);
        var sign = 1;
        if(z < 0)
        {
            sign = -1;
        }
        return (1/2)*(1+sign*erf);
    }

    let data = calculations_for_t1()

    let n = 0

    let m = 0
    for (let i = 0; i < data.length; i++) {
        m += data[i][0] * data[i][1]
        n += data[i][1]
    }
    m /= n

    let d = 0
    for (let i = 0; i < data.length; i++) {
        d += ((data[i][0] - m) ** 2) * data[i][1]
    }
    d /= n

    let s2 = n / (n - 1) * d
    let s = Math.sqrt(s2)

    // let t = []
    // for (let i = 0; i < data.length; i++) {
    //     t.push(normalcdf(data[i][0], m, d))
    // }

    let t = (m - 0.05) / (Math.sqrt(d) / Math.sqrt(n))
    

    let result = {
        m: m.toFixed(5),
        d: d.toFixed(5),
        s2: s2.toFixed(5),
        s: s.toFixed(5),
        t: t
    }

    

    render_result_t5(result)
}

clear_all.onclick = () => {
    deleteChilds(result_div_t1)
    deleteChilds(result_div_t2)
    deleteChilds(result_div_t3)
    deleteChilds(result_div_t4)
    deleteChilds(result_div_t5)

    for (let i = 0; i < samples.length; i++) {
        //samples[i].value = ""
    }
}

set_default.onclick = () => {
    clear_all.onclick()
    start_render()
}
