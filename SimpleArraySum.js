function simpleArraySum(ar) {
    const sum = ar.reduce((acc, curr) => acc + curr, 0);
    return sum;
}