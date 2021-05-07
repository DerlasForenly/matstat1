function entry(a, b) {
    for (let e of a) if (!b.includes(e)) return false
    return true
}

function sum(a, b) {
    let r = [...a]
    for (let e of b) r.push(e)
    return r
}

function sum_without_dubles(a, b) {
    let r = [...a]
    for (let e of b) r.push(e)
    return r.filter((value, index, arr) => arr.indexOf(value) === index)
}

function intersection(a, b) {
    let r = [] 
    for (let e of a) if (b.includes(e)) r.push(e)
    return r.filter((value, index, arr) => arr.indexOf(value) === index)
}

function difference(a, b) {
    let r = []
    for (let e of a) if (!b.includes(e)) r.push(e)
    return r.filter((value, index, arr) => arr.indexOf(value) === index)
}

function symmetric_difference(a, b) {
    let r = []
    for (let e of a) if (!b.includes(e)) r.push(e)
    for (let e of b) if (!a.includes(e)) r.push(e)
    return r.filter((value, index, arr) => arr.indexOf(value) === index)
}

function count(array) {
    return array.reduce(function (stack, value) {
      return stack[value] ? stack[value]++ : stack[value] = 1, stack;
    }, {});
}

function deleteDoubles(array) {
    return array.filter((value, index, arr) => arr.indexOf(value) === index)
}


function calculations_for_t1() {
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
        rel.push(fre[sample[i]] / s)
        result.push([])
        result[i].push(sample[i])
        result[i].push(fre[sample[i]])
        let accf = 0
        for (let j = i; j >= 0; j--) {
            accf += fre[sample[j]]
        }
        result[i].push(accf)
        result[i].push(rel[i].toFixed(5))
        let arf = 0
        for (let j = i; j >= 0; j--) {
            arf += rel[j]
        }
        result[i].push(arf.toFixed(5))
    }
    
    return result
}
