import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {TitleComponent} from "@shared/title/title.component";

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    NgOptimizedImage
  ],
  //usando la propiedad view-transition-name podemos hacer una transicion entre objetos mientras presenten el mismo nombre
  template: `
    <app-title title="View-transition 1"></app-title>

    <section class="flex justify-start">

      <img ngSrc="https://picsum.photos/id/237/200/300" alt="ElPerro" width="200" height="300" style="view-transition-name: hero1"/>

    <div class="bg-blue-500 w-56 h-56" style="view-transition-name: hero2"></div>

    </section>

  `,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewTransition2Component { }
