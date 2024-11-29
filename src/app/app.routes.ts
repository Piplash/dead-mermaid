import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'pub',
        pathMatch: 'full'
    },
    {
        path: 'pub',
        loadChildren: () => import('./pages/pages.module').then(m=>m.PagesModule),
    },
    {
        path: 'administracion',
        loadChildren: () => import('./administracion/administracion.module').then(m=>m.AdministracionModule)
    }
];
