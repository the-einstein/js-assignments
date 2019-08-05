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
const compact = () => {

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
const dropWhile = () => {

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

//1. merge function
const merge = (obj, sources)=>{

}

//2. omit function
const omit = () => {

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
