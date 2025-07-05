import { Routes } from '@angular/router';
import { HomeComponent } from './core/layout/home/home.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./core/layout/home/home.component').then(m => m.HomeComponent)
    }
];
