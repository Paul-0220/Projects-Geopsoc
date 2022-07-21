const bio={
    firstName:'Prashannjeet',
    lastName:'Paul',
    eId:60134,
    friends:['arpit','aman','rahul']
}

console.log(bio.friends)

// Dot noatation...
console.log(bio.firstName)

// Bracket Notation.........
console.log(bio['eId'])

console.log(bio.friends[1])

// Adding new key:value in the object.....
bio.loaction='jabalpur'
bio.love='parents'
console.log(bio)