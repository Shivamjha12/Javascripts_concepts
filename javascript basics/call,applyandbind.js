let userDetails={
    name:"Shivam Jha",
    rollNo:151,
    designation:"Software Developer",
    personDetails:function(){
        console.log("The name is "+ this.name +" and the designation is "+ this.designation)
    }

}
let userDetails1={
    name:"Manny",
    rollNo:11,
    designation:"Software Developer",


}
userDetails.personDetails();
// created new object userDetails1 and pass it to personDetails function using .call(), which is diffrent object function, this becomes possible with call() function.
userDetails.personDetails.call(userDetails1);



// if function is outside ande we want to make a generic function which work for all objects

let printDetails = function(state,country){
    console.log("The user name is "+ this.name+" and lives in "+ state+" "+country+". ")
}

// call
printDetails.call(userDetails,"Delhi","India"); // In call() function we can pass object and have to pass other atributes one by one.
// apply
printDetails.apply(userDetails,["haryana","India"]) // In apply() function we can pass object and we can pass other atributes in one array.
// bind
let newFunc = printDetails.bind(userDetails,"Delhi","India"); // In bind() function it is same like call but help to save our function in memory and we can use it later
newFunc();