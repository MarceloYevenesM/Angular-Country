import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  { /* ruta y componente */
    path: 'about',
    component: AboutPageComponent
  },
  { /* Cualquier ruta va llegar a esta */
    path: 'contact',
    component: ContactPageComponent
  },
  { /* Cualquier ruta va llegar a esta */
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  /* Router principal o primero(root de la carpeta) */
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule,
  ]
})


export class AppRoutingModule { }
