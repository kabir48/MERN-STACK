for (let i = 1; i <= numberArr; i++) {

    for (let y = 1; y <= numberArr; y++) {

        if (i * y % 2 != 0) {
            continue;
        }
        console.log(`${i} x ${y} = ${i * y}`);
    }



    var multipleNumber = i * i;
    // if (i % 2 == 0) {
    //     continue
    // }
    // console.log(`The Odd Numbers Are: ${i}.${multipleNumber}`)
}