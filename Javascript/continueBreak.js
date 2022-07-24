
// continue statment.......
const myLife=['mom','dad',30,'job'];
for(let i=0;i<myLife.length;i++){
    if(typeof myLife[i]!=='string') continue;
    console.log(myLife[i])
}

console.log('..............divider................')

// Break Statement........
const self=['parents',30,35000,'love','not available']
for(let i=0;i<self.length;i++){
    if(typeof self[i]=='number') break;
    console.log(self[i])
}

