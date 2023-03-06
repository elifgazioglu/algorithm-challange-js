function staircase(n) {
    for(let i=1; i<=n; i++){
        const space = " ".repeat(n-i);
        const sharp = "#".repeat(i);
        console.log(space + sharp);
    }
    }