calculate_t1.onclick = () => {
    let sample = []
    let result = []
    let fre = []
    let rel = []
    let s = 0

    for (let i = 0; i < samples.length; i++) {
        sample = sum(sample, samples[i].value.split(' '))
    }
    for (let i = 0; i < sample.length; i++) {
        sample[i] = sample[i].replace(',', '.')
        sample[i] = parseFloat(sample[i])
    }

    fre = count(sample)
    s = sample.length
    sample = deleteDoubles(sample)
    sample.sort((a ,b) => a - b)

    for (let i = 0; i < sample.length; i++) {
        rel.push((Math.round(fre[sample[i]] / s * 100 * 10000) / 10000))
        result.push([])
        result[i].push(sample[i])
        result[i].push(fre[sample[i]])
        let accf = 0
        for (let j = i; j >= 0; j--) {
            accf += fre[sample[j]]
        }
        result[i].push(accf)
        result[i].push(rel[i] + "%")
        let arf = 0
        for (let j = i; j >= 0; j--) {
            arf += rel[j]
        }
        result[i].push(Math.round(arf * 100) / 100)
    }
    
    render_result_t1(result)
}

calculate_t2.onclick = () => {
    let result

    
    render_result_t2(result)
}

calculate_t3.onclick = () => {
    let result

    
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
