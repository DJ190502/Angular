import { Routes } from '@angular/router';

export const routes: Routes = [
    {    //Todas las rutas empezando por la principal que es el dashboard y que ahi funcionen todas las hijas
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {
                path: 'change-detection',
                title: 'Change Detection',
                loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),

            },
            {
                path: 'control-flow',
                title: 'Control Flow',
                loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),

            },
            {
                path: 'defer-option',
                title: 'Defer Options',
                loadComponent: () => import('./dashboard/pages/defer-option/defer-option.component'),

            },
            {
                path: 'defer-views',
                title: 'Defer Views',
                loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component'),

            },
            {
                path: 'user/:id',
                title: 'User',
                loadComponent: () => import('./dashboard/pages/user/user.component'),

            },
            {
                path: 'user-list',
                title: 'User List',
                loadComponent: () => import('./dashboard/pages/users/users.component'),

            },
            {
                path: 'view-transition-1',
                title: 'View Transition 1',
                loadComponent: () => import('@dashboard/pages/view-transition/view-transition1.component'),

            },
            {
                path: 'view-transition-2',
                title: 'View Transition 2',
                loadComponent: () => import('@dashboard/pages/view-transition/view-transition2.component'),

            },
            { //Esto redirige para que cuando la pagina quede solo en la principal lo obligue a ir hacia una de las paginas
                path:'', redirectTo: 'control-flow', pathMatch: 'full',
            }
        ]
    },{
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    }




];
