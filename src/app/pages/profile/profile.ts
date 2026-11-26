import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-profile',
  styleUrl: './profile.css',
  templateUrl: './profile.html',
})
export class Profile {
  constructor(public route : ActivatedRoute){}

  name= signal('')
  id=signal(0)
  age=signal(0)
  ngOnInit(){
    this.route.queryParams.subscribe((params)=>{
      console.log(params)
      this.name.set(params['name'])
      this.age.set(params['age'])
      this.id.set(params['id'])
    })

  }
}
