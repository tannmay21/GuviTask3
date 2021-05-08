var arr=['apple','mango','banana','apple','kiwi','kiwi'];

function removedup(items){
    return [...new Set(items)]
}
console.log(removedup(arr));