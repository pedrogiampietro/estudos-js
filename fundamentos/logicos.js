function buying(work1, work2) {
    const buyCream = work1 || work2
    const buyTv50 = work1 && work2
    // const buyTv32 = !!(work1 ^ work2)
    const buyTv32 = work1 != work2
    const keepHealth = !buyCream

    return { buyCream, buyTv50, buyTv32, keepHealth }

}

console.log(buying(true, true))