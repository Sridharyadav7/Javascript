const promise = new Promise((res, rej) => {
    let err = true
    if(err){
        res("Promise is resolved")
    }
    else rej("Promise is rejected")
});

(async () => {
    try {
        const response = await promise;
        console.log(response);
    } catch (error) {
        console.error(error);
    }
})();