const avgDolphins=(96+108+89)/3
const avgKoalas=(88+91+110)/3

console.log(avgDolphins,avgKoalas)

if(avgDolphins>avgKoalas && avgDolphins>100){
    console.log(`Dolphins with score ${avgDolphins} is the winner`)
}else if(avgKoalas>avgDolphins && avgKoalas>100){
    console.log("Koalas won")
}else if(avgDolphins===avgKoalas){
    console.log("match draws")
}else{
    console.log('No team wons')
}