  import {computed, inject, Injectable, signal} from '@angular/core';
  import type {User, UserResponse, UsersResponse} from "@interfaces/req-response";
  import {HttpClient} from "@angular/common/http";
  import { delay, map } from 'rxjs';


  interface State{
    users: User[];
    loading: boolean;
  }


  @Injectable({
    providedIn: 'root'
  })
  export class UsersService {

    //Con esto injectamos el HTTP Client
    private http = inject(HttpClient);

  //El simbolo de numeral lo hace privado en el sentido que no permite que se pueda acceder es como el privado privado de python

    #state = signal<State>({
      loading: true,
      users: []
    });

    //Para poder acceder a los usaurios en el componente
    public users = computed(() => this.#state().users)
    public loading = computed(() => this.#state().loading)

    constructor() {

      //Con esto hago la peticion HTTP a esa pagina el delay usa rjxs y lo hace qeu la peticion se demora un poco mas de lo normal
      this.http.get<UsersResponse>('/api/users').pipe(delay(1500)).subscribe(res => {
        //Esta va a ser la respuesta
        this.#state.set({
          loading:false,
          users: res.data,
        })
      })
    }

    getUserById(id: string) {
      //Con esto hago la peticion HTTP a esa pagina el delay usa rjxs y lo hace qeu la peticion se demora un poco mas de lo normal
     return this.http.get<UserResponse>(`/api/users/${id}`)
      .pipe(
        delay(1500),
        map(resp => resp.data))
    }

  }
