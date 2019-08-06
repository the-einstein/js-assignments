//1.Chunk function
const chunk = (arr, num) =>{
if (arr.length%num ==0){
    let arr1 = [];
    arr1.length = arr/num;
    for(var i = 0; i<arr.length/num; i++){
     for(var j = 0; j<arr1.length; j++){
         arr1[i][j] = arr[i];
     }
    }
    return arr1;
}
}
//2. Compact function
const compact = (arr) => {
    const a =[];
for (var i=0; i<arr.length; i++){
    if(arr[i]!=false){
       a[i]=arr[i];
    }
}
}
//3. Drop function
const drop = (arr, num)=>{
    if (num!=undefined){
        for(var i = 0; i<num; i++){
            arr[i]="";
        }
        return arr;
    }
    else{
        arr[0]='';
        return arr;
    }
}
//4. DropWhile function
const dropWhile = (array, predicate) => {
return (array && array.length)
? baseWhile(array, getIterstee(predicate, 3), true)
: [];
}
//5. Take function
const take = (arr, n)=>{
    return arr.length = n;
}

//6. filter function
const filter = () => {

}

//7. find function
const find = () => {

}

//8. includes functionn
const includes = (arr, obj, ind) => {
    if(ind!=undefined){
        if(arr[ind]==obj){
            return true;
        }else return false;
    }
    if (ind == undefined){
        for(var i=0; i<arr.length; i++){
            if(arr[i]==obj){
                return true;
            }
            else return false;
        }
    }
}

//9. map function
const map = () => {

}

//10. zip function
const zip = ()=>{

}

//////// OBJECTS
//function to get size of each object
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

//1. merge function
const merge = (obj, sources)=>{

}

//2. omit function
const omit = (arr, obj) => {
const a = Object.size(arr);
var newArr =[];
for(var i; i<a;){
    for(var j; j< obj.length ;j++){
        if (arr[i]!=obj[j]){
            newArr[i]=arr[i];
        }
    }
    i++;
}
return newArr;

}

//3. omitBy
const omitBye = () => {


}

//4. pick function
const pick = () => {

}

//5. pickBy function
const pickBy = () => {

}

//6. toPairs function
const toPairs = () => {

}
