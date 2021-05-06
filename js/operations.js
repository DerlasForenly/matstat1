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
