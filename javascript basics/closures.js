var sum = function (a,b,c,d){
 return{
    twosum:function(){
        return a+b;
    },
    threesum:function(){
        return a+b+c;
    },
    foursum:function(){
        return a+b+c+d;
    }
 }

}

var store=sum(1,2,3,4);
console.log(store.threesum()+store.foursum());