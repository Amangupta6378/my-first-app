import { Component,signal } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  userData = signal({id:1,name:"Aman", age:24})
}
