const companies= [
    {name:"Google",Category:"Product Based", founded:1984},
    {name:"TCS",Category:"Service Based", founded:1998},
    {name:"Amazon",Category:"Product Based", founded:2003},
    {name:"Accenture",Category:"Service Based", founded:2004},
    {name:"IBM",Category:"Product Based", founded:1977},
    {name:"Microsoft",Category:"Product Based", founded:1995}
];

const ages = [23,45,24,21,64,74,73,45,7,35,34,53,25,52,4,23,52,69,35,95,88];

// standard loop

/*
for(let i=0;i<companies.length;i++){
    console.log(companies[i].name);
    console.log(companies[i].Category);
    console.log(companies[i].founded);
    console.log("-----------------");
} */

// forEach

/*
companies.forEach(function(company){
    console.log(company.name);
})

companies.forEach((company)=>{
    console.log(company.name);
})
*/

// Filter
/*
const age=ages.filter((age)=>{
    if(age>=18){
        return true;
    }
})


*/

// or we can implent like this

const age = ages.filter(age=>age>=18)

// or 
const company = companies.filter(company=> company.Category==="Product Based")

// console.log(company);

// map 
const dummy = companies.map((company,index)=>{
    return `${company.name} - ${company.Category}`
})
// console.log(dummy);

// sort function

const sortedData = companies.sort((c1,c2)=>{
    if(c1.founded > c2.founded){
        return 1;
    }
    else{
        return -1;
    }
})

const sortedData1 = companies.sort((c1,c2)=> c1.founded > c2.founded?1:-1 ); 
/*
console.log(sortedData);
console.log(sortedData1);
*/

// reduce function
var total = 0;
const sumage = ages.reduce((total,age)=> total+age,0);
console.log(sumage);