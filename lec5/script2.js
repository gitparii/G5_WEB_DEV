function placement(placementStep,delay)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            resolve("placement done"+placementStep)
             console.log("placement done "+placementStep)
        },delay);

    })
}
placement("got placement",3000)
.then(()=>placement("Party time",2000))
.then(()=>placement("working",4000))
.then(()=>placement("layoff",1000))
.catch((err)=>console.log(err));