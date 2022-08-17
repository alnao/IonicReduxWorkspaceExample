import { NgModule } from '@angular/core';
import {  PreloadAllModules,  RouterModule, Routes } from '@angular/router';
import { AnnotazioneComponent } from './annotazione/annotazione.component';
import { AnnotazioniComponent } from './annotazioni/annotazioni.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path : 'login', component: LoginComponent},
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule)
      ,canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'annotazioni',
    component : AnnotazioniComponent
    ,canActivate: [AuthGuard]
  },
  {
    path: 'annotazione/:id',
    component : AnnotazioneComponent
    ,canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
