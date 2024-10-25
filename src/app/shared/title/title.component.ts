import { CommonModule } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<h1 class="text-3xl mb-5">{{title}}</h1>`, 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent { 

  // Me sirve para agregar propiedades a las clases o componentes 
  //@Input me sirve para agregar dentro de ella puede poner parametros como que requerido
  //o el alias. title: string = '' es lo que me permite inicializar la variable que va aparecer
  //existe otro modo que es title!: string ;
  @Input({required: true,}) title: string = '';
  @Input({transform: booleanAttribute}) withShadow : boolean = false;

  //Si quiero poner otra variable por ejemplo un bool para no tener que hacer tantas cosas usamos un transform 
  //que transformara la propiedad a booleano sin tener que hacerla por uno mismo

}
