import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  constructor(public route :ActivatedRoute){}
  userName = signal('')
  userId = signal(0)
  ngOnInit(){
    this.route.params.subscribe((params)=>{
      console.log(params)
      this.userName.set(params['name'])
      this.userId.set(params['id'])
    })
  }
}
