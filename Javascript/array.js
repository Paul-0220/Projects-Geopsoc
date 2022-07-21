const friends=['arpit','aman','rahul']
console.log(friends[friends.length-1])

    // Add elements
// .push method is used to add element at the end of array
// .unshit used to add element in array at the begnning

// Remove Elemnts
// .pop is used to remove element from the end of array.It returns the element that is removed..
// .shift is used to remove element from the start of array...
// .indexOf is used to find the index of element in the array.

function calcTips(bill){
    if(bill>=50 && bill<=300){
        const val1=bill*(15/100);
        return val1
    }else{
        const val2=bill*20/100;
        return val2
    }
}

const bills=[125,555,45]
const tips=[calcTips(bills[0]),calcTips(bills[1]),calcTips(bills[2])]
console.log(tips)

const total=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]
console.log(total)
// const final=tips(500)
// console.log(final)