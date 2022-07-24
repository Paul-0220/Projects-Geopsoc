// const bio={
//     fullName:'Prashannjeet Paul',
//     eId:1502,
//     birthYear:1800,
//     calcAge:function(){
//         return 2040-bio.birthYear
//     }
// }
// console.log(bio)
// console.log(bio.calcAge())
// console.log(`-----------------------------------------------------------------------------------------------------`)

// // used 'this' keyword........
// const bio2={
//     fullName:'Prashannjeet Paul',
//     eId:1502,
//     birthYear:1800,
//     calcAge:function(){
//         return 2040-this.birthYear
//     }
// }
// console.log(bio2)
// console.log(bio2.calcAge())

const bio3={
        fullName:'Prashannjeet Paul',
        eId:1502,
        birthYear:1800,
        calcAge3:function(){
            this.age=2040-this.birthYear
            // console.log(this)
            return this.age
        }

    }

    bio3.calcAge3()

    console.log(bio3.age)
    console.log(bio3)