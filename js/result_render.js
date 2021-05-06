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
    
}

function render_result_t4(result) {
    
}

function render_result_t5(result) {
    
}