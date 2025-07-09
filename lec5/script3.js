//Promise API
const myPromise1 = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        // resolve("1");
        reject("no 1");
    },1000);
});
const myPromise2 = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        // resolve("2");
        reject("no 2");
    },2000);
});
const myPromise3 = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        // resolve("3");
        reject("no 3");
    },3000);
});
const myPromise4 = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        // resolve("4");
        reject("no 4");
    },4000);
});

// Promise.all([myPromise1,myPromise2,myPromise3,myPromise4])
// .then((res)=>console.log(res))
// .catch((err)=>console.log("ERROR",err))

// Promise.allSettled([myPromise1,myPromise2,myPromise3,myPromise4])
// .then((res)=>console.log(res))
// .catch((err)=>console.log("ERROR",err))

// Promise.race([myPromise1,myPromise2,myPromise3,myPromise4])
// .then((res)=>console.log(res))
// .catch((err)=>console.log("ERROR",err))

Promise.any([myPromise1,myPromise2,myPromise3,myPromise4])
.then((res)=>console.log(res))
.catch((err)=>console.log("ERROR",err))



