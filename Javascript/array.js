const friends=['arpit','aman','rahul']
console.log(friends[friends.length-1])

    // Add elements
// .push method is used to add element at the end of array
// .unshit used to add element in array at the begnning

// Remove Elemnts
// .pop is used to remove element from the end of array.It returns the element that is removed..
// .shift is used to remove element from the start of array...
// .indexOf is used to find the index of element in the array.

function tips(bills){
    if(bills>=50 && bills<=300){
        const val1=bills*(15/100);
        return val1
    }else{
        const val2=bills*20/100;
        return val2
    }
}

const final=tips(500)
console.log(final)