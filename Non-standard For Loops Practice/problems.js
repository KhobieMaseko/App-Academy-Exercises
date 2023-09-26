function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let odds = [];

    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] % 2 === 0)
        {
            odds.push(arr[i]);
        }
    }
    return odds;
}


function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let newArr = [];
    for (let i = 1; i < arr.length; i += 2)
    {
        newArr.push(arr[i]);
    }
    return newArr.reverse();
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let powersArr = [];

    for (let i = 1; i < arr.length; i *= 2)
    {
        powersArr.push(arr[i]);
    }
    return powersArr;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let newArr = [];

    for (let i = 1; i < arr.length; i *= n)
    {
        newArr.push(arr[i]);
    }
    return newArr;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let halfway = Math.ceil(arr.length / 2);

    let newArr = arr.slice(0, halfway);

    return newArr;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let halvedArr = [];
    for (let i = Math.floor((arr.length + 1) / 2); i < arr.length; i++)
    {
        halvedArr.push(arr[i]);
    }
    return halvedArr;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
