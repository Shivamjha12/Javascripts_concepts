
const user = {
    name:"shivam jha",
    class:"IT-C",
    rollno:2001330130151
};
console.log(user.name);

const obj = {
    className:"obj class",
    __proto__: user
}

console.log(obj.name + " - " + obj.className);

const userlist = ["shivam jha","Satyam","harendra"];

Array.prototype.get_list_dic=function(){
    dic={};
    this.forEach(element => {
        dic[element]=element;
    });
    return dic;
}
console.log(userlist.get_list_dic());