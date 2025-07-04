// console.log("start script");

// function walkinRES()
// {
//     setTimeout(()=>
//     {
//         console.log("i am going in restraunt");
//     },3000);
// }

// function checkMenu()
// {
//     setTimeout(()=>
//     {
//         console.log("i am checking the menu");
//     },2000)
// }

// function orderFood()
// {
//     setTimeout(()=>
//     {
//         console.log("i am ordering the food");
//     },2000)
// }

// walkinRES();
// checkMenu();
// console.log("something");
// console.log("something"); // jo phle time wala hoga wo chlega irrespective jese mrzi call kro


//callback mei jese call hoga wsc chlega  apna series mei chlta rhta hai callback ascnyc agl chlta apne according
console.log("start script");

 function walkinRES(cb)
{
     setTimeout(()=>
    {
        console.log("i am going in restraunt");
    },4000);
    setTimeout(cb,3000);
}

 function checkMenu(cb)
{
    console.log("i am checking in menu");
    setTimeout(cb,2000);
}

 function orderFood(cb)
{
    console.log("i am ordering the food");
    setTimeout(cb,5000);
}

 function havelunch(cb)
{
    console.log("i am having lunch in restraunt");
    setTimeout(cb,6000);
}

 function paybill(cb)
{
    console.log("i am paying bill in restraunt");
    setTimeout(cb,7000);
}

 function walkout()
{
    console.log("i am walking out ");
    
}

//walkinRES(checkMenu(orderFood(havelunch(paybill(walkout)))));

walkinRES(()=>{
    checkMenu(()=>{
        orderFood(()=>{
            havelunch(()=>{
                paybill(()=>{
                    walkout()
                })
            })
        })
    })
})

