const bioData={
    fullName:'Prashannjeet Paul',
    family:['Dad','Mom'],
    dob:1980,
    // calcAge: function(){
    //     // console.log(this)
    //     return 2040-this.dob
    // }
    calcAge: function(){
        bio.dob=2040-this.age
        // console.log(this)
        return this.age;
    }
}

console.log(bioData.age)
