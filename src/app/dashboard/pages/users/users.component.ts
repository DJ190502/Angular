import { CommonModule, NgOptimizedImage } from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { RouterModule } from '@angular/router';
import {UsersService} from "@services/users.service";
import { TitleComponent } from '@shared/title/title.component';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    NgOptimizedImage,
    RouterModule
  ],
  templateUrl: './users.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersComponent {

  public userService = inject(UsersService)


}
