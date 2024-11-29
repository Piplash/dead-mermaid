import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionComponent } from './administracion.component';

const routes: Routes = [
  {
    path: '',
    component: AdministracionComponent,
    children: [
      {
        path: 'inicio',
        title: 'inicio',
        loadComponent: () => import('./inicio-adm/inicio-adm.component'),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
