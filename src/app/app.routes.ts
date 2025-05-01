import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',loadComponent:() => import('./features/components/login/login.component').then(m => m.LoginComponent)},
    {path:'dashboard', loadComponent:() => import('./features/components/dashboard/dashboard.component').then(n => n.DashboardComponent)}
];
