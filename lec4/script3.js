//reduce in js
const array1=[1,2,3,4];
// const initialValue=10;

// const sunWithInitial = array1.reduce(
//     (accumulator,currentValue)=>accumulator+currentValue,initialValue,
// );

// console.log(sunWithInitial);

function sum(acc,curr)
{
    
    return acc+curr;

}

Array.prototype.reduceReplica=function(logic,initialValue)
{
    let output=initialValue;
    for(let i=0;i<this.length;i++)
    {
        output=logic(output,this[i]);

    }
    return output;


}



const myProtoData=array1.reduceReplica(sum,0);
console.log(myProtoData);