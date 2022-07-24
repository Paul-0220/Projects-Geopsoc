const markData={
    fullName:'mark miller',
    mass:78,
    height:1.69,
    calcBmi:function(){
        this.bmi=this.mass/this.height**2
        return this.bmi
    }
}

markData.calcBmi()
console.log(markData.bmi)


const johnData={
    fullName:'john smith',
    mass:92,
    height:1.95,
    calcBmi2:function(){
        this.bmi2=this.mass/this.height**2
        return this.bmi
    }
}

johnData.calcBmi2()
console.log(johnData.bmi2)

if(johnData.bmi2>markData.bmi){
    console.log('John has higher bmi')
}else{
    console.log('Mark has higher bmi')
}