console.log("START SCRIPT");

// let arr=[2,4,6,8,10];

function doubleData(x)
{
    return x*x;
}

// const newAr= arr.map((x)=>x*2);
// console.log(newAr);

//prototypes in js

Array.prototype.mapReplica =function(logic)
{
    let outputArray=[];
    for(let i =0;i<this.length;i++)
    {
        outputArray.push(logic(this[i]));

    }
    return outputArray
}

let arr2 = [9,9,9,9,9,9]
const myProtoData=arr2.mapReplica(doubleData);
console.log(myProtoData);

