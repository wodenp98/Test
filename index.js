let ts = [1,9,12,15,45]

function averageTemperature(ts) {
    let total = 0
    if (ts == 0) {
        return 0
    }else {
    for(let i = 0; i < ts.length; i++) {
        total += ts[i]
}
}

    return total / ts.length
}


console.log(averageTemperature(ts))