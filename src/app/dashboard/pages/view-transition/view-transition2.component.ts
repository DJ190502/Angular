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
  // De esta manera jugando con las propiedades podemos hacer animaciones muy buenas sin casi esfuerzo
  template: `
    <app-title title="View-transition 1"></app-title>

    <section class="flex justify-end">

      <img ngSrc="https://picsum.photos/id/237/200/300" alt="ElPerro" width="200" height="300" style="view-transition-name: hero1"/>

    <div class="fixed bottom-16 right-6 bg-blue-800 w-32 h-32 rounded" style="view-transition-name: hero2"></div>

    </section>

  `,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewTransition2Component { }
