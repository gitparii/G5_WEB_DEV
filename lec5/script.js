console.log("START SCRIPT");
//placement



//console.log(myPromise);


// const myPromise = new Promise((resolve,reject)=>
// {
//     if(resolve)
//     {
//          setTimeout(()=>
//             {
//         //resolve("Placement done");
//         console.log("Placement  done");
//     },3000);

//     }
//     else if(reject)
//     {
//         setTimeout(()=>
//         {
//              console.log("placement not done");

//         },3000);
       
//     }
   

// });

const myPromise = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve("Placement done");
        //reject("Placement not done");
    },3000);

});

myPromise
.then((res)=>console.log((res)))

.then(()=>setTimeout(()=>{
    console.log("Party done");
},2000))

.then(()=>setTimeout(()=>{
    console.log("joining");
},3000))

.then(()=>setTimeout(()=>{
    console.log("wokring");
},4000))

.then(()=>setTimeout(()=>{
    console.log("layoff");
},1000))
.catch((err)=>console.log((err)))
//console.log(myPromise);

//.then synchronously call hota hai 

