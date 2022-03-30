function getCount(str) {
    let vowelsCount = 0
    const vowels = ["a", "e", "i" , "o" ,"u", "y"]
    for (let char of str) {
        if(vowels.includes(char)) {
            vowelsCount++
        }
    }
    return vowelsCount
}

console.log(getCount("Number"))