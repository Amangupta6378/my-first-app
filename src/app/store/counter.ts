import { Service,signal } from '@angular/core';

@Service()
export class Counter {

    count = signal(10)

    decreament(){
        this.count.update((c)=>c-1)
    }

    increament(){
        this.count.update((c)=>c+1)
    }

    reset(){
        this.count.set(0)
    }
}
