import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <section [ngClass]="[cssClass, 'w-full h-[600px]']">
      Heavy Loader
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HeavyLoadersSlowComponent {

  @Input({ required: true}) cssClass!: string;



  constructor() {
    //Simplemente, genera un tiempo de carga bloqueante no es lo ideal para eso se usan Promise
    const start = Date.now()
    while(Date.now() - start <3000){
      console.log('Cargado')
    }

  }
}
