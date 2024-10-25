import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/req-response';
import { TitleComponent } from "../../../shared/title/title.component";
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
],
  template: `
    <!-- Devuelve el nombre de la persona y si es undefined  -->
    <app-title [title]="user()?.first_name ?? 'Nombre no Disponible'"/>


    <!-- Si hay usuario lo muestra con sus respectivos datos -->
    @if (user()){
      <section>
        <img
            [srcset]="user()!.avatar"
            [alt]="user()!.first_name" 
        />

        <div>
          <h3>{{user()!.first_name}}{{user()!.last_name}}</h3>
          <p>{{user()!.email}}</p>

        </div>

      </section>
    }@else{
      <p>Cargando informacion</p>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserComponent {

  private route = inject(ActivatedRoute);
  private usersServices = inject(UsersService);

  //private titleLabel = signal<User>()

  // public user = signal<User |undefined>(undefined);
 //Arriba es un observable pero no transmite datos por lo que debemos convertirlo en un signal

 //Usamos toSignal para convertir el observable en un signal a esto se le pasa dos parametros primero
 public user = toSignal(
  this.route.params.pipe(
    switchMap(({id})=> this.usersServices.getUserById(id))
  )
 )
 }
