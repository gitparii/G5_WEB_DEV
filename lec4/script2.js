//filter

//const words=["spray","elite","hithere","destruction","present"];
//const result=words.filter((word)=>word.length>6);
//console.log(result);

const words=["spray","elite","hithere","destruction","present"];
function data(x)
{
     if(x.length>6)
        {
            return x;
        }

}

Array.prototype.filterReplica= function(logic)
{
    let outputArray=[];
    for(let i=0;i<this.length;i++)
    {
        
        if(logic(this[i])){
            outputArray.push(this[i]);
        }
        
    }
    return outputArray;

}
const myProtoData=words.filterReplica(data)
console.log(myProtoData);