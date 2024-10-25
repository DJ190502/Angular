import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from "@shared/title/title.component";

type Grade = 'A'|'B'|'F'; //Los valores que puede tomar grade

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
],
  templateUrl: './control-flow.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlowComponent {
  /* Por ejemplo, si tienes un contador en tu aplicación y usas un Signal para rastrear cuántas veces alguien ha hecho clic en un botón,
  cada vez que alguien hace clic en ese botón, el Signal se actualiza. Angular sabe exactamente dónde mostrar este contador en tu aplicación
  y solo actualizará esa parte específica de la pantalla, en lugar de tener que revisar y posiblemente actualizar toda la página.*/

  /* En resumen, los Signals son una herramienta poderosa en Angular que te permite decirle al framework qué partes de tu estado
  (los datos de tu aplicación) son importantes y deben ser monitoreadas para cambios. Cuando esos cambios ocurren, Angular sabe exactamente
  qué partes de tu aplicación necesitan ser actualizadas, lo que hace que tu aplicación sea más eficiente y rápida.*/

  //toggleContent es la funcion del boton que actualiza


  public showContent = signal(false);

  public grade = signal<Grade>('A');

  public frameworks = signal(['Angular', 'Node.js', 'Vue', 'Svelte', 'Qwik']);
  public frameworks2 = signal([]);


  //Este metodo es para que siempre me de una grade diferente
  public RandomGrade(){
    const grades: Grade[] = ['A','B','F'];
    const RandomIndex = Math.floor(Math.random() * grades.length);
    return grades[RandomIndex];
  }

  public toggleContent() {
    this.showContent.update(value => !value);

  }
  public toggleGrade(){
    this.grade.set(this.RandomGrade())
  }

}
