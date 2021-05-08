arr1 = [1,4,8]
arr2 = [2,4]

var concat= arr1.concat(arr2)
concat= concat.sort(function (a,b)
   { return (a-b)
    
});
 console.log(concat)
 
 var length= concat.length;
 

if (length%2 ===1){
    
    console.log(concat[(length/2)-.5])
    return concat[(length/2)-.5]
}

else{
    
    console.log((concat [length/2]+concat[(lenght/2)-1])/2 )
    return(concat [length/2]+concat[(lenght/2)-1])/2 
}