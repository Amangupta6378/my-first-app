import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.html'
})
export class Child {

  // @Input() name: string | undefined;
  @Input() name : string |  undefined
  @Input() name2 : string |  undefined
  @Input() age : string | undefined

  @Input() userName : string | undefined;
  @Output() selectedUser = new EventEmitter()
  @Output() deleteUser = new EventEmitter()

  whichUser(name:string | undefined){
    // console.log(name)
    this.selectedUser.emit(name)
  }

  delete(name:string|undefined){
    console.log(name)
    this.deleteUser.emit(name)
  }


}