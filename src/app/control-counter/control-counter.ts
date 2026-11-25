import { Component } from '@angular/core';
import { Counter } from '../store/counter';

@Component({
  imports: [],
  selector: 'app-control-counter',
  styleUrl: './control-counter.css',
  templateUrl: './control-counter.html',
})
export class ControlCounter {
  constructor(public state:Counter){}
}
