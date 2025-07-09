// console.log("START SCRIPT");
// async function fetchDataProducts(){
//     const data = await fetch('https://dummyjson.com/products');
//     const finalData= await data.json();
//     console.log(finalData);
// }
// fetchDataProducts();

// const myPromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("I will complete my Assignment.");
//     },3000)
// });
// async function checkAssignment(){
//     const assignmentData= await myPromise;
//     console.log(assignmentData);
// }
// checkAssignment();

// const grandParent = document.getElementById('grandParent');
// const parent = document.getElementById('parent');
// const child = document.getElementById('child');

// grandParent.addEventListener('click',()=>
// {
//     console.log("THIS IS GRANDPARENT DIV")
// },true);

// parent.addEventListener('click',()=>
// {
//     console.log("THIS IS PARENT DIV")
// },true);

// child.addEventListener('click',()=>
// {
//     console.log("THIS IS CHILD DIV")
// },true);

// function admissionProcess(studentName, studentClass){
//     console.log(`Hi ${this.StudentName}, from Class: ${this.studentClass}`)
// }

// const student1={
//     studentName:"ABC",
//     studentClass:"G5"
// }

// const student2={
//     studentName:"DEF",
//     studentClass:"G6"
// }

// const student3={
//     studentName:"GHI",
//     studentClass:"G6"
// }

//call()
// admissionProcess.call(student1);
// admissionProcess.call(student2);

function admissionProcess(studentZone, studentCampus){
    console.log(`Hi ${this.studentName}, from Class: ${this.studentClass}. Your Zone ${studentZone}, CAMPUS:${studentCampus}`)
}

const student1={
    studentName:"ABC",
    studentClass:"G5"
}

const student2={
    studentName:"DEF",
    studentClass:"G6"
}

const student3={
    studentName:"GHI",
    studentClass:"G6"
}

// admissionProcess.call(student1,"Zeta Cluster","Punjab Campus");
// admissionProcess.call(student2,"Zeta Cluster","Himachal Campus");

const b1=admissionProcess.bind(student1,"Zeta Cluster","Punjab Campus");
const b2=admissionProcess.bind(student2,"Zeta Cluster","Himachal Campus");

b1();
b2();