function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const appleNumbers = apples.filter(apple=> (apple+=a) && apple>=s && apple<=t)
    const orangeNumbers = oranges.filter(orange=> (orange+=b) && orange>=s && orange<=t)
    
    console.log(appleNumbers.length)
    console.log(orangeNumbers.length)
}