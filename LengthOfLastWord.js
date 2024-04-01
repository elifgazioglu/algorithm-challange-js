var lengthOfLastWord = function (s) {
    const text = s.trim().split(" ")
    return text[text.length - 1].length
};