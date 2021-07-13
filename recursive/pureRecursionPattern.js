function collectOddValues(arr){
    let newArr = [];

    if(arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])

// essentially you push onto the stack [<newArr>].concat(collectOdValues(<arr.slice(1)))
// use methods like slice, the spread operator, and concast for ARRAYS
// strings need to be slice, substr, or substring
// objects should be made a copy via Object.assign, or the spread operator 
