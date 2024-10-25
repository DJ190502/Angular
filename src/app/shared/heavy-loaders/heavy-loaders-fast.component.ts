import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [
    CommonModule,
  ],
  //EN el ngcontent me quiere decir que cual cosa que yo ponga dentro del componente es ahi donde se va a mostrar
  template: `
    <section [ngClass]="['w-full', cssClass]">

      <ng-content/>

    </section>
            `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersFastComponent {

  @Input({ required: true}) cssClass!: string;


  //El constructor se puede utilizar para ralentizar la construccion de un componente en algunos casos el constructor
  // no es más que convertir el componente en un objeto
  constructor() {
      console.log('Acaba');
    }

  }

