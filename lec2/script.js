// function calculate(param1)
// {
//     console.log("calculate the bl");
//     param1();


// }

// var sumoftwo = () =>
// {
//     console.log("sum of two working");
// }

// calculate(sumoftwo);

///MAIN HIGHER ORDER FUCNTION

function calculate(logicFunction,a,b)
{
    return logicFunction(a,b);
}

//LOGICAL FUNCTIONS

function add(a,b)
{
    return a+b;
}

function sub(a,b)
{
    return a-b;
}

console.log(calculate(add,3,5));
console.log(calculate(sub,10,5));
