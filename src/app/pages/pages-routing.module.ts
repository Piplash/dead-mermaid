import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "inicio",
        title: "inicio",
        loadComponent: () => import("./landing/landing.component"),
      },
      {
        path: "cotiza",
        title: "cotiza",
        loadComponent: () => import("./cotiza/cotiza.component"),
      },
      {
        path: "portafolio",
        title: "portafolio",
        loadComponent: () => import("./portafolio/portafolio.component"),
      },
      {
        path: "about",
        title: "about",
        loadComponent: () => import("./about/about.component"),
      },
      {
        path: "",
        redirectTo: "inicio",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
