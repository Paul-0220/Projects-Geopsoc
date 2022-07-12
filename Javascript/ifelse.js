const markMass=78;
const markHeight=1.69;
const markBmi=markMass/markHeight**2
console.log(markBmi)

const johnMass=95;
const johnHeight=1.88;
const johnBmi=johnMass/johnHeight**2
console.log(johnBmi)

if(markBmi>johnBmi){
    console.log(`Marks BMI ${markBmi} is higher than john's BMI ${johnBmi}`)
}else{
    console.log(`John's BMI ${johnBmi} is greater than Mark's BMI ${markBmi}`)
}