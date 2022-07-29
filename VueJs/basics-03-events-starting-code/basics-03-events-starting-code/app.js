// const app = Vue.createApp({
//   data() {
//     return {
//       counter: 0,
//     };
//   },
//   methods:{
//     add(){
//       return this.counter++
//     },
//     reduce(){
//       return this.counter--
//     }
//   }
// });

// app.mount('#events');

// Passing Parameters in the methods
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:" "
    };
  },
  methods:{
    add(num){
      this.counter=this.counter+num
      
    },
    reduce(num){
     this.counter=this.counter-num
    },
    // Function to read data from the input field.....
    addName(event){
       this.name=event.target.value
    },
  

  // Creating function for form data...
  submitForm(event){
   event.preventDefault();
    alert('Hello')
  }
}
});

app.mount('#events');
