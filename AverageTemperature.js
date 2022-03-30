let ts = [1,9,12,15]

function averageTemperature(ts) {
    let total = 0
    let count = 0
    if (ts == 0) {
        return 0
    }else {
    ts.forEach(function(item, index) {
        total += item;
        count++
    });
}

    return total / count
}


console.log(averageTemperature(ts))