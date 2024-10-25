import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  //Con el title sin corchetes pasas un string que es lo que recibe si pones corchetes lo que tiene que recibir es un codigo de JS o en este caso la funcion
  template: `

    <app-title [title]='currentFramework()'></app-title>

    <pre>{{frameworksAsSignal() | json}}</pre>

    <pre>{{frameworksAsProperty | json}}</pre>

  `,
  styles: ``,
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change Detection - ${this.frameworksAsSignal().name}`
  )


  public frameworksAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  })

  public frameworksAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };
  //Usa esto cuando quieras cambiar propiedades y no quieren que sean estaticas usando signal para la detection de cambios
  //Para la deteccion de los cambios es mejor usar signals
  constructor() {
    setTimeout(() => {
      //Esto cambia dos propiedades en el tiempo
      this.frameworksAsSignal.update(value => ({...value, name: 'React', releaseDate: 2015}))

      console.log('Hecho');
    },3000);

  }

}
