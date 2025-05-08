const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        console.log("async task");
        res(1);
    }, 2000)
})

promise1.then((val) => {
    console.log(`Promise consumed ${val}`);
})

