console.log(this)

const sum={
    a:10,
    b:20,
    add:function(){
        return this.a+this.b
    }
}

const call=sum.add()
console.log(call)
// console.log(this)