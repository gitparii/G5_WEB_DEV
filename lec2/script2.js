//MAIN HIGHER ORDER FUNCTION

function studentDetails(logicFunction,a)
{
    return logicFunction(a);
}

//LOGIC FUNCTIONS

function feesEMI(fees)
{
    var emi= fees/10;
    return emi;

}

function nameofstudent(name)
{
    
    return name;

}

function feesofstudent(fees)
{
    return fees;
}

function welcome(name,fees,emi)
{
    console.log("name :" + name  );
    console.log("fees :" + fees  );
    console.log("emi  :" + emi  );
    


}

var name1=studentDetails(nameofstudent,"pari");
//console.log(name1);

var fees=studentDetails(feesofstudent,30000);
//console.log(fees);

var emi=studentDetails(feesEMI,3000);
//console.log(emi);

welcome(name1,fees,emi);