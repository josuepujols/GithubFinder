//Importo los modulos necesarios 
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

//Importo los componentes
import { UserComponent } from './Components/user/user.component';
import { RepoComponent } from './Components/repo/repo.component';

//Creo mis rutas

const app_routes: Routes = [
    {path: "", component: UserComponent},
    {path: "home", component: UserComponent},
    {path:"repos", component: RepoComponent}
];

export const app_routing_providers: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(app_routes); 

