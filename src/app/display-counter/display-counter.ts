import { Component } from '@angular/core';
import { Counter } from '../store/counter';

@Component({
  imports: [],
  selector: 'app-display-counter',
  styleUrl: './display-counter.css',
  templateUrl: './display-counter.html',
})
export class DisplayCounter {
  constructor(public state:Counter){};
}
