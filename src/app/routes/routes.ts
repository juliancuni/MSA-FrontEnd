import { LayoutComponent } from '../layout/layout.component';
import { LoginComponent, RegisterComponent, RecoverComponent, Error404Component, Error401Component, TokenComponent } from './pages';
import { AuthGuard, UnauthGuard } from '../auth';

import {  } from '../auth/guards/unauth.guard';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './home/home.module#HomeModule'},
            { path: 'punonjesit', loadChildren: './punonjesit/punonjesit.module#PunonjesitModule'},
            { path: 'ndermarrja', loadChildren: './ndermarrja/ndermarrja.module#NdermarrjaModule'}
        ]
    },
    { path: 'login', component: LoginComponent, canActivate: [UnauthGuard] },
    { path: 'register', component: RegisterComponent },
    { path: 'recover', component: RecoverComponent },
    { path: '404', component: Error404Component },
    { path: '401', component: Error401Component },
    { path: 'token', component: TokenComponent },
    // Not found
    { path: '**', redirectTo: '404' }

];
