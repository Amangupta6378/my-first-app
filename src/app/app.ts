import { Component, effect, signal, computed, WritableSignal } from '@angular/core';
import { log } from 'console';
import { RouterOutlet } from '@angular/router';
import { Ananya } from './ananya/ananya';
import { Login } from './login/login';
import { FormsModule } from '@angular/forms';
import { Child } from './child/child';


@Component({
  imports: [RouterOutlet,  FormsModule, Child],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
 
})
export class App {
  protected readonly title = signal('my-first-app');
  // name = "Aman Gupta"
  // email = "aman@gmail.com"

  // getName(){
  //   return this.name;
  // }
  // sum(a:number,b:number){
  //   return a+b;
  // }
 

  // call_Tamanna(){
  //   alert("I am calling Tamanna.");
  // }

  // count = 0;
  // counter(){
  //   this.count++;
  // }

  // handleSubmit(event:any){
  //   console.log(event.target.value);
  // }

//   handleSubmit(eventName:string){
//     console.log(eventName);
//   }

//  btn_disabled = false;

//  toggle(){
//   this.btn_disabled = !this.btn_disabled;
//  }

//-------------------------------------------------------------------------------------------------------



// data = 0;
// count = signal(0);

// increaseData(){
//   this.data = this.data+1;
// }
// increaseCount(){
//   this.count.set(this.count()+1)
// }

// constructor(){
//   effect(()=>{
//     console.log("This is count", this.count());
//     if(this.data ==10){
//       this.data = 0;
//     }
//     if(this.count()==10){
//       this.count.set(0);
//     }
    
//   })
//   console.log("This is data",this.data);
// }

//------------------------------------------------------------------------------------------


// height = signal(10);
// width = signal(20);

// increaseHeight(){
//   this.height.set(this.height()+10);
// }
// increaseWidth(){
//   this.width.set(this.width() + 20)
// }

// area = computed(()=>{
//   return this.height() * this.width();
//   // console.log(this.area)
// });

// -------------------------------------------------------------------------------------------------


// speed = signal(0);
// color = "black"

// increaseSpeed(){
//   this.speed.set(this.speed()+10)
// }

// constructor(){
//   effect(()=>{
//     // console.log("speed is : ",this.speed())
//      if(this.speed() >0 && this.speed() <= 80 ){
//       this.color = 'green';
//     }
//     if(this.speed() > 80 && this.speed() <120 ){
//       this.color = 'orange'
//     }
//     if(this.speed() >= 120){
//       this.color = 'red'
//     }
   
//   })
  
// }

// Signal Datatype  



// data:WritableSignal<string | number> = signal<string | number >(78)

// // constructor(){
// //   this.data.set(0)
// // }

// users : WritableSignal<(string | number)[]> = signal(["Aman","Tamanna", "Ananya",23,64,75])

// constructor(){
//   this.users.update((item)=>[...item, "Rahul"])
//   console.log(this.users())
// }





// isLogin = signal(true);
// status = signal("not started")


// handleLogin(){
//   this.isLogin.set(!this.isLogin())
//   }

//   handleStatus(event : Event){
//     let target = event.target as HTMLSelectElement
//     this.status.set(target.value)
//   }




// users = signal(["Aman","Ajay","Ankit","Raj"])

// userDetails = signal(
//   [
//     {id:1, name : "Aman", surName : "Gupta", age:24},
//     {id:2, name : "Amit", surName : "jha", age:23},
//     {id:3, name : "Ankit", surName : "yadav", age:25},
//     {id:4, name : "Ajay", surName : "Chauhan", age:24},
//     {id:5, name : "Amar", surName : "jeet", age:22}
//   ]
// )

// status = signal("success")

//   handleStatus(event : Event){
//     let target = event.target as HTMLSelectElement
//     this.status.set(target.value)
//   }


// name = signal("Aman")
// age = signal(30)


userName = signal("Aman Gupta")

users = signal(["Peter","Hari", "Shankar","Radha"])
newUser = signal("");


// addUser(){
//   this.users.update((data)=>([...data, this.newUser()]))
//   this.newUser.set('')
// }

addUser(){
  this.users.update((data)=>([...data, this.newUser()]))
  this.newUser.set('')
}





}







