calculate_t1.onclick = () => {
    let sample = []
    let result = []
    let fre = []

    for (let i = 0; i < samples.length; i++) {
        sample = sum(sample, samples[i].value.split(' '))
    }
    for (let i = 0; i < sample.length; i++) {
        sample[i] = sample[i].replace(',', '.')
        sample[i] = parseFloat(sample[i])
    }

    console.log(sample)


    fre = count(sample)
    console.log(fre)

    
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