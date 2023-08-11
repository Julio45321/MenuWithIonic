import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'especialidades',
    loadChildren: () => import('./paginas/especialidades/especialidades.module').then( m => m.EspecialidadesPageModule)
  },
  {
    path: 'carnes',
    loadChildren: () => import('./paginas/carnes/carnes.module').then( m => m.CarnesPageModule)
  },
  {
    path: 'mariscos',
    loadChildren: () => import('./paginas/mariscos/mariscos.module').then( m => m.MariscosPageModule)
  },
  {
    path: 'entradas',
    loadChildren: () => import('./paginas/entradas/entradas.module').then( m => m.EntradasPageModule)
  },
  {
    path: 'bebidas',
    loadChildren: () => import('./paginas/bebidas/bebidas.module').then( m => m.BebidasPageModule)
  },
  {
    path: 'postres',
    loadChildren: () => import('./paginas/postres/postres.module').then( m => m.PostresPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
