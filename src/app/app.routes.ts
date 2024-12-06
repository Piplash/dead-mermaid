import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "tattoo",
    pathMatch: "full",
  },
  {
    path: "tattoo",
    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesModule),
  },
];
